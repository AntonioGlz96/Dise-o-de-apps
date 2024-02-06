
var url = "https://jsonplaceholder.typicode.com/posts"

const axios = require('axios') 


axios.get(url).then(({data}) => {
     for (const key in data){
         console.log("ID: " + data[key].id + "\nUserId: " + data[key].userId)
     }
 });

////////////////////////////////////////////////////////

// axios.post(url,{
//     userId: 7,
//     title: "Lorem Ipsum ETC ETC"
// }).then(response=> {
//     if(response.status === 201){
//     console.log("El registro: "
//     + "fue registrado con exito")
//     }
//  })

////////////////////////////////////////////////////////