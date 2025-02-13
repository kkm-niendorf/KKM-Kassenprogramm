import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsellerdialogComponent } from './editsellerdialog.component';

describe('EditsellerdialogComponent', () => {
  let component: EditsellerdialogComponent;
  let fixture: ComponentFixture<EditsellerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditsellerdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditsellerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
