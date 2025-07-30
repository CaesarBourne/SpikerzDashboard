import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contextual-risk-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contextual-risk-table.html',
  styleUrl: './contextual-risk-table.scss',
})
export class ContextualRiskTable {
  branches = [
    {
      name: 'Loremipsumdolorsit',
      ip: '192.168.1.1',
      icon: 'assets/server-danger.svg',
    },
    {
      name: 'Loremipsumdolorsit002',
      ip: '192.168.1.2',
      icon: 'assets/server-danger.svg',
    },
  ];

  legendItems = [
    { icon: 'assets/legend-red.svg', label: 'Lorem', color: 'red' },
    { icon: 'assets/legend-yellow.svg', label: 'Lorem', color: 'orange' },
    { icon: 'assets/legend-green.svg', label: 'Lorem', color: 'green' },
  ];
}
