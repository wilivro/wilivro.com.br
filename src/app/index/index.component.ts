import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Element } from '@angular/compiler';
declare var $: any;
var on = true;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('Wilivro');
    this.resultados();
  }

  contador(el: any, inicial: number, total: number, speed: number, jump: number) {
    console.log(el, inicial, total, speed)
    setInterval(function () {
      if (inicial <= total) {
        el.innerHTML = inicial;
      }
      inicial = inicial + jump;
    }, speed);

  }



  private resultados() {
    var _this = this;
    $(document).scroll(function () {

      if (!on) return;

      if (window.scrollY > $('#resultados').offset().top - window.innerHeight / 2) {

        $('span.cont').map(function () {
          var inicial = $(this).attr('data-inicial');
          var total = $(this).attr('data-total');
          var speed = $(this).attr('data-speed');
          var jump = $(this).attr('data-jump');

          _this.contador(this, parseInt(inicial), parseInt(total), parseInt(speed), parseInt(jump));
        })

        on = false;

      }


    })
  }




}
