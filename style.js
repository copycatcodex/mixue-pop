/***
 *    888 888         888 888                     d8   ,e,                  
 *    888 888  ,e e,  888 888 Y8b Y888P  ,e e,   d88    "   e88'888  ,"Y88b 
 *    8888888 d88 88b 888 888  Y8b Y8P  d88 88b d88888 888 d888  '8 "8" 888 
 *    888 888 888   , 888 888   Y8b "   888   ,  888   888 Y888   , ,ee 888 
 *    888 888  "YeeP" 888 888    Y8P     "YeeP"  888   888  "88,e8' "88 888 
 *                                                                            
 *    Name: Hellvetica
 *    KeepConnected
 *    @copycatcodex                                                                      
 */
gambar = new Image();
gambar.src = "2.png";

king = document.getElementById('K')
lagu = "yumcut.mp3"

//pop_i = 0

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

pop_count = getCookie("pop_count")
king.innerHTML = pop_count > 0 ? pop_count : "0"

ks_func = function (){
    king.id ="KS"
    
    //Lagunya disini!
    audio = new Audio(lagu)
    audio.play()
    
    
    
    //Berhitung!
    pop_count++
    king.innerHTML = pop_count
    setCookie("pop_count",pop_count,365)
} 
s_func = () => setTimeout(()=>king.id ="K",25)


king.addEventListener("pointerup", s_func)
king.addEventListener("keyup", s_func)
king.addEventListener("pointerdown", ks_func)
king.addEventListener("keydown", ks_func)
king.addEventListener('contextmenu', event => event.preventDefault());