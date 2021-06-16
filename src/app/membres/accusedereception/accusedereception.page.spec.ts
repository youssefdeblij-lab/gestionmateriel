import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccusedereceptionPage } from './accusedereception.page';

describe('AccusedereceptionPage', () => {
  let component: AccusedereceptionPage;
  let fixture: ComponentFixture<AccusedereceptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccusedereceptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccusedereceptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
