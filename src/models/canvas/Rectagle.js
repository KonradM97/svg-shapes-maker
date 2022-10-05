import Shape from "./Shape";

export default class Rectangle extends Shape{
    constructor(id, points, fill = "black"){
        super(id, points, fill);
        this._pointsLimit = 2;
    }

    chooseFirstPoint(){
        let x = (this.points.pointArray[0].x < this.points.pointArray[1].x)? this.points.pointArray[0].x : this.points.pointArray[1].x;
        let y = (this.points.pointArray[0].y < this.points.pointArray[1].y)? this.points.pointArray[0].y : this.points.pointArray[1].y;
        return {x: x, y: y};
    }

    chooseLastPoint(){
        let x = (this.points.pointArray[0].x > this.points.pointArray[1].x)? this.points.pointArray[0].x : this.points.pointArray[1].x;
        let y = (this.points.pointArray[0].y > this.points.pointArray[1].y)? this.points.pointArray[0].y : this.points.pointArray[1].y;
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
        if(this.points.pointArray[0]!= undefined && this.points.pointArray[0]== undefined){
            return this.points.pointArray[0];
        } else if(this.points.pointArray[0]!= undefined && this.points.pointArray[0] != undefined){
            return this.chooseFirstPoint();
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