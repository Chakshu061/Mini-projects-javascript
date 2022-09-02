const btn = document.getElementById('btn');
const but = document.getElementById('but'); 


btn.addEventListener('click', () => {
    document.body.style.background = randomBg();
});
but.addEventListener('click', () => {
    document.body.style.backgroundImage = randomBgImg();
});


function randomBg(){
    return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`;

}

function randomBgImg(){
    var images = [`url('https://images.unsplash.com/photo-1660474220845-11ab53fb9f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80')`, 
    `url('https://images.unsplash.com/photo-1629808363515-bdfbd573c356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`, 
    `url('https://images.unsplash.com/photo-1661705969607-cde73828023d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')`, 
    `url('https://images.unsplash.com/photo-1661749232278-3c8380532c07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80')`, 
    `url('https://images.unsplash.com/photo-1660995710465-71940611fc35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=941&q=80')`]; 

    return (Math.floor(Math.random()* images.length));   

}
