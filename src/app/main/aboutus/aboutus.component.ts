import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scroll(0, 0)
  }
}
