import { Component, OnInit } from '@angular/core'
// import * as $ from 'jquery'
@Component({
  selector: 'app-high-stakes',
  templateUrl: './high-stakes.component.html',
  styleUrls: ['./high-stakes.component.scss'],
})
export class HighStakesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scroll(0, 0)
  }
  readm: boolean = false
}
