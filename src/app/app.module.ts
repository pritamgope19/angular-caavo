import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { SharedService } from "./shared.service";
import { ModalComponent } from "./modal/modal.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  entryComponents: [ModalComponent],
  declarations: [
    AppComponent,
    HelloComponent,
    UserCardComponent,
    ModalComponent
  ],
  bootstrap: [AppComponent],
  providers: [SharedService]
})
export class AppModule {}
