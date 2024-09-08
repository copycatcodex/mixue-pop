const gambar = new Image();
gambar.src = "2.png";

const king = document.getElementById('K');
const lagu = "yumcut.mp3";

function getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

let pop_count = getCookie("pop_count");
king.innerHTML = pop_count > 0 ? pop_count : "0";

const ks_func = () => {
    king.id = "KS";
    const audio = new Audio(lagu);
    audio.play();
    pop_count++;
    king.innerHTML = pop_count;
    setCookie("pop_count", pop_count, 365);
};

const s_func = () => setTimeout(() => king.id = "K", 25);

king.addEventListener("pointerup", s_func);
king.addEventListener("keyup", s_func);
king.addEventListener("pointerdown", ks_func);
king.addEventListener("keydown", ks_func);
king.addEventListener('contextmenu', event => event.preventDefault());
