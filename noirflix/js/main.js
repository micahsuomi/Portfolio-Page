
function scaleUp(obj,size) {
    obj.style.fontSize = size;
}

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
    });
         
        $(function () {
             $(document).scroll(function () {
                 var $nav = $("#mainNavbar");
                 $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
             });
         });
