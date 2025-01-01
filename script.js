function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if(name==="" || email===""){
        alert("All fields must be filled out")
        return false
    }// if empty
    if(email.indexOf("@")===-1 ||email.indexOf(".")===-1){
        alert("please enter a valid email number");
        return false;
    }
    return true;
}//validate

let btnTop = document.getElementById("btnTop");
window.onscroll = function(){
   if(document.documentElement.scrollTop > 400){
    btnTop.style.display ="block"
   }
   else{
    btnTop.style.display = "none"
   }
}
btnTop.addEventListener("click" , function(){
    window.scroll(
        {
            left:0,
            top:0,
            behavior:"smooth"
        }
    )

})