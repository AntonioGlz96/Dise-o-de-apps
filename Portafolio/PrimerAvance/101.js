console.log("Empieza el codigo.")
/*
//pendinete copiar lo atrasado
///////////////////////////operadors ternarios//////////////////
var animal = "kitty"
if(animal ==="kitty"){
    console.log("it is, that is a kitty")
}else{
    console.log("Is not a kitty")
}
var cat = (animal==="kitty") ? "it is, that is a kitty" : "its not a kitty"
console.log(cat)

switch (animal) {
    case 'kitty':
        console.log("it is a kitty")
        break;
    case 'puppy':
        console.log("it is a puppy")
        break;
    default:
        console.log("it is other thing")
        break;
}
*/
////////////////////////////////////////////////////////////////
/*
var a ='hello'

function foo(){
    var b = 'world'
    function bar(){
        var c = 'hola'

        console.log(a)
        console.log(b)
        console.log(c)
    }
    bar()
    console.log(a)
}
foo()
console.log(a)
*/
//////////////////////////////////////////////////////////////
/*
function foo(){
    var a = "world"
    function bar(){
        console.log(a)
    }
    bar()
}
foo()
console.log(a) //"hello"

////////////////////////////////////////////////////////////////

function prism(l){
    return function(w){
        return function(h){
            return l + w + h ;       }
    }
}
//////////////////////////////////////////////////////////////////

var param= "parametro funcion"
var fun = (function(){
    console.log("i am the IIFE");
}());

var foo = (function(param){
    console.log("" + param)
})(param);

var bar = (function()
{
    return "regresame valores"
}());
console.log(bar)

/////////////////////////////////////////////////////////////////

var namedSum = function sum (a,b ){
    return a + b;
}
var anonSum = function (a,b) {
    return a +b;
}

console.log(namedSum( 3,3));
console.log(anonSum(7,3));
*/
//////////////////////////////////////////////////////////////////
// var say = function(times){
//     if (times > 0 ){
//         console.log("hola")
//         say(times-1)
//     }
// }
// var sayhello = say
// say = "Oops"
// sayhello(3)

/////////////////////////////////////////////////////////////////////

// function personality(person,...msg){
//     msg.forEach(arg => {
//         console.log(person+ " say: " + arg)
//     })
// }
// personality("foo","hellou","world","Js","React","Native")
// personality("Tono", "JS", "Hello", "19")

////////////////////////////////////////////////////////////////////

// foo()

// function foo(){
//     console.log("")
//     console.log("hola")
//     console.log("como")
//     console.log("estas?")
// }

/////////////////////////////////////////////////////////////////////////////

// function prism(l){
//     return function(w){
//         return function (h){
//         return l * w * h
//         }
//     }
// }

// console.log(prism(3)(6)(7))

/////////////////////////////////////////////////////////////////////////////

// function prism(l=1, w=2, h=5){
//     return l * w * h
// }
// console.log(prism(2,1,5))

/////////////////////////////////////////////////////////////////////////////

var url ="https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript"

 const responseData=fetch(url).then(response=>response.json());

responseData.then({{items, has_more,quota_max,quota_remaining}}) => {
for (const{tittle,score,owner,link,answare_count} of items){
console.log("Q: - -"+ tittle + "\n" + "Score")
   }
}

/////////////////////////////////////////////////////////////////////////////

// var url= "https://jsonplaceholder.typicode.com/users"

// fetch(url).then(response => response.json())
// .then(response => {
//     for(var key of response){
//         console.log("Username: " + key.username + " - - Gmail: " + key.email + " - - City: " + key.city)
//     }
// })

// fetch(url,{
//     method: "POST",
//     headers: {
//         "content_type" : "application/json"
//     },
//     body : JSON.stringify({
//         username: "foo bar",
//         email: "foo@gbar.com"
//     })
// }).then(response => response.json())
// .then(response=>console.log(response))

/////////////////////////////////////////////////////////////////////////////