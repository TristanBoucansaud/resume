document.addEventListener("scroll", function () {
  var scrollPercentage =
    window.scrollY >= window.innerHeight
      ? 100
      : (100 * window.scrollY) / window.innerHeight;
  var header = document.getElementsByTagName("header")[0];
  header.style.filter = `grayscale(${scrollPercentage}%)`;

  var navbar = this.getElementsByTagName('nav')[0];
  if (scrollPercentage > 95) {
    navbar.style.top = "5%";
    navbar.style.position = "fixed";
  }
  else {
    navbar.style.top = "100%";
    navbar.style.position = "absolute";
  }

  var sections = document.getElementsByTagName('section');
  var focused_section = "";
  if (window.scrollY + window.outerHeight >= document.body.scrollHeight){
    history.pushState({}, "", `#contact`);
    focused_section = "a-contact";
  }
  else {
    var last_section = false;
    for (section of sections) {
      if (window.scrollY >= (section.offsetTop)) {
        last_section = section;
      }
    }
    if (last_section !== false) {
      focused_section = `a-${last_section.id}`;
      if (window.location.hash !== `#${last_section.id}`){
        history.pushState({}, "", `#${last_section.id}`);
      }
    }
    else{
      focused_section = "a-key-informations";
      history.pushState({}, "", `#`);
    }
  }

  var navs = document.getElementsByClassName("nav-link");
  for (nav of navs) {
    if (nav.id === focused_section) {
      nav.classList.add('nav-active');
    }
    else {
      nav.classList.remove('nav-active');
    }
  }
});