// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

let btn = document.getElementById("btn");
let input = document.getElementById("disabledTextInput");
let solution = Math.floor(Math.random() * (100 - 10 + 1)) + 10

let essai = 10;
document.getElementById("texte").innerHTML = "Vous devez trouver un nombre entre 10 et 100 "+"vous avez " + essai + " essai"
function jeu(valeur1, valeur2) {
    essai--
        if (essai === 0) {
            document.getElementById("texte").innerHTML = "le nombre d'essai " + essai;
        }
        else if(essai < 0){
            btn.setAttribute("disabled", "");
        }
        else {
            if (valeur1 === valeur2) {
                document.getElementById("texte").innerHTML = "Bravo vous avez deviné le nombre en " + essai + " essai"
            }
            else if (valeur1 < valeur2) {
                document.getElementyById("texte").innerHTML = "Non le nombre est plus petit " + " Vous devez trouver un nombre entre 10 et 100 " + " Vous navez que " + essai + " essai"
                document.getElementBId("texte").innerHTML = i;
            }
            else if (valeur1 > valeur2) {
                document.getElementById("texte").innerHTML = " Non le nombre est plus grand " + " Vous devez trouver un nombre entre 10 et 100 " + " Vous navez que " + essai + " essai"

            }
             else {
                 document.getElementById("texte").innerHTML = " Saisi un bon nombre " + " Vous devez trouver un nombre entre 10 et 100 " + " Vous navez que " + essai + " essai"
             }
            
        }
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let valeur =parseInt(input.value);
    jeu(valeur, solution)
})

