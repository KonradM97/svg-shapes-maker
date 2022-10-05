export default class Point {
    constructor(index, x, y){
        this.index = index;
        this.x = x;
        this.y = y;
    }

    updatePoint(x, y, index){
        this.x = x;
        this.y = y;
        if(typeof(index)!= undefined){
            this.index = index;
        }
    }

    getx(){
        return this.x;
    }

    gety(){
        return this.y;
    }


    get coordinates(){
        return this.x + ',' + this.y;
    }
}