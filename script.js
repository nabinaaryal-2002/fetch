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


}