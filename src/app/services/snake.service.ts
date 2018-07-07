// Angular
import { Injectable } from '@angular/core';

// Models
import { Head } from '../models/head.model';
import { Tail } from '../models/tail.model';

@Injectable()
export class SnakeService {
    private _head: Head;
    private _tail: Tail[];

    constructor (){
        this.reset();
    }
    
    public reset() {
        this._head = new Head (25, 25);
        this._tail = [
            new Tail(21, 25),
            new Tail(22, 25),            
            new Tail(23, 25),            
            new Tail(24, 25)
        ];
    }

    get Head() {
        return this._head;
    }

    get Tail() {
        return this._tail;
    }

    public updateTail() {
        this._tail.shift();
        this._tail.push(new Tail(this._head.LastPos.x, this._head.LastPos.y));
    }

    public eatApple() {
        this._tail.push(new Tail(this._head.LastPos.x, this._head.LastPos.y));
    }
}