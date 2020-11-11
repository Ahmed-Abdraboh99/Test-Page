var name=prompt("What is your name?");
document.getElementById('wel').innerHTML="welcome " + name + " you can write your cv easily from this page";
(function test(){
    if (name=="ahmed"){
        document.getElementById('wel').innerHTML="welcome " + name + " you my baby";
    }
})();