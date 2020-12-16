import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  age: number
  ngOnInit(): void {}
  gotoHome() {
    var d = new Date()
    var n = d.getFullYear()
    console.log(n - this.age)
    if (n - this.age > 18) this.router.navigate(['home'])
    else {
      alert("Sorry being a minor you're not allowed")
    }
  }
}
