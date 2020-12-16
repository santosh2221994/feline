import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-off-limits',
  templateUrl: './off-limits.component.html',
  styleUrls: ['./off-limits.component.scss'],
})
export class OffLimitsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scroll(0, 0)
  }
  readm: boolean = false
}
