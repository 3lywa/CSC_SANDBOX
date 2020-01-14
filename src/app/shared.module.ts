import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSelectModule } from 'ngx-select-ex';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterTypePipe } from './pipes/filterType.pipe';
import { SubStringPipe } from './pipes/substring.pipe';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PapaParseModule } from 'ngx-papaparse';

export const modules = [
  CommonModule,
  FormsModule, ReactiveFormsModule,
  NgxPaginationModule,
  NgxSelectModule,
  ChartsModule,
  NgbModule,
  NgSelectModule,
  PapaParseModule
];

export const declarations = [PaginatorComponent, OrderByPipe, FilterPipe, FilterTypePipe, SubStringPipe];

@NgModule({
  imports: modules,
  exports: [...modules, ...declarations],
  declarations
})

export class SharedModule { }
