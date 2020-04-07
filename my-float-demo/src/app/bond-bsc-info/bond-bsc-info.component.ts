/*
 * @Author: your name
 * @Date: 2020-04-07 16:54:51
 * @LastEditTime: 2020-04-07 20:32:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angular\my-float-demo\src\app\bond\bondBscInfo.component.ts
 */
import {Component} from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
    selector: 'app-bond-bsc-info',
    templateUrl: './bond-bsc-info.component.html',
    styleUrls: ['./bond-bsc-info.component.less']
})
export class BondBscInfoComponent {
private isVisible = false;
    model: NzModalRef;
    constructor(
        private modalService: NzModalService
    ) {

    }

    floatDia(): void {
        this.isVisible = true;
      }

      handleOk(): void {
        console.log('Button ok clicked!');
        this.isVisible = false;
      }

      handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
      }

    // floatDia() {
    //    this.model = this.modalService.create({
    //     nzClosable: true,
    //     nzStyle: {top: '40px'},
    //     nzWidth: 650,
    //     nzContent: bondBscFloatComponent,
    //     nzMaskClosable: true,
    //     nzFooter: null
    //    });
    // }
}

