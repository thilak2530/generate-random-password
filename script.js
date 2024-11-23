const passwordBox=document.getElementById("password");
const clickbutton=document.getElementById("clickbutton")

const length=8;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghigklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()-_=+/?><";

const all=uppercase+lowercase+symbols+numbers;


function createPassword(){
    let password="";
    password +=uppercase[Math.floor(Math.random()*uppercase.length)];
    password +=lowercase[Math.floor(Math.random()*lowercase.length)];
    password +=numbers[Math.floor(Math.random()*numbers.length)];
    password +=symbols[Math.floor(Math.random()*symbols.length)];

    while(length > password.length){
        password +=all[Math.floor(Math.random()*all.length)];
    }
    passwordBox.value=password;
}

clickbutton.addEventListener("click",()=>{
    createPassword();
});

function copyPassword(){
    passwordBox.select();
   documen.execCommand("copy");

    
}