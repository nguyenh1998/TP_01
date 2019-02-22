export class Devoilement {

    constructor(elementParent, fonction) {
        this.elmParent = elementParent
        this.afficherSite()
        this.fonction = fonction
    }//Fin du constructor

    //Fonction pour la deuxieme animation
    afficherSite() {
        //Créer un élément div pour l'animation translate
        let elmScreen = this.creerElement(this.elmParent, 'div', 'translate')

        //Chercher les éléments du site par DOM
        let x = document.getElementsByClassName('animation-01')[0]
        let y = document.getElementsByClassName('animation-02')[0]
        let z = document.getElementsByClassName('wrapper')[0]

        //Activer le scroll de la page 
        document.getElementsByTagName('BODY')[0].style.overflow = 'auto'
        
        //Ajouter une classe CSS à l'élément HTML
        x.classList.add('fadeOut')
        
        //Détecter la fin de l'animation et faire disparaître tout les éléments nécessaire pour dévoiler le site 
        elmScreen.addEventListener('animationend', () => {
            x.parentNode.removeChild(x)
            y.parentNode.removeChild(y)
            z.classList.add('fadeInGallery')
            this.finDesAnimation.bind(this)
        })

        //Détecter la fin de l'animation et lance la dernière fonction 
        elmScreen.addEventListener('animationend', this.finDesAnimation.bind(this))
    }

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

    //Fonction de fin pour afficher le message de fin
    finDesAnimation(evt) {
        this.fonction()
    }//Fin de la fonction 
}