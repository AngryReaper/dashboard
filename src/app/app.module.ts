import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DxTabPanelModule, DxTemplateModule, DxSwitchModule, DxCircularGaugeModule, DxDataGridModule, DxBulletModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { EtlService} from './etl.service'
import { ETLComponent } from './etl/etl.component';
import { ServersComponent } from './servers/servers.component';
import { ServicesComponent } from './services/services.component';
import { ServicesService } from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    ETLComponent,
    ServersComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
    DxTabPanelModule, 
    DxTemplateModule,
    DxSwitchModule,
    DxDataGridModule,
    DxCircularGaugeModule, 
    DxBulletModule,
  ],
  providers: [AppService, EtlService, ServerService, ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
