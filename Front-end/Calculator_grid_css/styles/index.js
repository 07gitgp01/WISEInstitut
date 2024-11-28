const bouttons = document.querySelectorAll('.boutton'); // Selects all bouttons on the page with the class boutton
let affichage = document.getElementById('displayValue'); //Indexes the element with the id displayValue to display the result of any click on a boutton
let expression = "";

bouttons.forEach(boutton => { // Add an event listener to each boutton
    boutton.addEventListener('click', ()=> {
        const value = boutton.innerText; // drop the value of the boutton
        // console.log(value);

        if(value === 'C') {
            expression = "";
            affichage.innerText = expression;
            console.log(expression);
        } else if(value === 'del'){
            expression = expression.slice(0, -1); // Delete the last caracter
            affichage.innerText = expression;
            console.log(expression);
        } else if(value === '='){
            try {
                // let resultat = eval(expression.replace("X", "*"));
                let resultat = math.evaluate(expression.replace('X', '*'));
                // let resultat = new Function('return' + expression.replace('X', '*'))();
                expression = resultat.toString();
                console.log(expression);
                affichage.textContent = expression;
            }catch (erreur) {
                expression = "";
                let exception = "NaN";
                console.error("Erreur rencontré au niveau du calcul de l'expression");
                affichage.innerText = exception;
            }
        } else {
            expression += value;
            affichage.innerText = expression;
        }
    })
})