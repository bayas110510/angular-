import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from './services.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Banner, HotTag, SongSheet } from './data-types/common.types';
import { map } from 'rxjs/internal/operators';



@Injectable({
  providedIn: ServicesModule
})
export class HomeService {
  getPersonalizedSheetList() {
    throw new Error("Method not implemented.");
  }

  constructor( private http:HttpClient, @Inject(API_CONFIG) private uri:string ) {}

  
    //获取轮播图的方法 
    getBanners():Observable<Banner[]>{
      return this.http.get(this.uri + 'banner').pipe(map((res:{banners:Banner[]}) => res.banners));
    }

    //获取热门标签
    getHotTags():Observable< HotTag[]>{
      return this.http.get(this.uri + 'playlist/hot').pipe(map((res:{tags :HotTag[]})=> {
        return res.tags.sort((x:HotTag,y:HotTag) => {return x.position-y.position;}).slice(0,5);}));  //此步骤是取出热门标签中的前五个数据

    }

    //获取热门推荐歌单
    getPersonalSheetList():Observable<SongSheet[]>{
      return this.http.get(this.uri + 'personalized').pipe(map((res:{result :SongSheet[]})=> res.result.slice(0,16))); //slice(0,16)就是只要16个数据
    }
}
