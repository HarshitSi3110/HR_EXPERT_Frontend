import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  constructor(private router: Router) {}
  goBack(){
    this.router.navigate(['/dashboard']);
  }
}
