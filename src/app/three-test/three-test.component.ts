import { Component, inject, OnInit } from '@angular/core';
import { ComunicationServiceService } from '../comunication-service.service';

@Component({
  selector: 'app-three-test',
  templateUrl: './three-test.component.html',
  styleUrls: ['./three-test.component.css']
})
export class ThreeTestComponent implements OnInit {

  nameSmallBrother?: string;
  myDate?: Date =  new Date();
  // constructor(
  //   private _comunicationService: ComunicationServiceService
  // ) { }
  private _comunicationService = inject(ComunicationServiceService);

  ngOnInit(): void {
    this._comunicationService.setnameOfSmallBrother("Small brother Pedro");
    this.nameSmallBrother = this._comunicationService.getnameOfSmallBrother();
  }

  greet(): void {
    this._comunicationService.greet(this._comunicationService.getnameOfBigBrother());
  }

  askAboutTheSon(): void {
    console.log(this._comunicationService.askAboutTheSon());
    
  }
}
