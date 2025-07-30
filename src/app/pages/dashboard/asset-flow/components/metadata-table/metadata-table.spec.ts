import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataTable } from './metadata-table';

describe('MetadataTable', () => {
  let component: MetadataTable;
  let fixture: ComponentFixture<MetadataTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetadataTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetadataTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
