class Billet {
    static i = 0;

    static ajouterBillet(){
        Billet.i++
    }

    static numeroBillet() {
        return "billet-"+ (Billet.i);
    }

    static supprimerBillet() {
        Billet.i--;
    }
}

let c_formProfil = {
    nom_complet: "",
    courriel: "",
    phone: "",
};
let c_formContenu = {
    dateDepart: "",
    dateFin: "",
    destination: "",
};
let c_formBillet = [];


const e__formProfil = document.querySelector(".form_profil");
const e__formContenu = document.querySelector(".form_contenu");
const e__formBillet = document.querySelector(".form_billet");

window.addEventListener("load", function(){
    e__formContenu.classList.add('invisible');
    e__formBillet.classList.add('invisible');
});


/**
 * Ajout des billets
 */
const e_billet = e__formBillet.querySelector('.billet');
const e_tableBillets = document.querySelector(".table-billets");

 e__formBillet.querySelector('input[type="number"]').addEventListener("change", function() {
    if(e_tableBillets.childElementCount > -1){
        do{
            let e_cloneBillet = e_billet.cloneNode(true);
            e_cloneBillet.querySelectorAll('input').forEach(element => {
                element.setAttribute('name', Billet.numeroBillet());
            });
            console.log(e_cloneBillet);
            if(e_tableBillets.childElementCount > this.value) {
                e_tableBillets.removeChild(e_tableBillets.lastChild);
                Billet.supprimerBillet();
            } else if (e_tableBillets.childElementCount < this.value) {
                e_tableBillets.appendChild(e_cloneBillet);
                Billet.ajouterBillet();
            }

        } while(e_tableBillets.childElementCount != this.value);
    }
 });


/**
 * ========================================================
 */

/**
 * Formulaire de formulaire -- Actions
 */
e__formProfil.querySelector('.continue').addEventListener("click", function() {
    e__formProfil.classList.add('invisible');
    e__formContenu.classList.remove('invisible');
});

/**
 * Formulaire de contenu -- Actions
 */
 e__formContenu.querySelector('.continue').addEventListener("click", function() {
    e__formContenu.classList.add('invisible');
    e__formBillet.classList.remove('invisible');
});
e__formContenu.querySelector('.retour').addEventListener("click", function() {
    e__formContenu.classList.add('invisible');
    e__formProfil.classList.remove('invisible');
});

/**
 * Formulaire de billet -- Actions
 */
e__formBillet.querySelector('.continue').addEventListener("click", function() {
    e__formBillet.classList.add('invisible');
});
e__formBillet.querySelector('.retour').addEventListener("click", function() {
    e__formBillet.classList.add('invisible');
    e__formContenu.classList.remove('invisible');
});