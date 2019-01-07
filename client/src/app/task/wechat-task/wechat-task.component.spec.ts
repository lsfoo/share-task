import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WechatTaskComponent } from './wechat-task.component';

describe('WechatTaskComponent', () => {
  let component: WechatTaskComponent;
  let fixture: ComponentFixture<WechatTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WechatTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WechatTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
