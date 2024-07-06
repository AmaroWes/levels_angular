import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunishSheetComponent } from './punish-sheet.component';

describe('PunishSheetComponent', () => {
  let component: PunishSheetComponent;
  let fixture: ComponentFixture<PunishSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunishSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunishSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
