import '../css/style.css';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;



$(document).ready(function () {
    $('#country').click(function (event) {
        event.stopPropagation();
        $('#country_list').toggleClass('hidden');
    });
    
    $('#profile').click(function (event) {
        event.stopPropagation();
        $('#profile_list').toggle();
    });
  
    $('#dashboard').click(function (event) {
        event.stopPropagation();
        $('#dashboard_nav').slideToggle(400);
    });
    $('#country').click(function (event) {
        event.stopPropagation();
        $('#country_list').slideToggle(400);
    });
    $('#e-commerce').click(function (event) {
        event.stopPropagation();
        $('#e-commerce_list').slideToggle(400);
        $('#right_arrow').slideToggle(400);
        $('#down_arrow').slideToggle(400);
    });
    $('#project').click(function (event) {
        event.stopPropagation();
        $('#project_list').slideToggle(400);
        $('#right_arrow_project').slideToggle(400);
        $('#down_arrow_project').slideToggle(400);
    });
});
$(document).on("click", function () {
    $("#profile_list,#e-commerce_list,#project_list,#dashboard_nav,#country_list").hide();
});

$(document).ready(function () {
    $('#hambarg').click(function () { 
        $('#left_sidebar').addClass('active');
    });
    $('#remove_sidebar').click(function () { 
        $('#left_sidebar').removeClass('active');
    });

});
