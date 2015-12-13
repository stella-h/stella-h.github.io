$(document).ready(function() {
 console.log(" you can do this !");
});

$(function(){
        $(".welcome").typed({
            strings: ["hello world"],
            typeSpeed: 100,
            startDelay: 800,
            backDelay: 4000,
            backSpeed: 100,
            loop: true,
            showCursor: false,
        });
    });