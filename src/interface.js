fetch('https://content.guardianapis.com/search?page=1&q=debate&api-key=test')
  .then(response => response.json())
  .then(data => {
    let i;
    for (i = 0; i < 10; i++) {
      console.log(data.response.results[i])
    };
});
