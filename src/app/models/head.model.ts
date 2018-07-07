export class Head {
    private _x = 1;
    private _y = 1;
    private _lastPos = {x: 1, y: 1};

    constructor(x: number, y: number){
        if(x){
            this._x = x;
            if(y){
                this._y = y;
            }
        }
    }

    get X() {
        return this._x;
    };

    set X(value) {
        this._lastPos.x = this._x;
        this._lastPos.y = this._y;      
        this._x = value;
    }

    get Y() {
        return this._y;
    }

    set Y(value) {
        this._lastPos.x = this._x;
        this._lastPos.y = this._y;      
        this._y = value;
    }

    get LastPos() {
        return this._lastPos;
    }
}