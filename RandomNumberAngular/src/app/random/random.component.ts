import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {


  num:number=0;
  rndNumber=0;
  add(){
      this.rndNumber+=Math.floor(Math.random() * 10);
      this.num=this.rndNumber;

  }
  sub(){
    this.rndNumber-=Math.floor(Math.random() * 10);
      this.num=this.rndNumber;
  }
}
