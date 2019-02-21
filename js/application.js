//Importation des différent script
import {Introduction} from './Introduction.js'

//Lancement du premier animation de chargement
let elmConteneur = document.querySelector('.animation-01')
let loading = new Introduction(elmConteneur)





//Fin de l'animation et la page est charger
function finAnim() {
    console.log('Animation terminée - Bienvenue sur le site');
}