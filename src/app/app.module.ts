import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

// added for filtered-select
import { FilteredSelectModule } from "filtered-select";

import { AppComponent } from "./app.component";

@NgModule({
  // Added FilteredSelectModule
  imports: [BrowserModule, FormsModule, FilteredSelectModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
