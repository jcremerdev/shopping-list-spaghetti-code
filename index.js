
$(function(){
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    var $input = $(this).find('input');
    var input = $input.val();

    $('#shopping-list-entry').val('');


    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${input}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).parent().parent().remove();
    });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).parent().siblings().toggleClass('shopping-item__checked');
    });


});