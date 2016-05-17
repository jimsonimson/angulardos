//To access the host element we import ElementRef Service and, to modify the element we import Renderer Service
import {Directive, ElementRef, Renderer} from 'angular2/core'


@Directive({
  selector: '[autoGrow]', //Whatever element uses the attribute autoGrow, that element will inherit this directive
  host: { //this will subscribe our event handling methods to this directive
    '(focus)': 'onFocus()', //this binds the 'focus' to our focus methods
    '(blur)': 'onBlur()'
  }
})
export class AutoGrowDirective{

  constructor(
    private el: ElementRef,
    private renderer: Renderer)
    {

  }

  onFocus(){
    this.renderer.setElementStyle(this.el, 'width', '200');
  }

  onBlur(){
    this.renderer.setElementStyle(this.el, 'width', '120');

  }


}
