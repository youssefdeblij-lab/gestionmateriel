import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaterielexistPage } from './materielexist.page';

describe('MaterielexistPage', () => {
  let component: MaterielexistPage;
  let fixture: ComponentFixture<MaterielexistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterielexistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaterielexistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
