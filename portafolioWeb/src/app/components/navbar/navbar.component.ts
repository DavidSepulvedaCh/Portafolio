import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(event: Event): void {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!(menu && menu.contains(event.target as Node)) && !(menuToggle && menuToggle.contains(event.target as Node))) {
      this.isMenuOpen = false;
    }
  }

  constructor() {
    document.addEventListener('click', (event) => {
      this.closeMenu(event);
    });
  }
}
