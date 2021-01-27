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

// utiler les variables pour definir les mots de mon tableau de mon random
words[1] = "FarimaDoumbia"
words[2] = "Abdoulaye"
words[3] = "Alicia"
words[4] = "Bamba"
words[5] = "Caroline"
words[6] = "Denis"
words[7] = "Fodie"
words[8] = "Elyesse"
words[9] = "lobna"
words[10] = "Gaëlle"
words[11] = "Maëlys"
words[12] = "Abdoulaye"
words[13] = "Adil"
words[14] = "Alexis"
words[15] = "Ayoub"
words[16] = "AyoubB"
words[17] = "Charalambos"
words[18] = "DasilvaDavid"
words[19] = "Flora"
words[20] = "Jules"
words[21] = "Kevin"
words[22] = "Jonathan"
words[23] = "Lyes"
words[24] = "MessaoudMuhammad"
words[25] = "MohamedAbdeloifi"
words[26] = "Nasser"
words[27] = "JérémyBojko"
words[28] = "bankruptcy"

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
