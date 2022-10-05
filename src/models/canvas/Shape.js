import Points from "../Points";

export default class Shape{
    constructor(id, points, fill){
        this._id = id;
        this._points = points? points : new Points(this.id);
        this._fill = fill? fill : 'black';
        this._pointsLimit = 0;
    }

    set id(value){
        this.id = value;
    }

    get id(){
        return this._id;
    }

    set points(value){
        this._points = value;
    }

    get points(){
        return this._points;
    }

    set fill(value){
        this._fill = value;
    }

    get fill(){
        return this._fill;
    }

    addPoint(x,y){
        if(this._points.pointArrayLength < this._pointsLimit || this._pointsLimit == 0){
            this._points.addPoint(x,y);
        }
    }
}