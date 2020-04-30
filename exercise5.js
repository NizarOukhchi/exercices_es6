
/** 
 *  1. Utilisez le passage de paramettre par destructuring 
 *  dans cette fonction
 */

function go(/** ton code ici */) {
  console.log(
    'speed=',
    speed,
    'hyperdrive:',
    hyperdrive,
    'frobnifier:',
    frobnifier
  );
}

const oprions = {speed: 50, hyperdrive: 100, frobnifier: 3}

go(oprions);
