import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutPage } from './ajout.page';

describe('AjoutPage', () => {
  let component: AjoutPage;
  let fixture: ComponentFixture<AjoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
