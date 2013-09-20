// JavaScript Document
function changeSize(e){
  switch(e){
    case 1:jQuery(".region-content p").css("font-size","12px");break;
    case 2:jQuery(".region-content p").css("font-size","16px");break;
    case 3:jQuery(".region-content p").css("font-size","18px");break;
  }
}


jQuery(document).ready(function() {

  jQuery("#isi_inner_main").addClass("isi-inner1");

  jQuery('.isi-inner').mCustomScrollbar({
    scrollEasing : "easeOutQuint",
    autoDraggerLength : false,
    scrollButtons : {
      enable : true
    }
  });

  var isiHeight = 0;
  var isiHeight99 = 0;

  function set_isi_height() {
    var winHeight = jQuery(window).height();
    isiHeight = winHeight * (0.33);
    isiHeight99 = winHeight * (0.99);
    jQuery(".floating-isi").css({
      'height' : isiHeight
    });
    jQuery("#page-wrapper").css({
      'margin-bottom' : isiHeight
    });
    jQuery(".isi-inner").mCustomScrollbar("update");

  }

  set_isi_height();
  jQuery(window).resize(function() {
    set_isi_height();
  });

  //isi toggle
  jQuery(".floating-isi .demo_functions").toggle(function() {
    jQuery(".floating-isi").css({
      'height' : isiHeight99
    });
    jQuery(".click_to_expand").hide();
    jQuery(".click_to_close").show();
    jQuery("#isi_inner_main").removeClass("isi-inner1");
    jQuery("#isi_inner_main").addClass("isi-inner");

    jQuery('.isi-inner').mCustomScrollbar("destroy");
    jQuery('.isi-inner').mCustomScrollbar({
      scrollEasing : "easeOutQuint",
      autoDraggerLength : false,
      scrollButtons : {
        enable : true
      }
    });
    jQuery(".isi-inner").mCustomScrollbar("update");
  }, function() {
    jQuery(".floating-isi").css({
      'height' : isiHeight
    });

    jQuery(".click_to_close").hide();
    jQuery(".click_to_expand").show();

    jQuery("#isi_inner_main").removeClass("isi-inner");
    jQuery("#isi_inner_main").addClass("isi-inner1");
    jQuery(".isi-inner1").mCustomScrollbar("update");
  });
}); ;