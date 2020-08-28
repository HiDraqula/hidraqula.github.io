function createObserver() {
  var io = new IntersectionObserver(
    entries => {
      console.log(entries);
      // e1 = entries[0];
      // console.log(e1.intersectionRatio, e1.isVisible, e1.isIntersecting, e1.target);
      entries.forEach(e => {
        if (e.intersectionRatio > 0.5) {
          e.target.classList.add("on-s");
          // e.target.dataset.ioRatio = e.intersectionRatio;
        } else {
          e.target.classList.remove("on-s");
        }

      });
    },
    {
      /* Using default options. Details below */
      // The root to use for intersection.
      // If not provided, use the top-level document’s viewport.
      root: null,
      // root: document.querySelector('#scrollArea'),
      // Same as margin, can be 1, 2, 3 or 4 components, possibly negative lengths.
      // If an explicit root element is specified, components may be percentages of the
      // root element size.  If no explicit root element is specified, using a percentage
      // is an error.
      rootMargin: "0px",
      // Threshold(s) at which to trigger callback, specified as a ratio, or list of
      // ratios, of (visible area / total area) of the observed element (hence all
      // entries must be in the range [0, 1]).  Callback will be invoked when the visible
      // ratio of the observed element crosses a threshold in the list.
      // threshold: [0, 0.25, 0.5, 0.75, 1],
      threshold: [0.5],
      // threshold: [0.1,0.5, 0.9],
      // threshold: [0, 1],
      // threshold: buildThresholdList()
    }
  );
  // Start observing an element
  // io.observe(element);
  // io.observe(document.querySelector("body>section"));

  // Stop observing an element
  // io.unobserve(element);

  // Disable entire IntersectionObserver
  // io.disconnect();

  seco = document.querySelectorAll(".observe-sec")
  // seco = document.querySelectorAll("body>section")

  seco.forEach(e => io.observe(e));
}


// Set things up
window.addEventListener("load", (event) => {
  // boxElement = document.querySelector("#box");

  // window.addEventListener('scroll', () => {
  //   console.log(window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
  //   document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight) + 'px');
  // }, false);


  // createObserver();
}, false);









function buildThresholdList(s) {
  let thresholds = [];
  let numSteps = s ? s : 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

