import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestSheetComponent } from './quest-sheet.component';

describe('QuestSheetComponent', () => {
  let component: QuestSheetComponent;
  let fixture: ComponentFixture<QuestSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
