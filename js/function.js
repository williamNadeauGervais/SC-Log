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
tips[8].addEventListener("click", ver9);
tips[9].addEventListener("click", ver10);
tips[10].addEventListener("click", ver11);
tips[11].addEventListener("click", ver12);
tips[12].addEventListener("click", ver13);
tips[13].addEventListener("click", ver14);
tips[14].addEventListener("click", ver15);
tips[15].addEventListener("click", ver16);
tips[16].addEventListener("click", ver17);
tips[17].addEventListener("click", ver18);
tips[18].addEventListener("click", ver19);
tips[19].addEventListener("click", ver20);
tips[20].addEventListener("click", ver21);
tips[21].addEventListener("click", ver22);
tips[22].addEventListener("click", ver23);
tips[23].addEventListener("click", ver24);
tips[24].addEventListener("click", ver25);
tips[25].addEventListener("click", ver26);
tips[26].addEventListener("click", ver27);
tips[27].addEventListener("click", ver28);
tips[28].addEventListener("click", ver29);

function ver1() {
    hideAll();
    versions[28].style.display = "block";
}

function ver2() {
    hideAll();
    versions[27].style.display = "block";
}

function ver3() {
    hideAll();
    versions[26].style.display = "block";
}

function ver4() {
    hideAll();
    versions[25].style.display = "block";
}

function ver5() {
    hideAll();
    versions[24].style.display = "block";
}

function ver6() {
    hideAll();
    versions[23].style.display = "block";
}

function ver7() {
    hideAll();
    versions[22].style.display = "block";
}

function ver8() {
    hideAll();
    versions[21].style.display = "block";
}

function ver9() {
    hideAll();
    versions[20].style.display = "block";
}

function ver10() {
    hideAll();
    versions[19].style.display = "block";
}

function ver11() {
    hideAll();
    versions[18].style.display = "block";
}

function ver12() {
    hideAll();
    versions[17].style.display = "block";
}

function ver13() {
    hideAll();
    versions[16].style.display = "block";
}

function ver14() {
    hideAll();
    versions[15].style.display = "block";
}

function ver15() {
    hideAll();
    versions[14].style.display = "block";
}

function ver16() {
    hideAll();
    versions[13].style.display = "block";
}

function ver17() {
    hideAll();
    versions[12].style.display = "block";
}

function ver18() {
    hideAll();
    versions[11].style.display = "block";
}

function ver19() {
    hideAll();
    versions[10].style.display = "block";
}

function ver20() {
    hideAll();
    versions[9].style.display = "block";
}

function ver21() {
    hideAll();
    versions[8].style.display = "block";
}

function ver22() {
    hideAll();
    versions[7].style.display = "block";
}

function ver23() {
    hideAll();
    versions[6].style.display = "block";
}

function ver24() {
    hideAll();
    versions[5].style.display = "block";
}

function ver25() {
    hideAll();
    versions[4].style.display = "block";
}

function ver26() {
    hideAll();
    versions[3].style.display = "block";
}

function ver27() {
    hideAll();
    versions[2].style.display = "block";
}

function ver28() {
    hideAll();
    versions[1].style.display = "block";
}

function ver29() {
    hideAll();
    versions[0].style.display = "block";
}

function hideAll() {
    for (let i = 0; i < versions.length; i++) {
        versions[i].style.display = "none";
    }
}
