const socket = io()
let name = document.getElementById("usernane")
let texto = document.getElementById("message")
let send = document.getElementById("send")
let output = document.getElementById("output")
let user_name = document.getElementById("name")
     
    
send.addEventListener("click",()=>{
    socket.emit("message",{
        name: name.value,
        message: texto.value
    });
    socket.emit("name",{
        user_name: user_name.value
    }); 
});

socket.on("message",(data)=>{
    output.innerHTML += "<p>"+data.name+": "+data.message+ "</p>" 
});


socket.on("name",(data)=>{
    console.log(data.user_name)
    if(name.value === data.user_name && name.value != ""){
        output.innerHTML += "<p>"+ " hola mundo" + "</p>" 
    }
});

/* 
socket.on("user",(data)=>{
    console.log(user_name.value)
    if(name.value === user_name.value){
        output.innerHTML += "<p>"+ " hola mundo"+"</p>" 
    }
}); */
