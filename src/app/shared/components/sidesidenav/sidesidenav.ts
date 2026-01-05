import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidesidenav',
  imports: [NgIf],
  templateUrl: './sidesidenav.html',
  styleUrl: './sidesidenav.scss',
})
export class Sidesidenav {
  @Input() collapsed = false;
  @Output() collapse = new EventEmitter<void>();
}
