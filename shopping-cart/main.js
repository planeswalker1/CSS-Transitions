//when click get closest li, find img, clone img, add zoom class, append to body tag;
$(".btn").on("click", function () {
$(this).closest("li").find("img").clone().addClass("zoom").appendTo("body");
// remove cloned image after 1 sec
setTimeout(function () {
  $(".zoom").remove();
}, 1000);
});
