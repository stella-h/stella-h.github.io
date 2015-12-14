$(document).ready(function() {
 console.log(" look ma! i'm famous! ");
});

$(function(){
        $(".welcome").typed({
            strings: ["hello world !"],
            typeSpeed: 90,
            startDelay: 800,
            backDelay: 1500,
            backSpeed: 100,
            loop: true,
            showCursor: false,
        });
    });