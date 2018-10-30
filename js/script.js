let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
if(age<18){
    alert("You are not allowed to visit this website");
}
if(age>22){
    alert("Welcome, "+name)
}
if(age<=22&&age>=18){
    prompt("Are you sure you want to continue?");
    if(true){
        alert("Welcome, "+name);
    }
    else{
        alert("You are not allowed to visit this website.");
    }
}