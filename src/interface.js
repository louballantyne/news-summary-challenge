document.addEventListener("DOMContentLoaded", function() {
let articles = [];
let articleList = document.getElementById("article-list");
getArticles();
setTimeout(function(){
  showArticles();
},1000);

  function getArticles () {
    fetch('https://content.guardianapis.com/search?page=1&q=all&show-fields=thumbnail&api-key=test')
      .then(response => response.json())
      .then(data => {
        let i;
        for (i = 0; i < 10; i++) {
          console.log(data);
          console.log(data.response.results[i]);
          articles.push({title: data.response.results[i].webTitle, url: data.response.results[i].webUrl, thumbnail: data.response.results[i].fields.thumbnail, summary: "A summary"});
        }
        console.log(articles);
    });
  }

  function showArticles(){
    articles.forEach(function(article){
      var div = document.createElement('div');
      var img = document.createElement('img');
      img.src = article.thumbnail;
      div.setAttribute("id", articles.indexOf(article));
      div.innerHTML += article.title;
      articleList.appendChild(div);
      div.appendChild(img);
      console.log("added");
    });
  }

  articleList.addEventListener('click', function(event){
    if (event.target !== this) {
      let num = event.target.id;
      articleList.style.display = "none";
      document.getElementById("full-text").textContent = "temp"
    }
  })

});
