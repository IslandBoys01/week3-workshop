$(document).ready(function(){
console.log("page ready");
$("#loginPage").submit(function(event){
    event.preventDefault();
    ajaxPost();
});

function ajaxPost(){
    // form data from form
    var formData = {
        email : $("#email").val(),
        psswd : $("#psswd").val()
    }

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: window.location + "api/login",
        data: JSON.stringify(formData),
        dataType: 'json',
        success : function(person) {
            if(person.valid == true){
                $("#loginPage").addClass("success");
                $("#loginPage").removeClass("fail");

            }else{
                $("#loginPage").removeClass("success");
                $("#loginPage").addClass("fail");
            }
            $("#postResultDiv").html("<p>" + "Post successfully! <br>" + "Email address: " + person.email + "</br>" +
            "Password: " + person.psswd + "</br>" + "Valid user: " + person.valid +"</p>");
        },
        error: function(e) {
            alert("Error!")
            console.log("Error: ", e);
        }
    });
   resetData();

}

function resetData(){
    $("#email").val("");
    $("#psswd").val("");
    }
    
});