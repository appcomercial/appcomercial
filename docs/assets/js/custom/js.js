 function inicio(arguments) {
   let proyecto = document.querySelector(".proyecto");
   let btn_loguin = document.querySelector(".btn_loguin");
   let inicio = document.querySelector(".inicio");
   btn_loguin.addEventListener("click", function(arguments) {
     proyecto.style.display = "block";
     inicio.style.display = "none";

   });
 }
 inicio();