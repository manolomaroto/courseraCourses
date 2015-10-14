

$(document).ready(function(){
    $("#press").click(function(){
        var number = Math.ceil(Math.random()*3);
       
        $(".result").html("<img src='image0"+number+".jpg'>");
    
    })
});