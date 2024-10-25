function scrollDown() {
  let scrollTop = Math.round(
    window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
  );

  let iH = window.innerHeight + 20;

  const targetPosition = scrollTop + iH - (scrollTop % iH);

  smoothScrollTo(targetPosition + 10, 800);
}

function scrollTopFunction() {
  let scrollTop = Math.round(
    window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
  );

  let iH = window.innerHeight + 20;

  const targetPosition =
    scrollTop +
    iH -
    (scrollTop % iH < 40 ? iH + (scrollTop % iH) : scrollTop % iH) -
    iH;

  smoothScrollTo(targetPosition + 10, 800);
}

function smoothScrollTo(targetPosition, duration) {
  const startPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = Math.round(
      easeInOutQuad(timeElapsed, startPosition, distance, duration)
    );

    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

function cko() {
  var body = document.body,
    html = document.documentElement;

  var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  height = height - window.innerHeight;
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  document.getElementById("filler").style.width =
    Math.round((250 * scrollTop) / height) / 10 + "rem";
  document.getElementById("perc").innerText =
    Math.round((100 * scrollTop) / height) + "%";

  for (let i of document.getElementsByClassName("animate")) {
    if (i.getBoundingClientRect().top < window.innerHeight - 400) {
      i.style.opacity = 1;
    } else {
      i.style.opacity = 0;
    }
  }
}

setTimeout(() => {
  cko();
}, 10);

window.onscroll = (event) => {
  cko();
};

setTimeout(() => {
  posY =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  setInterval(() => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    document.getElementById("speed").innerText = (Math.abs(Math.round(posY - scrollTop) * 10)).toString().padEnd(5, '_') + " px/s";

    if (Math.abs((Math.round(posY - scrollTop) * 10)) > 1400) {
      document.getElementById("speed").style.color = "red"
    } else {
      document.getElementById("speed").style.color = "black"
    }

    

    posY = scrollTop;
  }, 100);
}, 10);


setTimeout(() => {
  
  var height = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
  );

  setInterval(() => {

    
    const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
  
  
    document.getElementById("event").innerText = Math.round( (performance.now() / 1000) * (height - scrollTop - window.innerHeight)  / scrollTop);
  
  }, 1000);
  
}, 100);

setInterval(() => {
  document.getElementById("timestamp").innerText = new Date().toLocaleString();
}, 1000);