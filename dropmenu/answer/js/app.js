$(function () {
  $('#menu').hover(
        function () {
            $('#menu dd').slideDown(500);
        },
        function () {
            $('#menu dd').slideUp(500);
        }
    );

  $('#menu dd').click(function(event){
    $(event.target).html($(event.target).html() + '(済)')
  });
});
