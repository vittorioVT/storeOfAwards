import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//components
import { AppComponent } from "./app.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { MainLayoutComponent } from "./shared/components/main-layout/main-layout.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomePageComponent } from "./home-page/home-page.component";
import { CatalogPageComponent } from "./catalog-page/catalog-page.component";

//services
import { AwardsService } from "./awards.service";

//ngx-bootstrap
import { CollapseModule } from "ngx-bootstrap/collapse";
import { ButtonsModule } from "ngx-bootstrap/buttons";

//material design
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainLayoutComponent,
    HomePageComponent,
    CatalogPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    //material design
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,

    //forms
    ReactiveFormsModule,
    FormsModule,

    //ngx-bootstrap
    CollapseModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [AwardsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
