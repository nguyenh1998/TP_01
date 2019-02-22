import {
    Util
} from './Util.js'

export class Introduction {

    constructor(elementParent, fonction) {
        this.elmParent = elementParent
        this.integrerEcranLoad()
        this.fonction = fonction
    }//Fin du constructor

    integrerEcranLoad() {
        //Création du balise conteneur pour les bullets (loading)
        let elmConteneur = this.creerElement(this.elmParent, 'div', 'loading')
        
        //Création des éléments pour l'animation de chargement 
        let elmBullet1 = this.creerElement(elmConteneur, 'div', 'bullet')
        let elmBullet2 = this.creerElement(elmConteneur, 'div', 'bullet')
        let elmBullet3 = this.creerElement(elmConteneur, 'div', 'bullet')
        let elmBullet4 = this.creerElement(elmConteneur, 'div', 'bullet')

        let dernierBullet = document.getElementsByClassName('bullet')[3]
        dernierBullet.addEventListener('animationend', this.passerVersAnimationSuivante.bind(this))
    }//Fin de la fonction 

    //Fonction pour créer des balises avec style CSS
    creerElement(elmParent, balise, classCSS) {
        //Créer l'élément 
        let monElm = document.createElement(balise)
        
        //Lier la classe CSS à l'élément
        monElm.classList.add(classCSS)

        //Lier l'élément au balise parent 
        elmParent.appendChild(monElm)
        return monElm
    }//Fin de la fonction 

    passerVersAnimationSuivante(evt) {
        Util.detruireTousLesNoeud(this.elmParent, this.elmParent)
        this.fonction()
    }
}//Fin de la classe