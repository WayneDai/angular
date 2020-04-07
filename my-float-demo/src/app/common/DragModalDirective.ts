/*
 * @Author: your name
 * @Date: 2020-04-07 18:46:36
 * @LastEditTime: 2020-04-07 20:33:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-float-demo\src\app\common\DragModalDirective.ts
 */

import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
@Directive({
  selector: '[appDragModal]'
})
export class DragModalDirective implements AfterViewInit {
  private canMove = false;
  private modalX = 0;
  private modalY = 0;
  private mouseDownX = 0;
  private mouseDownY = 0;
  private distX = 0;
  private distY = 0;
  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }
  ngAfterViewInit() {
    const modalElement = this.getModalElement();
    const modalTitleElement = this.getModalTitleElment();
    console.log(modalElement);
    console.log(modalTitleElement);
    this.render.listen(modalTitleElement, 'mousedown', function(event) {
      this.mouseDownX = event.clientX;
      this.mouseDownY = event.clientY;
      this.modalX = modalElement.offsetLeft;
      this.modalY = modalElement.offsetTop;
      this.distX = event.clientX - modalElement.offsetLeft;
      this.distY = event.clientY - modalElement.offsetTop;
      this.render.setStyle(modalElement, 'position', 'absolute');
      this.render.setStyle(modalElement, 'top', `${this.modalY}px`);
      this.render.setStyle(modalElement, 'left', `${this.modalX}px`);
      this.canMove = true;
    }.bind(this));
    this.render.listen(modalTitleElement, 'mouseup', function(event) {
      this.canMove = false;
    }.bind(this));
    this.render.listen(this.elementRef.nativeElement, 'mousemove', function(event) {
      if (this.canMove) {
        let moveX = event.clientX - this.distX;
        let moveY = event.clientY - this.distY;
        const modalWidth = modalElement.offsetWidth;
        const modalHeight = modalElement.offsetHeight;
        const cw = document.documentElement.clientWidth;
        const cy = document.documentElement.clientHeight;

        if (moveY < 0) {
          moveY = 0;
        } else if (moveY > cy - modalHeight) {
          moveY = cy - modalHeight;
        }

        if (moveX < 0) {
          moveX = 0;
        } else if (moveX > cw - modalWidth) {
          moveX = cw - modalWidth;
        }

        this.render.setStyle(modalElement, 'top', `${moveY}px`);
        this.render.setStyle(modalElement, 'left', `${moveX}px`);
        this.render.setStyle(modalElement, 'cursor', `move`);
      }
    }.bind(this));
  }
  getModalElement() {
    return this.elementRef.nativeElement.querySelector('.ant-modal');
  }
  getModalTitleElment() {
    console.log(this.elementRef.nativeElement);
    return this.elementRef.nativeElement.querySelector('.ant-modal-content');
  }

}
