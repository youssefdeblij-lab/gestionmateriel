import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransfertMaterielPage } from './transfert-materiel.page';

describe('TransfertMaterielPage', () => {
  let component: TransfertMaterielPage;
  let fixture: ComponentFixture<TransfertMaterielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfertMaterielPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransfertMaterielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
