import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { FooterComponent } from './footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule }  from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//  import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

import { LoginServeiceService } from './share/login-serveice.service';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './share/registration.service';
import { NotificationService } from './share/notification.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';

import { AuthGardService } from './service/auth-gard.service';
import {} from './java-service.service';
import { BooksellComponent } from './booksell/booksell.component';
import { BookreqAddressComponent } from './bookreq-address/bookreq-address.component';
import { BookSellSearchComponent } from './book-sell-search/book-sell-search.component';
import { DeliveryRequestComponent } from './delivery-request/delivery-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainsliderComponent,
    ProductdisplayComponent,
    FooterComponent,
    CheckoutComponent,
    LoginComponent,
    RegistrationComponent,
    BooksellComponent,
    BookreqAddressComponent,
    BookSellSearchComponent,
    DeliveryRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [LoginServeiceService,RegistrationService,NotificationService,AuthGardService,
    {    
      provide:HTTP_INTERCEPTORS,useClass:BasicAuthHttpInterceptorService,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
