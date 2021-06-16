import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbEditorComponent } from './rgb-editor.component';

describe('RgbEditorComponent', () => {
  let component: RgbEditorComponent;
  let fixture: ComponentFixture<RgbEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgbEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
