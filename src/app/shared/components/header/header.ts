import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared.imports';
@Component({
  selector: 'app-header',
   standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: SHARED_IMPORTS,
})
export class Header {

}
