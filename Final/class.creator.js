var Mother = require("./class.mother");
var Grass = require("./class.grass");
var Xotaker = require("./class.grasseater");

module.exports=class Creator extends Mother {
    constructor(x, y) {
       super(x,y)
        this.energy = 5;
        this.multiply = 0;
    }
    
    
    stexcel() {
        this.multiply++;
        var asd =Math.floor(Math.random()*this.yntrelVandak(0).length);
        var datarkvandak = this.yntrelVandak(0)[asd]
        var asb =Math.floor(Math.random()*this.yntrelVandak(1).length);
        var datarkvandak1 = this.yntrelVandak(1)[asb]

        if (this.multiply >= 30) {
            if (this.energy > 1 && datarkvandak) {
                matrix[datarkvandak[1]][datarkvandak[0]] = 1
                grassArr.push(new Grass(datarkvandak[0], datarkvandak[1]))
                this.energy--;
            }
            else {
                this.energy--;
            }
            if (this.energy == 1 && datarkvandak) {
                matrix[datarkvandak[1]][datarkvandak[0]] = 2;
                xotakerarr.push(new Xotaker(datarkvandak[0], datarkvandak[1]))
                this.energy--;
            }
            else if (this.energy == 1 && datarkvandak1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == datarkvandak1[0] && grassArr[i].y == datarkvandak1[1]) {
                        grassArr.splice(i, 1);
                    }
                }
                matrix[datarkvandak1[1]][datarkvandak1[0]] = 2;
                xotakerarr.push(new Xotaker(datarkvandak1[0], datarkvandak1[1]))
                this.energy--;
            }

            this.multiply = 0;
        }
        if (this.energy <= 0) {
            this.mernel();
        }
    }
    mernel() {
        matrix[this.y][this.x] = 0;
        for (var i in creatorarr) {
            if (creatorarr[i].x == this.x && creatorarr[i].y == this.y) {
                creatorarr.splice(i, 1)
            }
        }
        for (var i in grassArr) {
            if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                grassArr.splice(i, 1)
            }
        }

    }
}

