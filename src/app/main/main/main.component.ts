import { Component, OnInit } from '@angular/core'
import * as $ from 'jquery'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}
  src: string
  ngOnInit(): void {
    this.src = 'https://res.cloudinary.com/skg-projects/video/upload/v1604773801/final_video_2_y50kro.mp4'
    $(document).ready(function () {
      //window and animation items
      var animation_elements = $.find('.animation-element')
      var web_window = $(window)

      //check to see if any animation containers are currently in view
      function check_if_in_view() {
        //get current window information
        let window_height = web_window.height()
        let window_top_position = web_window.scrollTop()
        let window_bottom_position = window_top_position + window_height

        //iterate through elements to see if its in view
        $.each(animation_elements, function () {
          //get the element sinformation
          let element = $(this)
          let element_height = $(element).outerHeight()
          let element_top_position = $(element).offset().top
          let element_bottom_position = element_top_position + element_height

          //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
          if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
            // console.log('in')
            $('.slide-now').addClass('slide-left')
            $('.slide-now1').addClass('slide-right')
            $('.slide-now2').addClass('slide-bottom')
            $('.slide-now3').addClass('slide-top')
          } else {
            // console.log('out')
            $('.slide-now').removeClass('slide-left')
            $('.slide-now1').removeClass('slide-right')
            $('.slide-now2').removeClass('slide-bottom')
            $('.slide-now3').removeClass('slide-top')
          }
        })
      }
      //window and animation items
      var animation_elements1 = $.find('.animation-element1')
      var web_window1 = $(window)

      //check to see if any animation containers are currently in view
      function check_if_in_view1() {
        //get current window information
        let window_height = web_window1.height()
        let window_top_position = web_window1.scrollTop()
        let window_bottom_position = window_top_position + window_height

        //iterate through elements to see if its in view
        $.each(animation_elements1, function () {
          //get the element sinformation
          let element = $(this)
          let element_height = $(element).outerHeight()
          let element_top_position = $(element).offset().top
          let element_bottom_position = element_top_position + element_height

          //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
          if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
            console.log('in')
            $('.slideNow').addClass('slide-left')
            $('.slideNow1').addClass('slide-right')
            $('.slideNow2').addClass('slide-bottom')
            $('.slideNow3').addClass('slide-top')
          } else {
            console.log('out')
            $('.slideNow').removeClass('slide-left')
            $('.slideNow1').removeClass('slide-right')
            $('.slideNow2').removeClass('slide-bottom')
            $('.slideNow3').removeClass('slide-top')
          }
        })
      }
      //on or scroll, detect elements in view
      $(window).on('scroll resize', function () {
        check_if_in_view()
        check_if_in_view1()
      })
      //trigger our scroll event on initial load
      $(window).trigger('scroll')
    })
    this.scroll()
  }
  scroll() {}
  opening() {}
}
