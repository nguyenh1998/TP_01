export class Devoilement {

    constructor(elementParent, fonction) {
        this.elmParent = elementParent
        this.afficherSite()
        this.fonction = fonction
    }

    afficherSite() {
        let elmScreen = this.creerElement(this.elmParent, 'div', 'translate')
        
        let x = document.getElementsByClassName('animation-01')[0]
        let y = document.getElementsByClassName('animation-02')[0]
        x.classList.add('fadeOut')
        
        elmScreen.addEventListener('animationend', () => {
            x.parentNode.removeChild(x)
            y.parentNode.removeChild(y)
        })
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

    finDesAnimation(evt) {
        this.fonction()
    }
}