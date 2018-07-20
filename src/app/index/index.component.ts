import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var $: any;

var on = true;
var PATH = "assets/img/home/clientes/";
var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class IndexComponent implements OnInit {
  iconUrl?: string;

  lat: number = -22.532491;
  lng: number = -43.209290;

  scrollwheel: boolean = false;
  zoom: number = 16;

  styles: any = [
    {
      elementType: "geometry",
      stylers: [{ color: "#1d2c4d" }]
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#8ec3b9" }]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1a3646" }]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [{ color: "#4b6878" }]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#64779e" }]
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [{ color: "#4b6878" }]
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [{ color: "#334e87" }]
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [{ color: "#023e58" }]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#283d6a" }]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6f9ba5" }]
    },
    {
      featureType: "poi",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1d2c4d" }]
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{ color: "#023e58" }]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#3C7680" }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#304a7d" }]
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#98a5be" }]
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1d2c4d" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#2c6675" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#255763" }]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#b0d5ce" }]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#023e58" }]
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [{ color: "#98a5be" }]
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1d2c4d" }]
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [{ color: "#283d6a" }]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{ color: "#3a4762" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#0e1626" }]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#4e6d70" }]
    }
  ]

  images = [
    { src: PATH + "logo_assis.png", href: 'http://www.facbrasil.org.br/' },
    { src: PATH + "logo_ceara.png", href: 'http://www.stds.ce.gov.br/' },
    { src: PATH + "logo_piaui.png", href: 'http://www.seduc.pi.gov.br/' },
    { src: PATH + "logo_pro-cidadania.png", href: 'http://procidadania.org.br/web/' },
    { src: PATH + "logo-ensinart.png", href: 'http://ensinarteditora.com.br/' },
  ];


  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.iconUrl = 'assets/img/icons/markerRJ.svg';
    this.setTitle('Wilivro');
    this.resultados();
    this.habilitarFormSubmit();
  }

  ngAfterViewInit() {
    var qtdClienteView: number = 5;

    if (isMobile) {
      qtdClienteView = 2;
    }

    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: qtdClienteView,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    });
  }

  ngClickRN(el) {
    this.ngToggle(el);
    this.iconUrl = 'assets/img/icons/markerRN.svg';
    this.lat = -5.817215;
    this.lng = -35.213243;
  }

  ngClickRJ(el) {
    this.ngToggle(el);
    this.iconUrl = 'assets/img/icons/markerRJ.svg';
    this.lat = -22.532491;
    this.lng = -43.209290;
  }

  ngToggle(el) {
    $('.unit').toggleClass('active');
  }

  habilitarFormSubmit() {
    var $contactForm = $('#contato');

    $contactForm.submit(function (e) {
      e.preventDefault();

      $.ajax({
        url: 'https://formspree.io/wilivro@wilivro.com.br',
        type: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function () {
          $contactForm.find('#msgForm').html('<div class="alert alert-info">Enviando mensagem</div>');
          $contactForm[0].reset();

        },
        success: function (data) {
          $contactForm.find('.alert-info').html('<div class="alert alert-success">Mensagem enviada!</div>').removeClass('alert alert-info');
        },
        error: function (err) {
          console.log(err)
          $contactForm.find('.alert-info').html('<div class="alert alert-danger">Ocorreu um erro ao enviar sua mensagem, tente novamente mais tarde.</div>').removeClass('alert alert-info');
        }
      });
    })
  }

  contador(ele, count_to, timer, i) {

    if (i > count_to) {
      return;
    }
    ele.text(i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
    i += 1;
    /*console.log(timer);*/
    setTimeout(function () { this.contador(ele, count_to, timer, i) }, timer);

  }

  private resultados() {

    if (isMobile) {
      $('span.cont').map(function () {
        var total = $(this).attr('data-total');
        $(this).html(total);
      })
      return;
    }

    var _this = this;
    $(document).scroll(function () {

      if (window.scrollY > $('#sobre').offset().top - window.innerHeight / 2) {
        console.log('sobre')
      }

      if (!on) return;


      if (window.scrollY > $('#resultado').offset().top - window.innerHeight / 2) {

        const tempo_intervalo = 5; //ms -> define a velocidade da animação
        const tempo = 2000; //ms -> define o tempo total da animaçao

        $('span.cont').each(function () {
          let count_to = parseInt($(this).data('countTo'));
          let intervalos = tempo / tempo_intervalo; //quantos passos de animação tem
          let incremento = count_to / intervalos; //quanto cada contador deve aumentar
          let valor = 0;
          let el = $(this);

          let timer = setInterval(function () {
            if (valor >= count_to) { //se já contou tudo tem de parar o timer
              valor = count_to;
              clearInterval(timer);
            }

            let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
            el.text(texto);
            valor += incremento;
          }, tempo_intervalo);
        })

        on = false;

      }

    })
  }

}
