import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  basecolor: string = 'grey';
  baynumber: string = 'XXXXX';
  bays: string[] = ["BAY 70", "BAY 66 U", "BAY 66", "BAY 62 U", "BAY 62", "BAY 58 U", "BAY 58", "BAY 54 U", "BAY 54", "BAY 50", "BAY 50 U", "BAY 46 U", "BAY 46", "BAY 42", "BAY 42 U", "BAY 38 U", "BAY 34 U", "BAY 34", "BAY 30 U", "BAY 30", "BAY 26 U", "BAY 26", "BAY 22 U", "BAY 22", "BAY 18 U", "BAY 18", "BAY 14 U", "BAY 14", "BAY 10 U", "BAY 10", "BAY 06 U", "BAY 06", "BAY 02 U", "BAY 02", "BAY35"];
  changecolors: string[] = new Array(35).fill(this.basecolor);
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(index : number){
   console.log('change color');
    for(let i = 0; i < this.changecolors.length; i++){
      if(i == index){
        this.baynumber = this.bays[i]; 
        if(this.changecolors[index] == this.basecolor)
        this.changecolors[index] = 'green';
      else
        this.changecolors[index] = this.basecolor;
  
      }else
       this.changecolors[i] = this.basecolor;

      console.log(this.changecolors[i]);
    }

  }
}
