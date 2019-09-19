
$(document).ready(function () {
    AOS.init({
        once: true,
        duration: 1200,
    })

    $('#testimonialsCarousel').owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
    $('#search-site').click(function () {
        $('#search').fadeToggle();
    });

    $('.close-search').click(function () {
        $('#search').fadeOut();
    });

    $('#editBtn').click(function () {
        $('.edit-add').hide();
        $('.cancel-delete').show();
        $('.team-member').toggleClass('edit-member');
        $('.team-member .custom-checkbox').toggle();
    });

    $('#cancel').click(function () {
        $('.edit-add').show();
        $('.cancel-delete').hide();
        $('.team-member').removeClass('edit-member');
        $('.team-member .custom-checkbox').hide();
    });
});