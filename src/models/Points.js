import Point from "./Point";

export default class Points {
    constructor(id) {
        this.id = id;
        this.pointArray = [];
        this.numberOfPoints = 0;
        this.diameter = 4;
    }

    addPoint(x, y) {
        this.getPointArray().push(new Point(this.numberOfPoints, x, y));
        this.numberOfPoints++;
    }

    getDiameter(){
        return this.diameter;
    }

    getPointArray(){
        return this.pointArray;
    }

    get pointArrayLength(){
        return this.pointArray.length();
    }

    setLastPoint(x,y){
        this.pointArray[this.numberOfPoints - 1].x = x;
        this.pointArray[this.numberOfPoints - 1].y = y;
    }

    get lastPoint() {
        return this.pointArray[this.numberOfPoints - 1];
    }

    get pointsCoordinates() {
        let coordinates = '';
        for (let point in this.pointArray) {
            if (coordinates != '') {
                coordinates += ' ';
            }
            coordinates += point.coordinates();
        }
        return coordinates;
    }
}