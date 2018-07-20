import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //Automatically collapsing Bootstrap navbar after navigation in a single page application
    $('.navbar-collapse a:not(.dropdown-toggle)').click(function () {
      $(this).parents('.navbar-collapse').collapse('hide');
    });

    this.buttomTop();
  }


  private buttomTop() {

    $(document).scroll(function () {

      if (window.scrollY > 500) {
        $('#back').removeClass('d-none');
      } else {
        $('#back').addClass('d-none');
      }

    })
  }

}
