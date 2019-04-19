class Character {
    constructor(name){
        if (new.target === Character) {
            throw new TypeError("Cannot construct Abstract instances directly");
          }
        this.name = name;
        Character.numInstances = (Character.numInstances || 0) + 1;
    }

    get position() {
        return 'x: ' + this.x + ' y: ' + this.y;
    }

    setXandY(x, y) {
        if(x<0||x>10||y<0||y>10){
            throw new Error('Dimensions out of bounds')
        }else{ 
            console.log('Setting x to: ' + x + ' and y to: ' + y)
            this.x = x;
            this.y = y;
        }
    }
}

class PlayerCharacter extends Character{
    constructor(name){
        super(name);
    }
}

class NonPlayerCharacter extends Character{
    constructor(name){
        super(name);
    }
}

let player = new PlayerCharacter('Sale');
let player2 = new PlayerCharacter('Pera');
let player3 = new PlayerCharacter('Nesa');
let player4 = new PlayerCharacter('Jelena');
let player5 = new NonPlayerCharacter('Sanja');

player.setXandY(9, 5);
console.log(player.name)
console.log(player.position);
console.log(Character.numInstances);