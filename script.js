function LocomotiveAnimation() {
  // Registering GSAP with Scrolltrigger
  gsap.registerPlugin(ScrollTrigger);

  // Initialze Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });

  // Update ScrollTrigger on Locomotive Scroll events
  locoScroll.on("scroll", ScrollTrigger.update);

  // Set up ScrollTrigger proxy with Locomotive Scroll
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  // Remove code from red pannel to here from original Scrolltrigger + Locomotive

  // Refresh ScrollTrigger and update Locomotive Scroll on resize or load
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
function navAnimation() {
  var nav = document.querySelector("nav");

  let tl = gsap.timeline();

  tl.to("#nav-bottom", {
    borderBottom: "1px solid #dadada",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "body",
      //markers: true,
      //Markrs to see strt and end of scroll trigger
      start: "top 30%",
      scrub: true,
    },
  });
  //   tl.to("#nav-bottom", {
  //     height: "15vh",
  //     duration: 0.5,
  //   });
  //   tl.to(".nav-part2 h5", {
  //     display: "block",
  //     duration: 0.1,
  //   });
  //   tl.to(".nav-part2 h5 span", {
  //     y: 0,
  //     // duration:0.3,
  //     stagger: {
  //       amount: 0.5,
  //     },
  //   });
  // });
  // nav.addEventListener("mouseleave", function () {
  //   let tl = gsap.timeline();
  //   tl.to(".nav-part2 h5 span", {
  //     y: 25,
  //     stagger: {
  //       amount: 0.2,
  //     },
  //   });
  //   tl.to(".nav-part2 h5", {
  //     display: "none",
  //     duration: 0.1,
  //   });
  //   tl.to("#nav-bottom", {
  //     height: 0,
  //     duration: 0.2,
  //   });
  // });
}
function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");
  // var relemImg = document.querySelectorAll("#righ-elem1 img");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      // console.log(elem.childNodes[3]);
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 80,
      });
    });
  });
}
function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      bordeRadius: 0,
    });
  });

  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      bordeRadius: "30px",
    });
  });
}

function videoContainerAnimation() {
  document
    .querySelector("#videoDiv video")
    .addEventListener("mouseenter", function () {
      // console.log("Inside mouse enter");
      gsap.to(".Video-hover", {
        opacity: 1,
        scale: 1,
      });
    });
  document
    .querySelector("#videoDiv video")
    .addEventListener("mouseleave", function () {
      // console.log("Inside mouse leave");

      gsap.to(".Video-hover", {
        opacity: 0,
        scale: 0,
      });
    });
  document;
  var container = document.getElementById("videoDiv");

  container.addEventListener("mousemove", function (dets) {
    // console.log("Inside mouse move");

    gsap.to(".Video-hover", {
      x: dets.x - 710,
      y: dets.y - 482,
    });
  });
}
function page4Videonimation() {
  // To toggle ON/OFF of video
  var sections = document.querySelectorAll(".sec-right");
  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      // console.log("In mous enter", elem.childNodes[3]);
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });

    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      // console.log("In mouse leave", elem.childNodes[3]);

      elem.childNodes[3].load();
    });
  });

  // Video Hover Animation
  var hover = document.querySelectorAll(".sec-right");
  // console.log(hover.childNodes);
  hover.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(".hover", {
        opacity: 1,
        scale: 1,
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(".hover", {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        // ease: "expo.out",
      });
    });

    elem.addEventListener("mousemove", function (dets) {
      gsap.to(".hover", {
        x: dets.x - elem.getBoundingClientRect().x - 40,
        y: dets.y - elem.getBoundingClientRect().y - 50,
      });
    });
  });
}
function page6Animation() {
  // Page 6 Header Animation
  // var tl = gsap.timeline();
  // tl.from("#headerDiv h1", {
  //   opacity: 0,
  //   duration: 5,
  //   // stagger:0.1,
  //   ease: "expo.out",
  // });

  // Page 6 Bottom Animation
  gsap.from(".btm6-parts h4", {
    x: 0,
    duration: 1.2,
    // stagger: {
    //   amount: -0.5,
    // },
    scrollTrigger: {
      trigger: ".btm6-parts",
      scroller: "body",
      // markers: true,
      //Markrs to see strt and end of scroll trigger
      start: "top 80%",
      end: "top 0%",
      scrub: true,
    },
  });
}
function loadingAnimaton() {
  var tl = gsap.timeline();

  tl.from("#page1", {
    opacity: 0,
    duration: 0.3,
    delay: 0.2,
  });

  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 1.5,
    ease: "expo.out",
  });

  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });

  tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
  });
}

// LocomotiveAnimation();

loadingAnimaton();
navAnimation();
page2Animation();
// page3VideoAnimation();
page4Videonimation();
videoContainerAnimation();
page6Animation();
