
// function getAx(url, id) {
//  return axios.get(url)
//   .then (response => {
//   let user =  returnElemWithId(response, id);
//   return (user);
//   }) 
// }
   

// getAx('https://jsonplaceholder.typicode.com/todos', 1)
// .then (e => {

//   getAx('https://jsonplaceholder.typicode.com/users', e.userId).then(user => {
//   console.log(user.name);
// });
// })


// function returnElemWithId(promiceResponce, id) {
//   let array = promiceResponce.data;
//   let elWithId = array.find(val => val.id == id);
//   return elWithId;
// }

function getAx(url, id) {
  return axios.get(url)
   .then (response => {
   let user =  returnElemWithId(response, id);
   return user;
   }) 
 }
    

 function returnElemWithId(promiceResponce, id) {
  let array = promiceResponce.data;
  let elWithId = array.filter(val => val.userId == id);
  return elWithId;
}

getAx('https://jsonplaceholder.typicode.com/todos', 1)
.then (e => {
  let list = e.filter(elem => elem.completed == false)
  .map(elem => elem.title)
   console.log (list);
})


