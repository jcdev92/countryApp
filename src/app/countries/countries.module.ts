import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { SharedModule } from "../shared/shared.module";
import { TableComponent } from './components/table/table.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    ByCountryPageComponent,
    ByCapitalPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    TableComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
]
})
export class CountriesModule { }
