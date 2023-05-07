const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.target)
        if(!entry.isIntersecting) {
            hiddenElements.target.classList.add("show")
        } else {
            hiddenElements.target.classList.remove("show")
        }
    })
})
export const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
