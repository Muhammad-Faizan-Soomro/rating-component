var ratingActual = 0;

$(".rating").click(function () {
  ratingActual = $(this).attr("id");
});

$(".submit").click(function () {
  if (ratingActual === 0) {
    alert("please give a rating then click submit");
  } else {
    $(".circle").removeClass().addClass("row-span-2 mx-auto mt-8");
    $("img").attr("src", "./images/illustration-thank-you.svg").removeClass();
    $(".rating-view p").text("You selected " + ratingActual + " out of 5");
    $(".rating-view").removeClass("hidden");
    $("h1").addClass("text-center -mt-8").text("Thank you!");
    $("button").addClass("hidden");
    $("p.mx-3")
      .addClass("mx-[0.95rem] -mt-14 text-center")
      .text(
        "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
      );
  }
});
