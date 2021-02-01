var h2= document.querySelectorAll("h4");
var i;

for (i = 0; i < h2.length; i++) {
  h2[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var NumberOfWords = 28
var words = new BuildArray(NumberOfWords)
// utiler Un bleau pour definir les mots de mon tableau de mon random
words = [ "FarimaDoumbia", "Abdoulaye", "Alicia", "Bamba", "Caroline", "Denis", "Fodie", "Elyesse", "lobna", "Gaëlle", "Maëlys", "Abdoulaye", "Adil", "Alexis", "Ayoub", "AyoubB", "Charalambos", "DasilvaDavid", "Flora", "Jules", "Kevin", "Jonathan", "Lyes", "MessaoudMuhammad", "MohamedAbdeloifi", "Nasser", "JérémyBojko","bankruptcy"]
function BuildArray(size){
  this.length = size
  for (var i = 1; i <= size; i++){
  this[i] = null}
  return this
  }
  function PickRandomWord(frm) {
// generer un mot aleotoire entre le premier et le dernier
  var rnd = Math.ceil(Math.random() * NumberOfWords)
  // afficher le mots dans la zone de texte
  frm.button.value = words[rnd]
  }
