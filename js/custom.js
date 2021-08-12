//DOM Ready ----
jQuery(document).ready(function() {

	$(".detailTab li").click(function() {
        var tabId = $(this).attr('data-tab');
        $('.detailTab li').removeClass("current");
        $(".accoContain").removeClass("current in");
        $(this).addClass("current");
        $("#" + tabId).addClass("current");
        setTimeout(function() {
            $("#" + tabId).addClass("in");
        }, 100);
    });

	// fatching data and make accordian
    $(".accoContain").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>")

    var itemCount = 0;
    $('.resp-accordion').each(function() {
        var innertext = $('.tabing:eq(' + itemCount + ')').html();
        $('.resp-accordion:eq(' + itemCount + ')').append(innertext);
        itemCount++;
    });

	  if ($(window).width() < 767) {
        $(".accoContain").removeClass("current in");
        $(".resp-accordion").click(function() {
            if ($(this).hasClass("minus")) {
                $(this).removeClass("minus").next().slideUp();
            }
            else {
                $(".resp-accordion").removeClass("minus");
                $(".accoContain").slideUp();
                $(this).addClass("minus");
                $(this).next().slideDown();                            
            }
        });
	  };   
});