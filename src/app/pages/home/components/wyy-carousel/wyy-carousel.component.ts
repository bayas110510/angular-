import { Component, OnInit, TemplateRef, ViewChild, Input, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-wyy-carousel',
  templateUrl: './wyy-carousel.component.html',
  styleUrls: ['./wyy-carousel.component.less'],
})

export class WyyCarouselComponent implements OnInit {

  @Input() activeIndex = 0;

  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();

  @ViewChild('dot',{ static:true }) dotRef:TemplateRef<any>;
  
  
  constructor() { }

  ngOnInit() {
  }

  //左右切换按钮
  onChangeSlide(type:'pre' | 'next'){
    this.changeSlide.emit(type)
  }

}
