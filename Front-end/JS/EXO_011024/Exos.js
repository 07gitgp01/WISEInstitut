// ################## EXERCICE 1 #############################
// ################## EXERCICE 1 #############################

/**
 * @subject #1 (alphabet-sum) - Votre programme doit imprimer la somme totale de la position alphabetique (index basE sur zero) de tous les caracteres de la chaine donnEe "n"
 * @exemple n = "HELLO WORLD !" | result -> 114 | n = "AAAA =-" | result -> 0
 * @feat - indexOf() | map()
 */

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
function sumAlpha(p){
  
  let sum = p.toLowerCase().split("").map(letter => {
    let index = alphabet.indexOf(letter);
    return index !== -1 ? index : 0 ;
  }).reduce((acc, vc) => acc + vc, 0);
return sum;
}

console.log("Exercice 1".toUpperCase());
console.log(sumAlpha("HELLO WORLD"));
console.log(sumAlpha("AAAA =-"));
console.log(sumAlpha("+Paul Boss"));
console.log("=====================================================================");


// ################## EXERCICE 2 #############################
// ################## EXERCICE 2 #############################

/**
 * @subject #2 (bin-inverse) - Le but est de retourner tous les bits d'un nombre. N'inversez pas les zéros non significatifs.
 * @exemple -  n = 9, en binaire 1001, si on inverse tout les bits on obtient 0110 | result -> 6 (en decimal)
 * @feat - toString() | join() | parseInt() | map()
 */

function Inverse (number){
  let nbit = number.toString(2);
  let invnBit =nbit.split('').map(bit => {
    return bit == '0' ? '1' : '0';
  }).join('');
  return parseInt(invnBit, 2);
}


console.log("Exercice 2".toUpperCase());
console.log(Inverse(9));
console.log(Inverse(6));

console.log("=====================================================================");


// ################## EXERCICE 3 #############################
// ################## EXERCICE 3 #############################

/**
 * @subject #3 (dentist) - On vous donne un patient, chaque patient a un nombre unique de dents. Chaque dent est doit saine 1, porri 0 ou tirE -, retirez toutes les dents pourries que vous trouvez
 * @exemple
 * input:
 ----01---1----0
 ----0111-00---0
 * output:
 -----1---1-----
 -----111-------
 * @feat - replaceAll() | map() | forEach()
 */
console.log("Exercice 3: dentist".toUpperCase());

function removedent(dents) {
    let dentssaine = dents.split('').map(dent => {
    return dent == '0' ? '-' : dent ;
        }).join('');
    return dentssaine;
};
console.log(removedent('--1101011--0'));

console.log("=====================================================================");

// ################## EXERCICE 4 #############################
// ################## EXERCICE 4 #############################
console.log("Exercice 4: flight".toUpperCase());
/**
 * @subject #4 (flight) - Un vol devait arriver a une heure particuliere et on estime maintenant qu'il arrivera a une autre heure. Ecrire une fonction qui revoie le statut du vol: "EARLY", "DELAYED" ou "ON TIME"
 * @exemple - t = "22:13:55", t2 = "22:12:23" | result -> "EARLY"
 * @feat - split() | join()
 */

function volEtat (t1, t2){
    t1 = t1.split(":").map(Number);
    t2 = t2.split(":").map(Number);
    
    for (let i=0 ; i<3 ; i++) {
        if (t2[i] < t1[i]) return "DELAYED";
        if (t2[i] > t1[i]) return "EARLY";
    }
    return "ON TIME";

}

console.log(volEtat("22:13:55", "22:12:23"));  
console.log(volEtat("22:13:55", "22:15:00"));  
console.log(volEtat("22:13:55", "22:13:55"));  


console.log("=====================================================================");