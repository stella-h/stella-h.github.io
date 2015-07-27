// $(document).ready(function() {
//  console.log(" you can do this !");


/**** open button ****/
 $("#work").on("click", function() {
  $(".work").toggleClass("active");
  // $(".work-open").slideToggle("slow");
  $(".introduction").toggleClass("pushUp", 10, "easeIn");
 });

 $("#about").on("click", function() {
  $(".about").toggleClass("active");
  $(".introduction").toggleClass("pushUp", 10, "easeIn");
 });

 /**** close button ****/
 $(".close").on("click", function() {
  $(".work").removeClass("active");
  $(".introduction").removeClass("pushUp", 10, "easeIn");

  $(".about").removeClass("active");
  $(".introduction").removeClass("pushUp", 10, "easeIn");
 });



 // var disableScroll = function() {
 //  $("section.sidePage").addClass("noScroll");
 // }
 // disableScroll();


// });

// var circle, line;
// function confetti(t) {

//   var project = t.attr('id');

//   if(!$('.images').hasClass('hovered')) {

//     $('.images').addClass('hovered');

//     circle = setInterval(function() {

//       var image = '#' + project + ' .image a',
//         x = Math.random() * $(images).width(),
//         y = Math.random() * $(images).height(),
//         degree = parseInt(Math.random() * 360);

//       $("<span class='span-circle' />")
//         .css({
//           'top': y + 'px',
//           'left': x + 'px',
//           'transform': 'rotate(' + degree + 'deg)',
//           '-webkit-transform': 'rotate(' + degree + 'deg)',
//           '-moz-transform': 'rotate(' + degree + 'deg)',
//           '-o-transform': 'rotate(' + degree + 'deg)',
//           '-ms-transform': 'rotate(' + degree + 'deg)'
//         })
//         .appendTo(image)
//         .fadeIn(250);

//     }, 1000);

//     line = setInterval(function() {

//       var image = '#' + project + ' .image a',
//         x = Math.random() * $(images).width(),
//         y = Math.random() * $(images).height(),
//         degree = parseInt(Math.random() * 360);

//       $("<span class='span-line' />")
//         .css({
//           'top': y + 'px',
//           'left': x + 'px',
//           'transform': 'rotate(' + degree + 'deg)',
//           '-webkit-transform': 'rotate(' + degree + 'deg)',
//           '-moz-transform': 'rotate(' + degree + 'deg)',
//           '-o-transform': 'rotate(' + degree+ 'deg)',
//           '-ms-transform': 'rotate(' + degree + 'deg)'
//         })
//         .appendTo(image)
//         .fadeIn(250);

//     }, 500);

//   } else {

//     $('.images').removeClass('hovered');

//     clearInterval(circle);
//     clearInterval(line);

//     $('.images').fadeOut(250, function(){
//         $(this).remove();
//     });

//   };
// };
