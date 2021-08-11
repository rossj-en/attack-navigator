import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/map'

// material
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ColorPickerModule } from 'ngx-color-picker';
import { PopoverModule } from 'ngx-smart-popover';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataTableComponent } from './datatable/data-table.component';
import { TabsComponent } from './tabs/tabs.component';
import { HelpComponent } from './help/help.component';
import { ExporterComponent } from './exporter/exporter.component';
import { TechniqueCellComponent } from './matrix/technique-cell/technique-cell.component';
import { MatrixSideComponent } from './matrix/matrix-side/matrix-side.component';
import { MatrixFlatComponent } from './matrix//matrix-flat/matrix-flat.component';
import { MatrixMiniComponent } from './matrix//matrix-mini/matrix-mini.component';
import { TooltipComponent } from './matrix/technique-cell/tooltip/tooltip.component';
import { SearchAndMultiselectComponent } from './search-and-multiselect/search-and-multiselect.component';
import { ContextmenuComponent } from './matrix/technique-cell/contextmenu/contextmenu.component';
import { TacticCellComponent } from './matrix/tactic-cell/tactic-cell.component';
import { VersionUpgradeComponent } from './version-upgrade/version-upgrade.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";

import { MarkdownModule } from "ngx-markdown";
import { LayerInformationComponent } from './layer-information/layer-information.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { SearchPopoverNotificationComponent } from './search-and-multiselect/search-popover-notification/search-popover-notification.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    TabsComponent,
    HelpComponent,
    ExporterComponent,
    TechniqueCellComponent,
    MatrixSideComponent,
    MatrixFlatComponent,
    MatrixMiniComponent,
    TooltipComponent,
    SearchAndMultiselectComponent,
    ContextmenuComponent,
    TacticCellComponent,
    VersionUpgradeComponent,
    SidebarComponent,
    LayerInformationComponent,
    ChangelogComponent,
    SearchPopoverNotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatMenuModule,
    MatExpansionModule,
    MatDialogModule,
    ColorPickerModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MarkdownModule.forRoot(),
    PopoverModule
  ],
  exports: [
      MatSelectModule,
      MatInputModule,
      MatButtonModule,
      MatTooltipModule,
      MatMenuModule,
      MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ VersionUpgradeComponent, HelpComponent, ExporterComponent ]
})
export class AppModule { }
