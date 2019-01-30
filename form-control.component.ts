import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  log(x){
	  console.log(x);
  }
  
  }


