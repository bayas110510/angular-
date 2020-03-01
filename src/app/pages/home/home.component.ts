import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Banner, HotTag, SongSheet,Singer } from 'src/app/services/data-types/common.types';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { SingerService } from 'src/app/services/singer.service' ;
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  carouselActiveIndex =0;
  banners: Banner[];
  hotTags:HotTag[];
  SongSheetList:SongSheet[];
  singers:Singer[]

  @ViewChild(NzCarouselComponent, {static:true}) 
  private nzCarousel:NzCarouselComponent;
  constructor( 
    // private homeServe:HomeService,
    // private singServe:SingerService,
    private route:ActivatedRoute 
    ) {
    
    this.route.data.pipe(map(res => res.homeData)).subscribe(([banners,hotTags,SongSheetList,singers]) => {
      // console.log('res:',res);
      this.banners =banners;
      this.hotTags =hotTags;
      this.SongSheetList =SongSheetList;
      this.singers =singers;

    })
    // 调轮播图接口
    // this.getBanners();
    
    // // 热门标签接口
    // this.getHotTags();
    
    // // 热门推荐歌单接口
    // this.getPersonalSheetList();

    // //获取入住歌手
    // this.getEnterSinger();
  }

  ngOnInit() {
  }


  // //获取轮播图
  // private getBanners(){
  //   this.homeServe.getBanners().subscribe( banners =>{
  //     console.log('banners:', banners);
  //     this.banners =banners;
  //   });
  // }


  // //获取热门标签
  // private getHotTags(){
  //   this.homeServe.getHotTags().subscribe( tags =>{
  //     console.log('tags:', tags);
  //     this.hotTags =tags;
  //   });
  // }

  // //  获取热门推荐歌单
  // private getPersonalSheetList(){
  //   this.homeServe.getPersonalSheetList().subscribe( sheets =>{
  //     console.log('sheets:', sheets);
  //     this.SongSheetList =sheets;
  //   });
  // }
  
  // //获取入住歌手
  // private getEnterSinger(){
  //   this.singServe.getEnterSinger().subscribe( singers =>{
  //     console.log('singer:', singers);
  //     this.singers =singers;
  //   });
  // }

  // 轮播图上的小圆点
  onBeforeChange({to}){
    // console.log(to);
    this.carouselActiveIndex = to;
  }

  //左右切换按钮
  onChangeSlide( type:'pre' | 'next'){
    this.nzCarousel[type]();
  }
}
