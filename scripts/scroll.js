document.addEventListener("scroll", function () {
  var scrollPercentage =
    window.scrollY >= window.innerHeight
      ? 100
      : (100 * window.scrollY) / window.innerHeight;
  var header = document.getElementsByTagName("header")[0];
  header.style.filter = `grayscale(${scrollPercentage}%)`;
});
