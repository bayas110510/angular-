import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Banner, HotTag, SongSheet,Singer } from 'src/app/services/data-types/common.types';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { SingerService } from 'src/app/services/singer.service' ;
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';
import { SheetService } from 'src/app/services/sheet.service';

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
    private route:ActivatedRoute ,
    private SheetServe:SheetService
    ) {
    
    this.route.data.pipe(map(res => res.homeData)).subscribe(([banners,hotTags,SongSheetList,singers]) => {
      // console.log('res:',res);
      this.banners =banners;
      this.hotTags =hotTags;
      this.SongSheetList =SongSheetList;
      this.singers =singers;

    })
  }

  ngOnInit() {
  }

  // 轮播图上的小圆点
  onBeforeChange({to}){
    // console.log(to);
    this.carouselActiveIndex = to;
  }

  //左右切换按钮
  onChangeSlide( type:'pre' | 'next'){
    this.nzCarousel[type]();
  }

  //歌单详情
  onPlaySheet(id: number){
    console.log('id:',id);
    this.SheetServe.playSheet(id).subscribe(res =>{
      console.log('res:',res);
    })
  }
}
