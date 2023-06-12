import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private router: Router){

  }
  @Input() isSidebarOpen!: boolean;

  redirectTo(routePath: string): void {
    this.router.navigateByUrl(routePath);
  }
  
}
