/**
 * 
    Voici à quoi pourrait ressembler la solution de l'exercice précédent.

    Refactorisez le code pour utiliser un getter (get verb () {...}) 
    au lieu d'une propriété d'instance passée au constructeur
 * 
 */

// Ton code ici 

class Speaker {
  constructor(name, verb) {
    this.name = name;
    this.verb = verb || 'says';
  }
  speak(text) {
    console.log(this.name + ' ' + this.verb + " '" + text + "'");
  }
}

class Shouter extends Speaker {
  constructor(name) {
    super(name, 'shouts');
  }
  speak(text) {
    super.speak(text.toUpperCase());
  }
}

const shouter = new Shouter('Dr. Loudmouth');

shouter.speak('hello there');
