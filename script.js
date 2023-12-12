let desert = document.getElementById('desert');
let ocean = document.getElementById('ocean');
let snow = document.getElementById('snow');
let forest = document.getElementById('forest');
let body = document.querySelector('body');

desert.addEventListener('click', ()=>{
    document.querySelector('body').style.background = "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(images/desert-2.png)";
    document.querySelector('body').style.backgroundSize = "cover";
});

ocean.addEventListener('click', ()=>{
    document.querySelector('body').style.background = "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(images/beach-2.png)";
    document.querySelector('body').style.backgroundSize = "cover";
});

snow.addEventListener('click', ()=>{
    document.querySelector('body').style.background = "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(images/snow-2.jpg)";
    document.querySelector('body').style.backgroundSize = "cover";
});

forest.addEventListener('click', ()=>{
    document.querySelector('body').style.background = "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(images/forest-2.png)";
    document.querySelector('body').style.backgroundSize = "cover";
});


