$(window).on("backstretch.before", function (e, instance, index) {
    instance.options.fade = 2000;
    //https://www.jquery-backstretch.com/ 
});
$(document).ready(function () {
    AOS.init({
        duration: 600,
        mirror: true,
        easing: 'ease-in-out'
    });
    
    //scroll to top
    $("#backToTop").hide(); // hide on page load

    $(window).bind('scroll', function () {
        if ($(this).scrollTop() > 300) { // show after 300 px of user scrolling
            $("#backToTop").slideDown("fast");
        }
        else {
            $("#backToTop").hide("fast");}
    });
    //scroll to top of page
    $("a[href='#top']").click(function () {
        $('html, body').animate({ scrollTop: '0px' }, 300);
        return false;
    });
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        data: {
            format: "json",
            action: "parse",
            page: "Psychological_operations_(United_States)",
            prop: "text",
            section: 0,
        },
        dataType: 'jsonp',
        
        success: function (data) {
            console.log(data)
            $("#psyopData").html(data.parse.text["*"])

            var markup = data.parse.text["*"];
            var i = $('<div></div>').html(markup);

            // remove links as they will not work
            i.find('a').each(function () { $(this).replaceWith($(this).html()); });

            // remove any references
            i.find('sup').remove();

            // remove cite error
            i.find('.mw-ext-cite-error').remove();

            // remove infobox
            i.find('.infobox').remove();

            $('#psyopData').html($(i).find('p'));

        }
    });
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        data: {
            format: "json",
            action: "parse",
            page: "Cavalry_scout",
            prop: "text",
            section: 0,
        },
        dataType: 'jsonp',

        success: function (data) {
            console.log(data)
            $("#scoutData").html(data.parse.text["*"])

            var markup = data.parse.text["*"];
            var i = $('<div></div>').html(markup);

            // remove links as they will not work
            i.find('a').each(function () { $(this).replaceWith($(this).html()); });

            // remove any references
            i.find('sup').remove();

            // remove cite error
            i.find('.mw-ext-cite-error').remove();

            // remove infobox
            //i.find('.infobox').remove();

            $('#scoutData').html($(i).find('p'));

        }
    });

});
