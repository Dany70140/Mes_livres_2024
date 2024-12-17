// Service qui va faire du CRUD avec les livres

export const insererLivre = (titre, auteur, resume, estLu) => {
    // 1. Créer un objet javaScript
    const livre = {
        titre : titre,
        auteur : auteur,
        resume : resume,
        estLu : estLu,
        id :  crypto.randomUUID(),                // ID unique
        createdAt : new Date().toDateString()
    }
    // 2. Sérialiser (trasformer) en JSON (chaîne de caractères)
    const livreJson = JSON.stringify(livre)

    // 3. Sauvegarder dans le localStorage
    // 3.1. Récupérer dans le localStorage la valeur lié à la clé "livres"
    const livresJson = localStorage.getItem("livres")

    // 3.2. Désérialiser le JSON dans un tableau javascript
    const livres = livresJson ? JSON.parse(livresJson) : []

    // 3.3. Ajouter l'objet livre dans le tableau livres
    livres.push(livre)

    // 3.4. Sauvegarder le tableau livres dans le localStorage sous la clé "livres"
    localStorage.setItem("livres",JSON.stringify(livres))
}

export const rechercherTousLesLivres = () => {
    const livresJson = localStorage.getItem("livres")
    const livres = livresJson ? JSON.parse(livresJson) : []
    return livres
}

export const  supprimerLivre = id => {
    const livresJson = localStorage.getItem("livres")
    const livres = livresJson ? JSON.parse(livresJson) : []
    // Supprimer le livre avec 'id' dans le tableau de livre
    const livreRestant = livres.filter( livre => livre.id !== id)

    // Sauvegarder dans le localStorage
    localStorage.setItem("livres",JSON.stringify(livreRestant))
}

export const modifierLecture = id => {
    const livresJson = localStorage.getItem("livres")
    const livres = livresJson ? JSON.parse(livresJson) : []
    // Modifier le livre avec l'id 'id' dans le tableau de livre
    const livreLu = livres.filter( livre => livre.estLu === !estLu)
    // Sauvegarder dans le localStorage
    localStorage.setItem("livres",JSON.stringify(livreLu))
}