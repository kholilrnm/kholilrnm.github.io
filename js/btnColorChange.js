var count = 1;

// Mobile
function setColorBeranda(btn, color) {
    var property = document.getElementById("card_sidebar_mob_beranda");
    if (count == 0) {
        property.style.backgroundColor = "#363232"
        count = 1;        
    }
    else {
        property.style.backgroundColor = "#de564e"
        count = 0;
    }
}

function setColorIlmuhadist(btn, color) {
    var property = document.getElementById("card_sidebar_mob_ilmuhadist");
    if (count == 0) {
        property.style.backgroundColor = "#363232"
        count = 1;        
    }
    else {
        property.style.backgroundColor = "#de564e"
        count = 0;
    }
}

function setColor7kuncisukses(btn, color) {
    var property = document.getElementById("card_sidebar_mob_7kuncisukses");
    if (count == 0) {
        property.style.backgroundColor = "#363232"
        count = 1;        
    }
    else {
        property.style.backgroundColor = "#de564e"
        count = 0;
    }
}

function setColorDalilnajjah(btn, color) {
    var property = document.getElementById("card_sidebar_mob_dalilnajjah");
    if (count == 0) {
        property.style.backgroundColor = "#363232"
        count = 1;        
    }
    else {
        property.style.backgroundColor = "#de564e"
        count = 0;
    }
}

// Desktop
function setColorBerandaDesk(btn, color) {
    var property = document.getElementById("card_sidebar_desk_beranda");
    if (count == 0) {
        property.style.color = "#363232"
        count = 1;        
    }
    else {
        property.style.color = "#de564e"
        count = 0;
    }
}

function setColorIlmuhadistDesk(btn, color) {
    var property = document.getElementById("card_sidebar_desk_ilmuhadist");
    if (count == 0) {
        property.style.color = "#363232"
        count = 1;        
    }
    else {
        property.style.color = "#de564e"
        count = 0;
    }
}

function setColor7kuncisuksesDesk(btn, color) {
    var property = document.getElementById("card_sidebar_desk_7kuncisukses");
    if (count == 0) {
        property.style.color = "#363232"
        count = 1;        
    }
    else {
        property.style.color = "#de564e"
        count = 0;
    }
}

function setColorDalilnajjahDesk(btn, color) {
    var property = document.getElementById("card_sidebar_desk_dalilnajjah");
    if (count == 0) {
        property.style.color = "#363232"
        count = 1;        
    }
    else {
        property.style.color = "#de564e"
        count = 0;
    }
}
