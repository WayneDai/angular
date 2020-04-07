/*
 * @Author: your name
 * @Date: 2020-04-07 16:40:51
 * @LastEditTime: 2020-04-07 18:52:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angular\my-float-demo\src\app\app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {BondBscInfoComponent} from './bond-bsc-info/bond-bsc-info.component';
import {BondBscFloatComponent} from './bond-bsc-info/bond-bsc-info-float/bond-bsc-info-float.component';
import {DragModalDirective} from './common/DragModalDirective';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    BondBscInfoComponent,
    BondBscFloatComponent,
    DragModalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    BondBscInfoComponent
  ],
  entryComponents:[
    BondBscFloatComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
