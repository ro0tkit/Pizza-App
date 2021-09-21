
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

//----- Business Logic-----

      function calcPrice(){
        const size = parseInt($( "select#size option:checked" ).val();
        const toppings = $( "select#toppings option:checked" ).val();
        const crust = parseInt($("#crust option:selected").val();
        const cost = crust + toppings + size

        $("#size").val();
        switch("#size"){
          case "Regular":
             price = 600;
             console.log(price);
           break;
           case "Medium":
             price = 850;
             console.log(price);
           break;
           case "Large":
             price = 1200;
             console.log(price);
           default:
             console.log("error"); 
         }
         $('#checkout').click(function(){
         alert("Your total amount is "+cost+".Enjoy Your Meal!!")
         }
        }
      
        
});



/*------Modal--------------
const toggleModal = () => {
  document.querySelector(".modal")
  .classList.toggle("modal-hidden");
};
document.querySelector("#show-modal")
.addEventListener("click", toggleModal );*/