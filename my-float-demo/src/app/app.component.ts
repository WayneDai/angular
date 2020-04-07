/*
 * @Author: your name
 * @Date: 2020-04-07 16:40:51
 * @LastEditTime: 2020-04-07 16:46:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \angular\my-float-demo\src\app\app.component.ts
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  tabs = [
    {
      name: 'Tab 1',
      disabled: false
    },
    {
      name: 'Tab 2',
      disabled: true
    },
    {
      name: 'Tab 3',
      disabled: false
    }
  ];
}
