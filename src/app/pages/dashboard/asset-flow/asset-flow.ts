import { Component } from '@angular/core';
import { DescriptionPanel } from './components/description-panel/description-panel';
import { MetadataTable } from './components/metadata-table/metadata-table';
import { AssetDiagram } from './components/asset-diagram/asset-diagram';
import { ContextualRiskTable } from './components/contextual-risk-table/contextual-risk-table';
import { RiskSummary } from './components/risk-summary/risk-summary';

@Component({
  selector: 'app-asset-flow',
  standalone: true,
  imports: [
    DescriptionPanel,
    MetadataTable,
    AssetDiagram,
    ContextualRiskTable,
    RiskSummary,
  ],
  templateUrl: './asset-flow.html',
  styleUrl: './asset-flow.scss',
})
export class AssetFlow {}
