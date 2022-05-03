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

// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
// starting from v2 you can add only the features you need reducing the bundle size
$(document).ready(async function () {
  await loadFull(tsParticles);

  $("#banner")
    .particles()
    .init(
      {
        fpsLimit: 60,
        particles: {
          color: {
            value: ['rgb(250,200,72)','rgb(8,130,116)','rgb(191,98,151)','rgb(191,50,52)']
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 70,
          },
          opacity: {
            value: 0.825,
          },
          shape: {
            options: {
              char: {
                value: ['</>','*','[]','{j}','/*','<>','#'],
                font: 'jen_hand_lightregular',
                fill:true
              }
            },
            type: 'char'
          },
          size: {
            value: { min: 10, max: 20 },
          },
        },
        detectRetina: true,
      },
      function (container) {
        // container is the particles container where you can play/pause or stop/start.
        // the container is already started, you don't need to start it manually.
      }
    );
});