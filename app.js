document.getElementById("btnGet").addEventListener("click", makerequest);
 function makerequest()
 {
     fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
         if(!res.ok){
             throw Error(res.statusText)
         }
         return res.json()
     }).then((result)=>{
         
       // var player='<h2>Lists of Users</h2>';
       var output=document.getElementById("message")
        result.forEach(user=> {
         output.innerHTML +=
        `<div class="player">
          <div class="strength">Name : ${user.name}</div>
          <div>Email   : ${user.email}</div>
          <div>Phone   : ${user.phone}</div>
          <div>Website : ${user.website}</div>
          <div>Company : ${user.company.name}</div>
          <div>City    : ${user.address.city}</div>
          <div>Zipcode : ${user.address.zipcode}</div>
         </div>`
     });
    }).catch(
        //(error)=>{console.log(error)})
        (error) => {
            console.log('Promise rejected.');
            console.log(error.message);
          });
        
 }