import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
import { GlobalNavBarComponent } from './global-nav-bar/global-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { EstimateComponent } from './estimate/estimate.component';
import { ConstructionOrderComponent } from './construction-order/construction-order.component';
import { ConstructionCaseComponent } from './construction-case/construction-case.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavBarComponent,
    HomeComponent,
    EstimateComponent,
    ConstructionOrderComponent,
    ConstructionCaseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
