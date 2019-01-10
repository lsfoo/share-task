import { Component, OnInit, ViewChild } from '@angular/core'

import { TabsetComponent } from 'ngx-bootstrap'

import { BsLocaleService, BsDatepickerConfig } from 'ngx-bootstrap/datepicker'

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  constructor(private localeService: BsLocaleService) {
    var maxd = new Date()
    this.bsConfig = Object.assign(
      {},
      {
        maxDate: maxd,
        dateInputFormat: 'YYYY-MM-DD',
        showWeekNumbers: true
      }
    )
    this.localeService.use(this.locale)
  }
  bsConfig: Partial<BsDatepickerConfig>
  locale = 'zh-cn'
  options: any = {
    startTime: new Date()
  }
  @ViewChild('staticTabs') staticTabs: TabsetComponent
  selectTab(tabId: number) {
    console.log(this.staticTabs)
    this.staticTabs.tabs[tabId].active = true
  }
  ngOnInit() {}
}
