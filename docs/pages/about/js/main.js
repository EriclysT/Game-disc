import {
    gitProfileUrl, instaIconUrl,
    ericProfileUrl, instaEricUrl, gitEricUrl,
    otavioProfileUrl, instaOtavioUrl, gitOtavioUrl
} from "./urls.js";

document.getElementById('year').textContent = new Date().getFullYear();

/* icones */
const iconeInsta = document.getElementsByClassName('iconeInsta');
const iconeGit = document.getElementsByClassName('iconeGit');

/* Eric */
const fotoEric = document.getElementById('fotoEric');
const instaEricLink = document.getElementById('instaEricLink');
const gitEricLink = document.getElementById('gitEricLink');

/* Otávio */
const fotoOtavio = document.getElementById('fotoOtavio');
const instaOtavioLink = document.getElementById('instaOtavioLink');
const gitOtavioLink = document.getElementById('gitOtavioLink');


/* icones */
for (let i = 0; i < iconeInsta.length; i++) {
    iconeInsta[i].setAttribute('src', instaIconUrl);
}

for (let i = 0; i < iconeGit.length; i++) {
    iconeGit[i].setAttribute('src', gitProfileUrl);
}

/* fotos */
fotoEric.setAttribute('src', ericProfileUrl);
fotoOtavio.setAttribute('src', otavioProfileUrl);

/* perfis */
instaEricLink.setAttribute('href', instaEricUrl);
gitEricLink.setAttribute('href', gitEricUrl);
instaOtavioLink.setAttribute('href', instaOtavioUrl);
gitOtavioLink.setAttribute('href', gitOtavioUrl);
