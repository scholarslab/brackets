// Typing Effect for Site Title
var site_title = $('.home #title');
site_title_text = site_title.text();
//site_title.empty();
var typed_options = {
    strings: ["","Cherrie","Jacqui", "Jennifer", "Joseph", "Susan", "Tarushi", site_title_text],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    startDelay: 1000,
    showCursor:false
};

var typed = new Typed('.home #title', typed_options);


// Hamburger code sourced from https://codepen.io/unleashalicia/pen/YzXrJBN
// jQuery element variables
var $hamburgerMenuBtn,
    $slideNav,
    $closeBtn,
    $main;

// focus management variables
var $focusableInNav,
    $firstFocusableElement,
    $lastFocusableElement;

$hamburgerMenuBtn = $("#hamburger-menu"),
$slideNav = $("#slide-nav"),
$closeBtn = $("#close"),
$main = $("main"),
$focusableInNav = $('#slide-nav button, #slide-nav [href], #slide-nav input, #slide-nav select, #slide-nav textarea, #slide-nav [tabindex]:not([tabindex="-1"])');

if ($focusableInNav.length) {
    $firstFocusableElement = $focusableInNav.first();
    $lastFocusableElement = $focusableInNav.last();
}

addEventListeners();

function addEventListeners() {
    $hamburgerMenuBtn.click(openNav);
    $closeBtn.click(closeNav);
    $slideNav.on("keyup", closeNav);
    $firstFocusableElement.on("keydown", moveFocusToBottom);
    $lastFocusableElement.on("keydown", moveFocusToTop);
}

function openNav() {
    $slideNav.addClass("visible active");
    setTimeout(function() {
        $firstFocusableElement.focus()
    }, 1);
    $main.attr("aria-hidden", "true");
    $hamburgerMenuBtn.attr("aria-hidden", "true");
}

function closeNav(e) {
  if (e.type === "keyup" && e.key !== "Escape") {
    return;
  }

  $slideNav.removeClass("active");
  $main.removeAttr("aria-hidden");
  $hamburgerMenuBtn.removeAttr("aria-hidden");
  setTimeout(function() {
    $hamburgerMenuBtn.focus()
  }, 1);
  setTimeout(function() {
    $slideNav.removeClass("visible")
  }, 501);
}

function moveFocusToTop(e) {
    if (e.key === "Tab" && !e.shiftKey) {
        e.preventDefault();
        $firstFocusableElement.focus();
    }
}

function moveFocusToBottom(e) {
  if (e.key === "Tab" && e.shiftKey) {
    e.preventDefault();
    $lastFocusableElement.focus()
  }
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