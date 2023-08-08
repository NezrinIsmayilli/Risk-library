import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-n-toolbar-test',
  templateUrl: './n-toolbar-test.component.html',
  styleUrls: ['./n-toolbar-test.component.tailwind.css']
})
export class NToolbarTestComponent{
  @Input() appName: string;
  @Input() headerMenuTitle: string;
  @Output() logout = new EventEmitter();
  year = new Date().getFullYear()
}
