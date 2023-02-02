var nav_open = null;
var nav_close = null;
var nav_list = null;
const head = `
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="/img/therockyt.png" type="image/x-icon" />
    <link rel="stylesheet" href="/css/general.css" />
    <link rel="stylesheet" href="/css/navigation.css" />
    <link rel="stylesheet" href="/css/site.css" />`;
const footer = `
    <ul>
      <li>
        <a href="/" id="footer_home">Home</a>
      </li>
      <li>
        <a href="/api" id="footer_api">API</a>
      </li>
      <li>
        <a href="/terms" id="footer_terms">Terms and Conditions</a>
      </li>
      <li>
        <a href="/privacypolicy" id="footer_privacypolicy">Privacy Policy</a>
      </li>
      <li>
        <a href="/contact" id="footer_contact">Contact</a>
      </li>
    </ul>
`;
const nav = `
    <nav>
        <img
          src="/img/icons/menu_open.png"
          alt="X"
          id="nav_open"
          class="enabled"
        />
        <img src="/img/icons/menu_close.png" alt="X" id="nav_close" />
        <ul id="nav_list">
          <li><a href="/" id="nav_home">Home</a></li>
          <li><a href="/directbans" id="nav_directbans">DirectBans</a></li>
          <li><a href="/sync" id="nav_sync">Sync</a></li>
          <li><a href="/fspawn" id="nav_fspawn">FSpawn</a></li>
          <li><a href="/advancedcloud" id="nav_advancedcloud">Cloud</a></li>
          <li><a href="/shutuppc" id="nav_shutuppc">ShutUpPC</a></li>
          <li>
            <a href="/link/?to=https://github.com/TheRockYT"
              >GitHub</a
            >
          </li>
        </ul>
      </nav>
`;
document.getElementById("header").innerHTML = nav;
document.getElementById("footer").innerHTML = footer;
document.head.innerHTML += head;
var sitei = document.getElementById("site");
var site = ["/404", "unknown", "Unknown"];

if (sitei != null) {
  site = sitei.value.split(";");
  var footside = document.getElementById("footer_" + site[1]);
  if (footside != null) {
    footside.classList.add("active");
  }
  var navside = document.getElementById("nav_" + site[1]);
  if (navside != null) {
    navside.classList.add("active");
  }
}
setTitle(site[2]);
nav_open = document.getElementById("nav_open");
nav_close = document.getElementById("nav_close");
nav_list = document.getElementById("nav_list");

nav_open.addEventListener("click", function (event) {
  setNavState(true);
});
nav_close.addEventListener("click", function (event) {
  setNavState(false);
});
function getCurrentNavState() {
  if (nav_list.classList.contains("enabled")) {
    nav_open.classList.remove("enabled");
    nav_close.classList.add("enabled");
    return true;
  } else {
    nav_open.classList.add("enabled");
    nav_close.classList.remove("enabled");
    return false;
  }
}
function setTitle(title) {
  if (title != null) {
    document.title = title + " - TheRockYT";
  }
}

function setNavState(val) {
  if (val) {
    nav_list.classList.add("enabled");
  } else {
    nav_list.classList.remove("enabled");
  }
  return getCurrentNavState();
}
