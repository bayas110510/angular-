//服务模块  关于http方面的服务
import { NgModule, InjectionToken } from '@angular/core';


export const API_CONFIG =new InjectionToken('ApiConfigToken') 


@NgModule({
  declarations: [],
  imports: [
  ],
  providers:[
    {
      provide: API_CONFIG,
      useValue:'http://localhost:3000/'
    }
  ]
})
export class ServicesModule { }
