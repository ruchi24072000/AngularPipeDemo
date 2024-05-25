import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeinComponentDemoComponent } from './pipein-component-demo.component';

describe('PipeinComponentDemoComponent', () => {
  let component: PipeinComponentDemoComponent;
  let fixture: ComponentFixture<PipeinComponentDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeinComponentDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeinComponentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
