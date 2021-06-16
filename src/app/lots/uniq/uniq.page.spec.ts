import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UniqPage } from './uniq.page';

describe('UniqPage', () => {
  let component: UniqPage;
  let fixture: ComponentFixture<UniqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UniqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
