/*
 * @Author: your name
 * @Date: 2020-04-08 19:04:21
 * @LastEditTime: 2020-04-08 19:23:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-float-div\src\app\app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    DragDropModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
