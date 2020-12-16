import { Component, OnInit } from '@angular/core'
import { TweenLite, TimelineLite, Back } from 'gsap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'felineSpirits'
  ngOnInit() {
    var cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: document.querySelector('.cursor-dot'),
      $outline: document.querySelector('.cursor-dot-outline'),

      init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth
        this.outlineSize = this.$outline.offsetWidth

        this.setupEventListeners()
        this.animateDotOutline()
      },

      //     updateCursor: function(e) {
      //         var self = this;

      //         console.log(e)

      //         // Show the cursor
      //         self.cursorVisible = true;
      //         self.toggleCursorVisibility();

      //         // Position the dot
      //         self.endX = e.pageX;
      //         self.endY = e.pageY;
      //         self.$dot.style.top = self.endY + 'px';
      //         self.$dot.style.left = self.endX + 'px';
      //     },

      setupEventListeners: function () {
        var self = this

        // Anchor hovering
        document.querySelectorAll('a').forEach(function (el) {
          el.addEventListener('mouseover', function () {
            self.cursorEnlarged = true
            self.toggleCursorSize()
          })
          el.addEventListener('mouseout', function () {
            self.cursorEnlarged = false
            self.toggleCursorSize()
          })
        })
        document.querySelectorAll('button').forEach(function (el) {
          el.addEventListener('mouseover', function () {
            self.cursorEnlarged = true
            self.toggleCursorSize()
          })
          el.addEventListener('mouseout', function () {
            self.cursorEnlarged = false
            self.toggleCursorSize()
          })
        })
        document.querySelectorAll('input').forEach(function (el) {
          el.addEventListener('mouseover', function () {
            self.cursorEnlarged = true
            self.toggleCursorSize()
          })
          el.addEventListener('mouseout', function () {
            self.cursorEnlarged = false
            self.toggleCursorSize()
          })
        })

        // Click events
        document.addEventListener('mousedown', function () {
          self.cursorEnlarged = true
          self.toggleCursorSize()
        })
        document.addEventListener('mouseup', function () {
          self.cursorEnlarged = false
          self.toggleCursorSize()
        })

        document.addEventListener('mousemove', function (e) {
          // Show the cursor
          self.cursorVisible = true
          self.toggleCursorVisibility()

          // Position the dot
          self.endX = e.pageX
          self.endY = e.pageY
          self.$dot.style.top = self.endY + 'px'
          self.$dot.style.left = self.endX + 'px'
        })

        // Hide/show cursor
        document.addEventListener('mouseenter', function (e) {
          self.cursorVisible = true
          self.toggleCursorVisibility()
          self.$dot.style.opacity = 1
          self.$outline.style.opacity = 1
        })

        document.addEventListener('mouseleave', function (e) {
          self.cursorVisible = true
          self.toggleCursorVisibility()
          self.$dot.style.opacity = 0
          self.$outline.style.opacity = 0
        })
      },

      animateDotOutline: function () {
        var self = this

        self._x += (self.endX - self._x) / self.delay
        self._y += (self.endY - self._y) / self.delay
        self.$outline.style.top = self._y + 'px'
        self.$outline.style.left = self._x + 'px'

        requestAnimationFrame(this.animateDotOutline.bind(self))
      },

      toggleCursorSize: function () {
        var self = this

        if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)'
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)'
        } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1)'
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)'
        }
      },

      toggleCursorVisibility: function () {
        var self = this

        if (self.cursorVisible) {
          self.$dot.style.opacity = 1
          self.$outline.style.opacity = 1
        } else {
          self.$dot.style.opacity = 0
          self.$outline.style.opacity = 0
        }
      },
    }

    cursor.init()
    this.smoothscroll()
  }
  smoothscroll() {
    var html = document.documentElement
    var body = document.body

    var scroller = {
      target: document.querySelector('#scroll-container'),
      ease: 0.05, // <= scroll speed
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0,
    }

    var requestId = null

    TweenLite.set(scroller.target, {
      rotation: 0.01,
      force3D: true,
    })

    window.addEventListener('load', onLoad)

    function onLoad() {
      updateScroller()
      window.focus()
      window.addEventListener('resize', onResize)
      document.addEventListener('scroll', onScroll)
    }

    function updateScroller() {
      var resized = scroller.resizeRequest > 0

      if (resized) {
        var height = scroller.target.clientHeight
        body.style.height = height + 'px'
        scroller.resizeRequest = 0
      }

      var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0

      scroller.endY = scrollY
      scroller.y += (scrollY - scroller.y) * scroller.ease

      if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY
        scroller.scrollRequest = 0
      }

      TweenLite.set(scroller.target, {
        y: -scroller.y,
      })

      requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null
    }

    function onScroll() {
      scroller.scrollRequest++
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller)
      }
    }

    function onResize() {
      scroller.resizeRequest++
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller)
      }
    }
  }
}
