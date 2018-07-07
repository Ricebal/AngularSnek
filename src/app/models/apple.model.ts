export class Apple {
    private x = 1;
    private y = 1;
    
    constructor(x: number, y: number){
        if(x){
            this.x = x;
            if(y){
                this.y = y;
            }
        }
    }

    get X() {
        return this.x;
    };

    set X(value) {
        this.x = value;
    }

    get Y() {
        return this.y;
    }

    set Y(value) {
        this.y = value;
    }
}