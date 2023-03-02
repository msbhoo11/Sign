
$(document).ready(function(){
    $("button").click(function(){
        alert("Successful");
    });      
});
function clearFields() {
    $(".lname").value="";
    $(".fname").value="";
    $(".email").value="";
}