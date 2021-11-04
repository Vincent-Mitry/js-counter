// On initialise le compteur à 0
let count = 0;

// On sélectionne la "value" et les "buttons"
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

// console.log(btns);

// On parcourt la NodeList des boutons ("btns") avec un forEach
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.classList);

        // On récupère la liste des classes des éléments sur lesquels l'événement 'click' s'est produit
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            count--;
        }
        if(styles.contains('increase')){
            count++;
        }
        if(styles.contains('reset')){
            count = 0;
        }
        
        value.textContent = count;

        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count == 0){
            value.style.color ="black";
        }
    })
});


