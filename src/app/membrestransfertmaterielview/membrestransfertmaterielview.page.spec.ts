import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembrestransfertmaterielviewPage } from './membrestransfertmaterielview.page';

describe('MembrestransfertmaterielviewPage', () => {
  let component: MembrestransfertmaterielviewPage;
  let fixture: ComponentFixture<MembrestransfertmaterielviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembrestransfertmaterielviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembrestransfertmaterielviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
