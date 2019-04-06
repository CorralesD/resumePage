(function($) {
  $(function() {
    $("#menuIcon").click(function() {
      $("nav ul").toggle();
      $("nav ul").click(function() {
        $(this).hide();
      });
    });
  });
})(jQuery);
