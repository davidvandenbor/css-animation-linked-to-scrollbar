
// Let's make a custom made style property that we can use in the CSS file. It listenes to the scroll event. We'll call it "--scrollbar"!

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scrollbar",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
