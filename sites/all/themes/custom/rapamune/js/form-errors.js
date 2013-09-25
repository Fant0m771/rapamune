(function($, Drupal, window, document, undefined) {
  // add support .trim() in IE 8, 7
  if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
      return this.replace(/^\s+|\s+$/g, '');
    }
  }

  if ($("#webform-client-form-9")) {
    customValidateForm();
    $("form").submit(function() {
      if ($("#edit-submitted-purchase-fildset-purchase-1").is(':checked') ||
          $("#edit-submitted-where-live-fieldset-where-live-select-1").is(':checked') ||
          $("#edit-submitted-year-fieldset-are-you-18-years-of-age-or-older-2").is(':checked')) {
        show_popup_20();
        return false;
      }
    });
  }

  $(".close_popup").bind('click', function() {
    hide_popup20();
  });

  function customValidateForm() {
    if ($(".messages").hasClass("error")) {
      $("fieldset").each(function(){
        if ($(".fieldset-wrapper input[type='radio']" , this).hasClass('error')) {
          $(this).append("<div class='custom-error'>" + Drupal.t('Please make a selection.') + "</div>");
        }
      });

      $(".webform-component-textfield").each(function(){
        var Label = $("label" , this).text().toLowerCase();
        Label = Label.replace(/[^a-z0-9\s]/gi, '');
        Label = Label.trim();
        if (Label == Drupal.t('zip code')) {
          Label = Drupal.t('ZIP code. A ZIP code is 5 digits');
        }
        if ($("input" , this).hasClass('error')) {
          $(this).after("<div class='custom-error error-text'>Please enter valid " + Drupal.t(Label) + ".</div>");
        }
      });
    }
  }

  function show_popup_20(){
    var bodyH = jQuery(document).height();
    jQuery('#block-block-18').css({
      'width': '100%',
      'height': bodyH + 'px',
      'opacity': '0.8'

    }).fadeIn("slow");
    jQuery("#block-block-20").fadeIn("slow");
  }

  function hide_popup20() {
    jQuery('#block-block-18').fadeOut("slow");
    jQuery('#block-block-20').hide();
  }

})(jQuery, Drupal, this, this.document);