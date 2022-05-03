// Typing Effect for Site Title
var site_title = $('.home #title');
if (site_title.length != 0) {
    site_title_text = site_title.text();
    var typed_options = {
        strings: ["","Cherrie","Jacqui", "Jennifer", "Joseph", "Susan", "Tarushi", site_title_text],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        startDelay: 1000,
        showCursor:false
    };

    var typed = new Typed('.home #title', typed_options);
  }

// jQuery UI Tabs.
$("#tabs").tabs();

// Glossary Accordion.
$( "#glossary" ).accordion({
    header: "dt",
    collapsible: true,
    heightStyle: "content"
});
$("#glossary dt").css("cursor", "pointer");

// Prompts Accordion
$(".prompts").accordion({
  header: "h4",
  collapsible: true,
  heightStyle: "content"
});
$(".prompts h4").css("cursor","pointer");

// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
// starting from v2 you can add only the features you need reducing the bundle size
// $(document).ready(async function () {
//   await loadFull(tsParticles);

//   $("#banner")
//     .particles()
//     .init(
//       {
//         fpsLimit: 60,
//         particles: {
//           color: {
//             value: "#ffffff",
//           },
//           links: {
//             color: "#ffffff",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           collisions: {
//             enable: true,
//           },
//           move: {
//             direction: "none",
//             enable: true,
//             outModes: {
//               default: "bounce",
//             },
//             random: false,
//             speed: 2,
//             straight: false,
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 800,
//             },
//             value: 80,
//           },
//           opacity: {
//             value: 0.5,
//           },
//           shape: {
//             options: {
//               character
//             type: "image"
//           },
//           size: {
//             value: { min: 1, max: 5 },
//           },
//         },
//         detectRetina: true,
//       },
//       function (container) {
//         // container is the particles container where you can play/pause or stop/start.
//         // the container is already started, you don't need to start it manually.
//       }
//     );
// });