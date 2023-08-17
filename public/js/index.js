const routDescription = document.getElementById('routDesc');
const routName = document.getElementById('routName');

function showDescription() {

    routDescription.style.display = "block";
    routName.style.display  = "none";

};

function closeDescription() {

    routDescription.style.display = "none";
    routName.style.display  = "block";

};

routName.addEventListener("mouseenter", showDescription);
routDescription.addEventListener("mouseleave", closeDescription);