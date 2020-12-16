import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import * as $ from 'jquery'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // ;(function ($) {
    'use strict'

    // $(function () {
    //   var header = $('.start-style')
    //   $(window).scroll(function () {
    //     var scroll = $(window).scrollTop()

    //     if (scroll >= 30) {
    //       header.removeClass('start-style').addClass('scroll-on')
    //     } else {
    //       header.removeClass('scroll-on').addClass('start-style')
    //     }
    //   })
    // })

    //Animation

    $(document).ready(function () {
      $('body.hero-anime').removeClass('hero-anime')
    })

    //Menu On Hover

    $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
      if ($(window).width() > 750) {
        var _d = $(e.target).closest('.nav-item')
        _d.addClass('show')
        setTimeout(function () {
          _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show')
        }, 1)
      }
    })

    // })(jQuery)
  }
  home() {
    console.log(this.router.url)
    if (this.router.url != '/') {
      this.router.navigate(['/home'])
    }
  }
  about() {
    console.log(this.router.url)
    if (this.router.url != '/') {
      this.router.navigate(['/home/about'])
    }
  }
  story() {
    console.log(this.router.url)
    if (this.router.url != '/') {
      this.router.navigate(['/home/our-story'])
    }
  }
  contact() {
    console.log(this.router.url)
    if (this.router.url != '/') {
      window.scroll(0, document.body.scrollHeight)
    }
  }
}
