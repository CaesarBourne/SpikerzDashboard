import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isCollapsed = false;
  isMobile = false;
  isSidebarOpenOnMobile = false;

  navItems = [
    { label: 'Dashboard', icon: '/assets/dashboard.svg', route: '/dashboard' },
    { label: 'Alerts', icon: '/assets/alert.svg', route: '/alerts' },
    { label: 'Blocks', icon: '/assets/block.svg', route: '/blocks' },
    { label: 'Asset Flow', icon: '/assets/asset.svg', route: '/asset-flow' },
    { label: 'Tools', icon: '/assets/tool.svg', route: '/tools' },
    { label: 'Reports', icon: '/assets/report.svg', route: '/reports' },
    // {
    //   label: 'Contextual Risk',
    //   icon: '/assets/risk.svg',
    //   route: '/contextual-risk',
    // },
    // { label: 'Settings', icon: '/assets/settings.svg', route: '/settings' },
  ];

  constructor() {
    this.detectMobile();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.detectMobile();
  }

  detectMobile() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      this.isMobile = true;
      // close sidebar when resizing to mobile
      this.isSidebarOpenOnMobile = false;
    } else {
      this.isMobile = false;
    }
  }

  toggleSidebar() {
    if (this.isMobile) {
      this.isSidebarOpenOnMobile = !this.isSidebarOpenOnMobile;
    } else {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  closeSidebarIfMobile() {
    if (this.isMobile) {
      this.isSidebarOpenOnMobile = false;
    }
  }

  get isOpen() {
    return this.isSidebarOpenOnMobile;
  }
}
