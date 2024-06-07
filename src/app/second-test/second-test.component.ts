import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second-test',
  templateUrl: './second-test.component.html',
  styleUrls: ['./second-test.component.css']
})
export class SecondTestComponent {
  @Input() receiveMessage?: string;
  @Output() messageEmit = new EventEmitter<string>();
  @Output() incrementEmit = new EventEmitter<void>();
  @Output() decrementEmit = new EventEmitter<void>();
  message?: string;

  sendMessage() {
    this.messageEmit.emit(this.message);
  }

  increment() {
    this.incrementEmit.emit();
  }

  decrement() {
      this.decrementEmit.emit(); 
  }

  

}
