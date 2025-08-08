const toggleBtn = document.getElementById("open");
const sidePanel = document.getElementById("menu");

toggleBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    sidePanel.classList.toggle("show");
});

document.addEventListener("click", function (event) {
    if (
        !sidePanel.contains(event.target) &&
        !toggleBtn.contains(event.target)
    ) {
        sidePanel.classList.remove("show");
    }
});
