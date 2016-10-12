console.log('Loaded!');

//change in the main text

var element=document.getElementById('main-text');
element.innerHTML='New value';

//move the image

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
 marginLeft = marginLeft + 5;
 img.style.marginLeft = marginLeft + 'px';
}
img.onclick=function(){
    var interval = setInterval(moveRight,50);
  
};