$(document).ready(function(){
    $("#man1").click(function(){
      $("#para1").toggle();
      $("#para2,#para3,#para4,.para5").hide();
    });
    $("#man2").click(function(){
        $("#para2").toggle();
        $("#para1,#para3,#para4,.para5").hide();
      });
      $("#girl1").click(function(){
        $("#para3").toggle();
        $("#para2,#para1,#para4,.para5").hide();
      });
      $("#girl2").click(function(){
        $("#para4").toggle();
        $("#para2,#para3,#para1,.para5").hide();
      });
      $("#explanation").click(function(){
        $(".para5").show();
      });
      $(".hover").mouseOver(function(){
        $(".hover").zoomIn();
      });
});

// contact us

function msg() {
    var name = document.getElementById("name").value;
    const output = document.getElementById("message");
    output.innerHTML = "Hey! thank  you for your feedback" + " " + name;
  }

//   gallery page

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".parallax-zoom-blur img").css({
      width: 100 + scroll / 5 + "+",
      top: -(scroll / 10) + "%",
      "-webkit-filter": "blur(" + scroll / 100 + "px)",
      filter: "blur(" + scroll / 100 + "px)",
    });
  });
  
  // show and hide section
  $(document).ready(function () {
    $("#show1").click(function () {
      $("#hidecont1").show();
    });
    $("#hidecont1").click(function () {
      $("#hidecont1").hide();
    });
  });
  
  $(document).ready(function () {
    $("#show2").click(function () {
      $("#hidecont").show();
    });
    $("#hidecont").click(function () {
      $("#hidecont").hide();
    });
  });
  $(document).ready(function () {
    console.log("page loaded.");
  
    // click effect
    $(".card-button").click(function () {
      $(".card-gallery").show();
    });
    $(".card-mouseon").click(function () {
      $(".card-mygallery").show();
    });
    $(".card-button").click(function () {
      $(".card-test").hide();
    });
    $(".fa-solid").click(function () {
      $(".card-test").show();
      $(".card-gallery").hide();
    });
    $(".card-mouseon").click(function () {
      $(".card-test2").hide();
    });
    $(".fa-solid").click(function () {
      $(".card-test2").show();
      $(".card-mygallery").hide();
    });
  });