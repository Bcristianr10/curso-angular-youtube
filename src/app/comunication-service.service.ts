import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationServiceService {

  constructor() 
  {     
  }

  nameOfBigBrother?: string;
  nameOfSmallBrother?: string;

  // getter and setter for nameOfBigBrother
  getnameOfBigBrother(): string
  {
    return this.nameOfBigBrother || "I don't know";
  }
  setnameOfBigBrother(value: string)
  {
    this.nameOfBigBrother = value;
  }

  // getter and setter for nameOfSmallBrother
  getnameOfSmallBrother(): string
  {
    return this.nameOfSmallBrother || "I don't know";
  }
  setnameOfSmallBrother(value: string)
  {
    this.nameOfSmallBrother = value;
  } 
  

  greet (brother:string)
  {
    console.log("Hello " + brother);
  }

  askAboutTheSon(): string
  {
    return "how are his child?";
  }
}
