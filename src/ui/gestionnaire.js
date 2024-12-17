// gestionnaire d'événement
import {insererLivre, modifierLecture, supprimerLivre} from "../services/livreServices.js";
import {afficherLivres} from "./render.js";

export const setupGestionnaire = () => {
    // réupérer les élément dans le DOM
    const toggleFormBtn = document.querySelector("#toggleFormBtn")
    const formSection = document.querySelector("#formSection")
    const livreForm = document.querySelector("#bookForm")

    const fromCollapse = new bootstrap.Collapse(formSection, {toggle: false})

    // Gestionaire click bouton toggleFormBtn
    toggleFormBtn.addEventListener('click',() => {
        fromCollapse.toggle()
    })

    // On reset le formulaire lorsque celui ci est caché
    formSection.addEventListener('hidden.bs.collapse', () => {
        livreForm.reset()
    })
    // Traitement du formulaire
    livreForm.addEventListener('submit', (toto) => {
        // Empêcher le rechargement de la page
        toto.preventDefault()
        // Récupérer les valeurs saisies
        const titre = livreForm.title.value
        const auteur = livreForm.author.value
        const resume = livreForm.summary.value
        const estLu = livreForm.isRead.checked

        //****************************************
        // Sauvegarder les données saisies
        //****************************************
        insererLivre(titre, auteur, resume, estLu)
        // 4. Cacher (collapse) le formulaire
        fromCollapse.hide()
        afficherLivres()
    })

    // Tritement de la suppression d'un livre
    // Délégation d'événements
    const listeLivre = document.querySelector("#booksList")
    listeLivre.addEventListener("click", (evt) => {
        // Récupérer l'événement sur lequel on a cliqué
        const target = evt.target.closest(".delete-btn, .toggle-read-btn") // voir dans la doc la méthode closest
        if (target === null) {
            return null
        } else {
            const idLivre = target.dataset.id
            const estLuLivre = target.dataset.estLu
            // Déterminer sur quel élément on a cliqué
            if (target.classList.contains("delete-btn")) {
                supprimerLivre(idLivre)
                afficherLivres()
            } else if (target.classList.contains("toggle-read-btn")) {
                modifierLecture(estLuLivre)
                afficherLivres()
            }
        }


    })
}