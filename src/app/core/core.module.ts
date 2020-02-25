// 引入项目中需要的模块 
//要是把全部需要的模块引入到app.module 里的快维护起来麻烦
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule, 
    BrowserModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule
  ],
  exports:[
    ShareModule,
    AppRoutingModule
  ]
})
export class CoreModule { 
  // core模块只能在app模块里引入   别的模块不能引入
  constructor(@SkipSelf() @Optional() parentModule:CoreModule){
    if(parentModule){
      throw new Error('CoreModule 只能被appModule引入')
    }
  }
}
