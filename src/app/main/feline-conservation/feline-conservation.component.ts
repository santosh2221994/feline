import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-feline-conservation',
  templateUrl: './feline-conservation.component.html',
  styleUrls: ['./feline-conservation.component.scss'],
})
export class FelineConservationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scroll(0, 0)
  }
}
