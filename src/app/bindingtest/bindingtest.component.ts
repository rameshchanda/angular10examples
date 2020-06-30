import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bindingtest',
  templateUrl: './bindingtest.component.html',
  styleUrls: ['./bindingtest.component.css']
})
export class BindingtestComponent {

  @ViewChild('bindingInput') bindingInput: ElementRef;

  isUnchanged = true;

  getHTMLAttributeValue(): any {
    console.warn('HTML attribute value: ' + this.bindingInput.nativeElement.getAttribute('value'));
  }

  getDOMPropertyValue(): any {
    console.warn('DOM property value: ' + this.bindingInput.nativeElement.value);
  }

  working(): any {
    console.warn('Test Button works!');
  }

  toggleDisabled(): any {

    let testButton = <HTMLInputElement> document.getElementById('testButton');
    testButton.disabled = !testButton.disabled;
    console.warn(testButton.disabled);
  }

}
