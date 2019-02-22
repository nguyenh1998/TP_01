//Importation des différent script
import { Introduction } from './Introduction.js'
import { Devoilement } from './Devoilement.js';

//Lancement du premier animation de chargement
let elmConteneurAnim1 = document.querySelector('.animation-01')
let elmConteneurAnim2 = document.querySelector('.animation-02')
let loading = new Introduction(elmConteneurAnim1, devoilementPage)

//Lancement du deuxième animation 
function devoilementPage() {
    let pageDevoilement = new Devoilement(elmConteneurAnim2, finAnim)
}

//Fin de l'animation et la page est charger
function finAnim() {
    console.log('Animation terminée - Bienvenue sur le site')
}