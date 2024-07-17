window.onload = function(){
    const mbBar = document.querySelector(".bar")
    mbBar.addEventListener("click", function(){
        const menuMb = document.querySelector(".menu-mobile")
        menuMb.classList.toggle("menuShow")
    })
}