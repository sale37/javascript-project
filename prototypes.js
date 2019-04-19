function Character(name){
    this.name = name;
}
Character.numInstances = 0;

Character.prototype.setXandY = function(x, y){
    if(x<0||x>10||y<0||y>10){
        throw new Error('Dimensions out of bounds')
    }else{ 
        console.log('Setting x to: ' + x + ' and y to: ' + y)
        this.x = x;
        this.y = y;
    }
}

Object.defineProperty(Character.prototype, 'position', {
    get: function () {
        return 'x: ' + this.x + ' y: ' + this.y;
    }
})

function PlayerCharacter(name){
    this.name = name;
    Character.numInstances = (Character.numInstances || 0) + 1;
}

function NonPlayerCharacter(name){
    this.name = name;
    Character.numInstances = (Character.numInstances || 0) + 1;
}

PlayerCharacter.prototype = Object.create(new Character);

NonPlayerCharacter.prototype = Object.create(new Character);


let player = new PlayerCharacter('Sale');
let player2 = new PlayerCharacter('Pera');
let player3 = new PlayerCharacter('Nesa');
let player4 = new PlayerCharacter('Jelena');
let player5 = new NonPlayerCharacter('Sanja');

player.setXandY(9, 5);
console.log(player.name)
console.log(player.position);
console.log(Character.numInstances);