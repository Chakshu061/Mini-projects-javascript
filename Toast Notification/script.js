const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    createNotifications();
});


function createNotifications(){
    const notif = document.createElement('div');
    notif.classList.add('toast')

    notif.innerText = "This challenge is crazy";
    container.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);
}