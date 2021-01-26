import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { ButtonsModule } from "ngx-bootstrap/buttons";

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot()
  ],
  exports: [],
  providers: []
})
export class BootstrapModule {}
