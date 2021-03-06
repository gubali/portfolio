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
import { UdemytestComponent } from './udemytest/udemytest.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { Parent2ChildComponent } from './parent2-child/parent2-child.component';
import { Child2ParentComponent } from './child2-parent/child2-parent.component';
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
    ChildComponent,
    UdemytestComponent,
    FavouriteComponent,
    Parent2ChildComponent,
    Child2ParentComponent
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
      {path: 'UdemyTest', component: UdemytestComponent},
      {path: 'parent2child', component: Parent2ChildComponent},
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
