// Angular
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../../shared.module';

// Manage Others
import { CodeComponent } from '../manage/code.component';
import { FacilityComponent } from '../manage/facility.component';
import { OffenderComponent } from '../manage/offender.component';

// extra
import { AboutComponent } from '../extra/about.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// Components Routing
import { BaseRoutingModule } from './base-routing.module';
// Translate module
import { TranslateModule } from '@ngx-translate/core';
// Services
import { PredefinedDateService, CacheService, UserService, DataService } from '../../services';
// Date picker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { MomentModule } from 'ngx-moment';
import { NGXSelectComponent } from '../../components/app-ngx-select';
import { RemoveModalComponent } from '../../components/app-remove-modal';

@NgModule({
  imports: [
    SharedModule,
    TranslateModule.forChild(),
    BaseRoutingModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MomentModule
  ],
  declarations: [
    AboutComponent,
    AboutComponent,
    CodeComponent,
    FacilityComponent,
    OffenderComponent,
    NGXSelectComponent,
    RemoveModalComponent
  ],
  providers: [UserService, DataService, PredefinedDateService, CacheService]
})
export class BaseModule { }
