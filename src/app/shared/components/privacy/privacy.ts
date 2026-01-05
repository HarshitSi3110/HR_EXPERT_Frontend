import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {
  constructor(private router: Router) {}
  goBack(){
    this.router.navigate(['/dashboard']);
  }
}
