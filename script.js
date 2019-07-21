var divider_one = document.querySelector('.divider_1');
var divider_two = document.querySelector('.divider_2');

var left_arrow = document.querySelector('.left_move');
var right_arrow = document.querySelector('.right_move');
var my_bid = document.querySelector('.my_bid');

var height =250;
var lposY = -75;
var rposY = -125;


var dividerMove = setInterval(function () {
    divider_one.style.top = lposY+"px";
    divider_two.style.top = rposY+"px";
    lposY+= 10;
    rposY+= 10;
    if(lposY > height){//50
        lposY = -75;
    }
    if (rposY > height) {
        rposY = -25;
    }
},15);

var curX = 130;
my_bid.style.left = curX + "px";
left_arrow.addEventListener('click', leftX);
right_arrow.addEventListener('click',rightX);

function leftX() {
    if (curX == 130) {
        curX = 30;
        my_bid.style.left = 30 + "px";
    }
    else if (curX == 230) {
        curX = 130;
        my_bid.style.left = curX + "px";
    }

    else{
        curX = 30;
        my_bid.style.left = curX + "px";
    }
}

function rightX() {
    if (curX == 30) {
        curX = 130;
        my_bid.style.left = curX + "px";
    }

    else if (curX == 130) {
        curX = 230;
        my_bid.style.left = curX + "px";
    }

    else {
        curX = 230;
        my_bid.style.left = curX + "px";
    }
}



