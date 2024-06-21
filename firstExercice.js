$(document).ready(function() {
   
    $(".e").hide();

    let inputCount = $("input").length;
    alert("Nombre d'input: " + inputCount);
  
    $("input[type='button']").click(function() {
        let nom = $("#nn").val();
        let prenom = $("#pr").val();
        alert("Nom: " + nom + "\nPrenom: " + prenom);
    });
});
