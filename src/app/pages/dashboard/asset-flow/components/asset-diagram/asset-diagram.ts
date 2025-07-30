import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asset-diagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asset-diagram.html',
  styleUrl: './asset-diagram.scss',
})
export class AssetDiagram {
  assets = [
    { name: 'Lorem P', description: 'Lorem Ipsum Dolor Sit Amet Consectetur.' },
    { name: 'Lorem S', description: 'Lorem Ipsum Dolor Sit Amet Consectetur.' },
    { name: 'Lorem T', description: 'Lorem Ipsum Dolor Sit Amet Consectetur.' },
  ];
}
