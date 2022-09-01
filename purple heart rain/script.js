function createHeart(){
    
    const heart = document.createElement('div'); 
    const circle = document.createElement('div'); 
    heart.classList.add('heart');
    circle.classList.add('circle');

    heart.style.left = Math.random() * 100 + "vw";
    circle.style.left = Math.random() * 100 + "vw";

    heart.innerText = '💜';
    circle.innerText = '🟣';

    document.body.appendChild(heart);
    document.body.appendChild(circle);

    setTimeout(() => {
        heart.remove();
    }, 5000);

    setTimeout(() => {
        circle.remove();
    }, 5000);

}

setInterval(createHeart, 1000);
