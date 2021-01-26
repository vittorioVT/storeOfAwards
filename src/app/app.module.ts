import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BootstrapModule } from "./bootstrap.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BootstrapModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
