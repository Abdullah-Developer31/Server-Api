// User Add
document.getElementById('addUser').addEventListener('click', async event => {
event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    axios.post('http://localhost:3000/user', {
        "name":name,
        "email":email,
        "address":address,
      }).then(function (response) {
          console.log(response)
       document.getElementById('addUserRes').innerHTML=response.data;
      })
      .catch(function (error) {
        document.getElementById('addUserRes').innerHTML=error
      });
   
});

// Search all users

document.getElementById('searchAllUsers').addEventListener('click', async event => {
    event.preventDefault();
        axios.get('http://localhost:3000/users').then(function (response) {
            // console.log(response.data)
            response.data.map((eachUserRes,index)=>{
                console.log(eachUserRes)
                document.getElementById(`allUserRes${index+1}`).innerHTML= `name: ${eachUserRes.name}, email: ${eachUserRes.email}, address: ${eachUserRes.address}`;
            })
           
          })
          .catch(function (error) {
            // console.log(error)
            document.getElementById('allUserRes').innerHTML=error
          });
       
    });

    // Individual user

    document.getElementById('searchIndUser').addEventListener('click', async event => {
        event.preventDefault();
        let userId = document.getElementById('Id').value;
        userId = Number(userId);
            axios.get(`http://localhost:3000/user/${userId?userId-1:0}`)
            .then(function (response) {
                console.log(response.data)
                document.getElementById(`indUserRes`).innerHTML= `name: ${response.data.name}, email: ${response.data.email}, address: ${response.data.address}`;
              })
              .catch(function (error) {
                document.getElementById('indUserRes').innerHTML=error
              });
           
        });