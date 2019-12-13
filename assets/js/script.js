let robotAlert = document.getElementsByClassName('btn')

robotAlert.onclick = function() {
  changeColor("red");
};

function myFunction() {
    document.getElementById("btn").style.color = "red";
}

<script>
// When the user clicks on <div>, open the popup
function myPopup() {
  var popup = document.getElementById("btn");
  popup.classList.toggle("show");
}
</script>
