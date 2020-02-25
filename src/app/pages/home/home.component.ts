import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Banner } from 'src/app/services/data-types/common.types';
import { NzCarouselComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  carouselActiveIndex =0;
  banners: Banner[];

  @ViewChild(NzCarouselComponent, {static:true}) 
  private nzCarousel:NzCarouselComponent;
  constructor( private homeServe:HomeService ) {
    
    this.homeServe.getBanners().subscribe( banners =>{
      console.log('banners:', banners);
      this.banners =banners;
    });
  }

  ngOnInit() {
  }


  // 轮播图上的小圆点
  onBeforeChange({to}){
    console.log(to);
    this.carouselActiveIndex = to;
  }

  //左右切换按钮
  onChangeSlide( type:string){
    this.nzCarousel[type]();
  }
}
