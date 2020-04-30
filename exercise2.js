/**
 
    1. Réécrivez ces deux types d'objets pour utiliser le mot-clé class, 
    au lieu de manipuler directement le prototype.
    
    "Speaker" est un type simple qui expose une méthode de prononciation qui, 
    lorsqu'elle est appelée, enregistre le texte donné avec le nom du locuteur.
 
    2. "Shouter" est un sous-type de "Speaker" qui crie(speak) son texte et 
    le met en majuscule.
 
 */

// Ton code ici 
 
function Speaker(name, verb) {
  this.name = name;
  this.verb = verb || 'says';
}

Speaker.prototype.speak = function (text) {
  console.log(this.name + ' ' + this.verb + " '" + text + "'");
};

function Shouter(name) {
  Speaker.call(this, name, 'shouts');
}

Shouter.prototype = Object.create(Speaker.prototype);

Shouter.prototype.speak = function (text) {
  Speaker.prototype.speak.call(this, text.toUpperCase());
};
