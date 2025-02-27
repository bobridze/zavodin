document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            menuLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");

            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        });
    });
});