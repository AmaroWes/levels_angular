import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunishCreateComponent } from './punish-create.component';

describe('PunishCreateComponent', () => {
  let component: PunishCreateComponent;
  let fixture: ComponentFixture<PunishCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunishCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunishCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
