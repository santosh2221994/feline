import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-surrogates',
  templateUrl: './surrogates.component.html',
  styleUrls: ['./surrogates.component.scss'],
})
export class SurrogatesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scroll(0, 0)
  }
}
