//共享模块  引入全局用到的模块 指令 方法等 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
  ],
  exports: [
    FormsModule,
    NgZorroAntdModule
  ],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class ShareModule { }
