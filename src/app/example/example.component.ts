import { Component, OnInit,ContentChild,ElementRef,ViewChild } from '@angular/core';
 
 

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
 @ContentChild('title') title: ElementRef;
 @ViewChild('title1') title1: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  Onclick()
  {
   let val=this.title.nativeElement.value;
    alert(val+" avec ContentChild");
  }
  Onclick1()
  {
   let val=this.title1.nativeElement.value;
    alert(val+" avec ViewChild");
  }
}
