document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector(".overlay");
    setTimeout(() => {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.style.display = "none", 1000);
    }, 2000);
});
