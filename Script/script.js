const menutabs = document.querySelector(".menu-tabs");
menutabs.addEventListener("click", function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menutabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const container = document.querySelector(".my-experience");
        container.querySelector(".container-isi.active").classList.remove("active");
        container.querySelector(target).classList.add("active")
    }
});

$(".carousel").owlCarousel({
    loop: true,
    margin: 25,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      // 600: {
      //   items: 2,
      // },
      // 1000: {
      //   items: 3,
      // },
    }
});