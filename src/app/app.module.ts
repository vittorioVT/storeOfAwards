import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BootstrapModule } from "./bootstrap.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialAngularModule } from "./materialAngular.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    MaterialAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
