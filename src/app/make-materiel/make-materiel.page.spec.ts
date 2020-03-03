import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeMaterielPage } from './make-materiel.page';

describe('MakeMaterielPage', () => {
  let component: MakeMaterielPage;
  let fixture: ComponentFixture<MakeMaterielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeMaterielPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeMaterielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
