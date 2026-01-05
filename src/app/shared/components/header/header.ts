import { Component, EventEmitter, Output } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared.imports';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: SHARED_IMPORTS,
})
export class Header {
  @Output() menuClick = new EventEmitter<void>();

  user: any = null;
  isMenuOpen = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
isAuthPage = false;

ngOnInit() {
  this.auth.user$.subscribe(user => {
    this.user = user;
  });

  this.router.events.subscribe(() => {
    this.isAuthPage = this.router.url.startsWith('/auth');
  });}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.auth.clearUser();
    this.router.navigate(['/auth/login']);
  }
}
