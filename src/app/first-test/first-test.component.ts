import { Component, OnInit } from '@angular/core';
import { ComunicationServiceService } from '../comunication-service.service';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent implements OnInit {

  counter: number = 0;
  message: string = 'Hello message from first test component';
  receiveMessage?: string;
  nameSmallBrother?: string;

  constructor(
    private _comunicationService: ComunicationServiceService
  ) {}

  ngOnInit(): void {
    this._comunicationService.setnameOfBigBrother("Big brother Juan");
    this.nameSmallBrother = this._comunicationService.getnameOfBigBrother(); 
  }

  receiveMessageChange(event: string) {
    this.receiveMessage = event;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter <= 0) return;
    this.counter--;
  }

}
