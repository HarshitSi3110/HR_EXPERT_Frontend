import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from '../../../shared/components/header/header';
import {  NgIf } from '@angular/common';
import { Footer } from '../../../shared/components/footer/footer';
import { Sidesidenav } from '../../../shared/components/sidesidenav/sidesidenav';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet ,NgIf ,RouterModule, Footer ,Header ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayoutComponent {
isSidebarCollapsed = false;

toggleSidebar() {
  this.isSidebarCollapsed = !this.isSidebarCollapsed;
}
 isProfileOpen = false;

  toggleProfile(event: MouseEvent) {
    event.stopPropagation(); // 🔥 IMPORTANT
    this.isProfileOpen = !this.isProfileOpen;
  }

  closeProfile() {
    this.isProfileOpen = false;
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.closeProfile();
  }
}
