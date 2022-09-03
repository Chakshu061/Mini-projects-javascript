const toggle = document.getElementById("toggle");

toggle.addEventListener("change", (e) => {
    document.left.classList.toggle("dark", e.target.checked);
});

