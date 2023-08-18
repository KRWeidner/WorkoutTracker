const routDescription = document.getElementById('routDesc');
const routName = document.getElementById('routName');
const routTitle = document.getElementById('routTitle');
const exercList = document.getElementById('exercList');
const exercDate = document.getElementById('exercDate');
const wkOutHistContainer = document.getElementById('wkOutHistContainer');

function showDescription() {

    routDescription.style.display = "block";
    routName.style.display  = "none";

};

function closeDescription() {

    routDescription.style.display = "none";
    routName.style.display = "block";

};

function enlargeBox() {

    routTitle.style.display = "none";
    exercList.style.display = "block";

};

routName.addEventListener("mouseenter", showDescription);
routDescription.addEventListener("mouseleave", closeDescription);
wkOutHistContainer.addEventListener("mouseenter", enlargeBox);