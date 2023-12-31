//js logic for main homepage of app
const routDescription = document.getElementById('routDesc');
const routName = document.getElementById('routName');
const routTitle = document.getElementById('routTitle');
const exercList = document.getElementById('exercList');
const exercDate = document.getElementById('exercDate');
const wkOutHistContainer = document.getElementById('wkOutHistContainer');
const wkOutEl = document.getElementById('wkOutEl');

const nextBtn = document.getElementById('nextBtn');

var exerWkoutTitle = document.getElementById('exerWkoutTitle').innerHTML.split('');

function showDescription() {

    routDescription.style.display = "block";
    routName.style.display  = "none";

};

function closeDescription() {

    routDescription.style.display = "none";
    routName.style.display = "block";

};

wkOutEl.addEventListener("mouseenter", showDescription);
wkOutEl.addEventListener("mouseleave", closeDescription);