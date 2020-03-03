import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandeMaterielPage } from './demande-materiel.page';

describe('DemandeMaterielPage', () => {
  let component: DemandeMaterielPage;
  let fixture: ComponentFixture<DemandeMaterielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeMaterielPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandeMaterielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
