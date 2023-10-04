// Get Request 

function FetchTodo(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function(data){
    console.log(data)
    return data.json()
  })
  .then(function(data){
    var results = document.querySelector("#result")
    results.innerHTML =`<p>Title of todo ${data.title}</p><p> Id of todo is ${data.id}</p>`
    console.log(data)
  })
  .catch(function(error){
    console.log(error)
  })

}


// Another Get Request 

console.log("Hello, Good Morning");


fetch("https://jsonplaceholder.typicode.com/users")
.then(function(data){
  return data.json();
}).then(function(data){
  console.log(data);
})


// Post Method 


const res = {
  title: "This is title",
  body: "This is post body",
  userId: 2
}

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(res),
  headers: {
    "Content-type": "application/json"
  }
  
}).then(function(data){
  return data.json();
  
}).then(function(res){
  console.log(res);
})
