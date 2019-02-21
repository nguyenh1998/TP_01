export class Introduction {

    constructor(elementParent) {
        this.elmParent = elementParent
        this.integrerEcranLoad()
    }//Fin du constructor

    integrerEcranLoad() {
        console.log('AAAAAAA')
        //Création du balise conteneur pour les bullets (loading)
        let elmConteneur = this.creerElement(this.elmParent, 'div', 'loading')
        
        //Création des éléments pour l'animation de chargement 
        let elmBullet1 = this.creerElement(elmConteneur, 'div', 'bullet')
        let elmBullet2 = this.creerElement(elmConteneur, 'div', 'bullet')
        let elmBullet3 = this.creerElement(elmConteneur, 'div', 'bullet')
        let elmBullet4 = this.creerElement(elmConteneur, 'div', 'bullet')

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

    // terminerIntro(evt) {

    // }
}//Fin de la classe