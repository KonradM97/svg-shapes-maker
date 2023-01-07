import Shape from "./Shape";

export default class Circle extends Shape{
    constructor(id, points, type, fill){
        super(id, points, type, fill);
        this._pointsLimit = 2;
    }

    get center(){
        return this.points.pointArray[0];
    }

    get cx(){
        return this.center.x;
    }

    get cy(){
        return this.center.y;
    }

    get secondPoint(){
        return this.points.pointArray[1];
    }

    get diameter(){
        if(this.secondPoint){
            let xDiff = Math.abs(this.center.x-this.secondPoint.x);
            let yDiff = Math.abs(this.center.y-this.secondPoint.y);
            let diameterSquared = xDiff*xDiff+yDiff*yDiff;
            return Math.sqrt(diameterSquared);
        }
        return 0;
    }
}