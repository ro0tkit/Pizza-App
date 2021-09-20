$(document).ready(function() {
    // Auto-selects pizza order on form
    $('#btn1').click(function() {
        $('#flavor').val('vegparadise');
      });
      $('#btn2').click(function() {
        $('#flavor').val('chickentikka');
      });
      $('#btn3').click(function() {
        $('#flavor').val('ham');
      });
      $('#btn4').click(function() {
        $('#flavor').val('bbq');
      });
      $('#btn5').click(function() {
        $('#flavor').val('creamy');
      });
      $('#btn6').click(function() {
        $('#flavor').val('cheesy');
      });
});

/*------Modal--------------
const toggleModal = () => {
  document.querySelector(".modal")
  .classList.toggle("modal-hidden");
};
document.querySelector("#show-modal")
.addEventListener("click", toggleModal );*/