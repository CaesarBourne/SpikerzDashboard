import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-risk-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './risk-summary.html',
  styleUrls: ['./risk-summary.scss'],
})
export class RiskSummary {
  risks = [
    { label: 'Critical', count: 2, colorClass: 'critical' },
    { label: 'High', count: 0, colorClass: 'high' },
    { label: 'Medium', count: 0, colorClass: 'medium' },
    { label: 'Low', count: 0, colorClass: 'low' },
  ];

  get totalCritical(): number {
    return this.risks.find((r) => r.label === 'Critical')?.count || 0;
  }
}
