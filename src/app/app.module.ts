import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { CustomeComponentComponent } from './custome-component/custome-component.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MyserviceService } from './myservice.service';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RoutingDisplayComponent } from './routing-display/routing-display.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { AddListComponent } from './add-list/add-list.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { CountryListComponent } from './country-list/country-list.component';
import { MatTableModule, MatSortModule } from '@angular/material';
import { FilterPipe } from './filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { StockStatusComponent } from './stock-status/stock-status.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    DoctorsComponent,
    CustomeComponentComponent,
    TeamInfoComponent,
    RoutingDisplayComponent,
    ListPatientComponent,
    AddListComponent,
    FetchDataComponent,
    AppFooterComponent,
    CountryListComponent,
    FilterPipe,
    CrudOperationComponent,
    StockStatusComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'doctorList', component: DoctorsComponent},
      {path: 'patientList', component: DoctorsComponent},
      {path: 'addList', component: AddListComponent},
      {path: 'fetchData', component: FetchDataComponent},
      {path: 'countryData', component: CountryListComponent},
      {path: '', component: RoutingDisplayComponent}
    ]),
    BrowserAnimationsModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
