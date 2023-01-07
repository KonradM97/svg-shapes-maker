import Shape from "./Shape";

export default class Rectangle extends Shape{
    constructor(id, points,type, fill){
        super(id, points, type, fill);
        this._pointsLimit = 4;
    }

    chooseFirstPoint(){
        let xArray = this.points.pointArray.map(x => x.x);
        let x = Math.min.apply(Math, xArray);
        let yArray = this.points.pointArray.map(y => y.y);
        let y = Math.min.apply(Math, yArray);
        return {x: x, y: y};
    }

    chooseLastPoint(){
        let xArray = this.points.pointArray.map(x => x.x);
        let x = Math.max.apply(Math, xArray);
        let yArray = this.points.pointArray.map(y => y.y);
        let y = Math.max.apply(Math, yArray);
        return {x: x, y: y};
    }

    set setPoint(value){
        if(this._points.numberOfPoints<this._pointsLimit){
            this.points.addPoint(value.x, value.y);
        } else {
            this.points.setLastPoint(value.x, value.y);
        }
    }

    get p1(){
        if(this.points.pointArray[1]){
            return this.chooseFirstPoint();
        }
        else if(this.points.pointArray[0]!= undefined){
            return this.points.pointArray[0];
        } 
        return {x: 0, y: 0};
    }

    get p2(){
        if(this.points.pointArray[1]!= undefined){
            return this.chooseLastPoint();
        }
        return {x: 0, y: 0};
    }

    get width(){
        if(this.points.pointArray[1]!= undefined){
            return Math.abs(this.p2.x - this.p1.x);
        }
        return 0;
    }

    get height(){
        if(this.points.pointArray[1]!= undefined){
            return Math.abs(this.p2.y - this.p1.y);
        }
        return 0;
    }
}