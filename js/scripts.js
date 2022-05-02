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