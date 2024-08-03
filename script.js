function clickit(){
    var a=document.getElementById("link").value;
    if(a.length==9){
        alert("Enter Phone number correctly");
        location.reload();
    }
    else{
        alert("Sent to your Phone number");
        // document.getElementById("link").placeholder
    }
}