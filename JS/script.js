const e__formProfil = document.querySelector(".form_profil");
const e__formContenu = document.querySelector(".form_contenu");
const e__formBillet = document.querySelector(".form_billet");
const e__resume = document.querySelector(".resume");

// Cacher les formulaire de départ
window.addEventListener("load", function(){
    e__formContenu.classList.add('invisible');
    e__formBillet.classList.add('invisible');
    e__resume.classList.add("invisible");
});

/**
 * Ajout / Suppression des billets
 */
const e_billet = e__formBillet.querySelector('.billet').cloneNode(true);
const e_tableBillets = document.querySelector(".table-billets");

 e__formBillet.querySelector('input[type="number"]').addEventListener("change", function() {
    do{
        // Création du billet-clone
        let e_cloneBillet = e_billet.cloneNode(true);
        e_cloneBillet.querySelector('p').textContent = `Billet #${e_tableBillets.childElementCount+1}`;
        e_cloneBillet.classList.remove("invisible");
        e_cloneBillet.querySelectorAll('input').forEach(element => {
            element.setAttribute('name', `billet-${e_tableBillets.childElementCount+1}`);
        });

        // Ajouter ou retirer le billet
        if(e_tableBillets.childElementCount > this.value) {
            e_tableBillets.removeChild(e_tableBillets.lastChild);
        } else if (e_tableBillets.childElementCount <= this.value) {
            e_tableBillets.appendChild(e_cloneBillet);
        }
    } while(e_tableBillets.childElementCount != this.value);
 });

/**
 *
 */
function finalisationDeFormulaire() {

}
/**
 * Vérification de date retour, si checkbox est coché
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
    e__resume.classList.remove('invisible');
    sommaireDeFormulaire();
});
e__formBillet.querySelector('.retour').addEventListener("click", function() {
    e__formBillet.classList.add('invisible');
    e__formContenu.classList.remove('invisible');
});

/**
 * Formulaire de resume -- Actions
 */
 e__resume.querySelector('.continue').addEventListener("click", function() {
    e__resume.classList.add('invisible');
});
e__resume.querySelector('.retour').addEventListener("click", function() {
    e__resume.classList.add('invisible');
    e__formProfil.classList.remove('invisible');
});