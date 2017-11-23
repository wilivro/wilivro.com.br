import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';

import { AgmCoreModule } from '@agm/core';
import { OwlModule } from 'ngx-owl-carousel';
import { FooterComponent } from './footer/footer.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    OwlModule,
    Ng2PageScrollModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_IqTZfHLK-i9L-450YY60qPSxG5GwHBU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
