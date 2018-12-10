$(document).ready(function () {

  const headerElement = $('.J_header');

  function changeHeader () {
    headerElement.css('background', '#1855d1');
  }

  function restoreHeader () {
    headerElement.css('background', 'transparent');
  }

  $(document).scroll(function () {
    if($(document).scrollTop() !== 0) {
      changeHeader();
    } else {
      restoreHeader();
    }
  })

});
