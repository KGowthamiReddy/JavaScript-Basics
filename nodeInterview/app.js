async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } 
  
  getData();