import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterArticleComponent } from './ajouter-article.component';

describe('AjouterArticleComponent', () => {
  let component: AjouterArticleComponent;
  let fixture: ComponentFixture<AjouterArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
