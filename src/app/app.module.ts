import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';

RouterModule.forRoot([
  { path: '', redirectTo: '#top', pathMatch: 'full' },
]);
@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
