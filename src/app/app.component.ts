import { Component } from '@angular/core';

// Services
import { SnakeService } from './services/snake.service';

// Models
import { Apple } from './models/apple.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public snake;
	public apple;
	private direction;
	private lost = false;

  constructor(private _snake: SnakeService) {
	this.snake = { head: _snake.Head, tail: _snake.Tail };
	this.direction = 'right';
	this.spawnApple();
	setInterval(() => {
			this.move();
		}, 100);
  }

  private spawnApple() {
		let tempX = Math.floor(Math.random() * (50) ) + 1;
		let tempY = Math.floor(Math.random() * (50) ) + 1;

		while((this._snake.Head.X == tempX 
			&& this._snake.Head.Y == tempY) 
			|| (this._snake.Tail.filter(e => e.X == tempX).filter(e => e.Y == tempY).length > 0)) {
			tempX = Math.floor(Math.random() * (50) ) + 1;
			tempY = Math.floor(Math.random() * (50) ) + 1;
		}
		
		this.apple = new Apple(tempX, tempY);
	}

	private move() {
		if(this.direction === 'left'){
			if(this._snake.Head.X > 1) {
				this._snake.Head.X -= 1;
			} else {
			this.lost = true;
			}
		}

		if(this.direction === 'right') {
			if(this._snake.Head.X < 50) {
				this._snake.Head.X += 1;
			} else {
			this.lost = true;
			}
		}

		if(this.direction === 'up') {
			if(this._snake.Head.Y > 1) {
				this._snake.Head.Y -= 1;
			} else {
				this.lost = true;
			}
		}

		if(this.direction === 'down') {
			if(this._snake.Head.Y < 50) {
				this._snake.Head.Y += 1;
			} else {
				this.lost = true;
			}
		}

		if(this._snake.Tail.filter(e => e.X == this._snake.Head.X).filter(e => e.Y == this._snake.Head.Y).length > 0){
			this.lost = true;
		}
	
		if(!this.lost){
			if(this._snake.Head.X == this.apple.X && this._snake.Head.Y == this.apple.Y){
			this._snake.eatApple();
			this.spawnApple();
			} else {
			this._snake.updateTail();
			}
		} else {
			this._snake.reset();
			this.spawnApple();
			this.direction = 'right';
			alert('You lost, your score was: ' + (this.snake.tail.length - 4));
			this.lost = false;
		}
	
		this.snake = { head: this._snake.Head, tail: this._snake.Tail };
	}

  public onKeyDown(event: any) {
		if(event.code == 'ArrowLeft' || event.code == 'KeyA') {
			this.direction = 'left';
		}

		if(event.code == 'ArrowRight' || event.code == 'KeyD') {
			this.direction = 'right';
		}

		if(event.code == 'ArrowUp' || event.code == 'KeyW') {
			this.direction = 'up';
		}

		if(event.code == 'ArrowDown' || event.code == 'KeyS') {
			this.direction = 'down';	
		}
	}
}
