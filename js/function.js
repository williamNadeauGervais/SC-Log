var tips = document.querySelectorAll("nav ul li"),
    versions = document.querySelectorAll("section>div");

tips[0].addEventListener("click", ver1);
tips[1].addEventListener("click", ver2);
tips[2].addEventListener("click", ver3);
tips[3].addEventListener("click", ver4);
tips[4].addEventListener("click", ver5);
tips[5].addEventListener("click", ver6);
tips[6].addEventListener("click", ver7);
tips[7].addEventListener("click", ver8);

function ver1() {
    hideAll();
    versions[7].style.display = "block";
}

function ver2() {
    hideAll();
    versions[6].style.display = "block";
}

function ver3() {
    hideAll();
    versions[5].style.display = "block";
}

function ver4() {
    hideAll();
    versions[4].style.display = "block";
}

function ver5() {
    hideAll();
    versions[3].style.display = "block";
}

function ver6() {
    hideAll();
    versions[2].style.display = "block";
}

function ver7() {
    hideAll();
    versions[1].style.display = "block";
}

function ver8() {
    hideAll();
    versions[0].style.display = "block";
}


function hideAll() {
    for (let i = 0; i < versions.length; i++) {
        versions[i].style.display = "none";
    }
}
