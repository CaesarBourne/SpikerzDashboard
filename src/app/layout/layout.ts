// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-layout',
//   imports: [],
//   templateUrl: './layout.html',
//   styleUrl: './layout.scss'
// })
// export class Layout {

// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, Sidebar], // ✅ THIS is what fixes the error
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
