// example for demo
$(document).ready(function(){
    $("#myform").submit(function(){
        $.ajax({
            url: "/demo/",
            type: "POST",
            data: $("#myform").serialize(),
            success: function(html){
                $("#content").html(html)
                jQuery('#myform')[0].reset();
            },
        });
        return false;
    });
});

// for addition in db
$(document).ready(function(){
    $("#formAdd").submit(function(){
        $.ajax({
            url: "/addition/",
            type: "POST",
            data: $("#formAdd").serialize(),
            success: function(html){
                $("#content").html(html)
                jQuery('#formAdd')[0].reset();
            },
        });
        return false;
    });
});