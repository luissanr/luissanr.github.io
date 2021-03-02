
let nav = document.getElementById('nav');
let menu = document.getElementById('links');
let current_position = window.pageYOffset;
let opennav = document.getElementById('listicon');
let buttons = document.getElementsByClassName('header-link');
let closed = true;



//window.addEventListener('scroll', function(){
//    console.log(window.pageYOffset);
//});

window.onscroll = function() {
    let scroll_position = window.pageYOffset;
    if (current_position >= scroll_position){
        document.getElementById('nav').style.top = '0';
    }
    else{
        document.getElementById('nav').style.top = '-49px';
    }
    current_position = scroll_position;
}

function open_menu(){
    if (closed){
        menu.style.width = '33vw';
        closed = false;
    }
    else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        closed = true;
    }
}

window.addEventListener('resize', function(){
    if (screen.width >= 800){
        closed = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

window.addEventListener('click', function(e){
    //console.log(e.target);
    if (closed == false){
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== opennav){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            closed = true;
        }
    }
});

window.addEventListener('scroll', function(e){
    if (closed == false){
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== opennav){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            closed = true;
        }
    }
});

opennav.addEventListener('click', function(){
    open_menu();
});

//window.addEventListener('load', )