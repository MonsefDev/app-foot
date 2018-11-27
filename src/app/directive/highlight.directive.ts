import { Directive, OnInit,ElementRef,Renderer2, HostBinding, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
 /* Dircertiver with ElementRef */
  /*
  constructor(private elementRef: ElementRef) { }
  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor='red';
  }*/


   /* Dircertiver with Render */
  
  /*constructor(private elementRef: ElementRef,private render: Renderer2) { }
  ngOnInit(){
    this.render.setStyle(this.elementRef.nativeElement,'background','yellow');
 
  } */

  /** with @hostbindig  */   
  /*@HostBinding('style.backgroundColor') bg;


  @Input() defaultbg;
  @Input() changebg;
  @HostListener('mouseover',['$event'])
  mouseover(eventData:Event){
    console.log(eventData);
    this.bg=this.changebg;
  }
  @HostListener('mouseout')
  mouseout(eventData:Event){
    this.bg=this.defaultbg;
  }

  ngOnInit(){
    this.bg=this.defaultbg;
  }*/
}
