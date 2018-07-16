import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { ServerService } from '../server.service';
import { SdService } from '../sd.service';
import { Server } from '../Server'
import { SD } from '../SD';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less'],
  providers: [ServerService]
})
export class ServersComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

  serversSource: DataSource;
  server: Server[];
  sd: SD[];
  seed: Boolean;
  update: Number;

  constructor(private service: ServerService, private sdService: SdService) {
    this.serversSource = service.getServers();
  }

  customizeTooltip = (pointsInfo) => {
    return { text: parseInt(pointsInfo.originalValue) + "%" };
  }

  async updateItems(item: Server) {
    if (item.Status == "Offline") {
      item.RAM = 0;
      item.CPU = 0;
      item.HDD1 = 0;
      item.HDD2 = 0;
    } else {
      item.RAM = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
      item.CPU = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
      item.HDD1 = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
      item.HDD2 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    }
    await this.service.updateItem(item);
  }

  async updater(collection: Server[]) {
    for (let item of collection) {
      await this.updateItems(item);
    }
  }

  seedServices() {
    if (this.seed == false) {
      this.seed = true;
      for (let server of this.server) {
        for (let locations of this.sd) {
          for (let location of locations.serviceLocations) {
            if (location == server.Name) {
              server.Services.push(locations.serviceName);
            }
          }
        }
      }
    }
  }

  clearServices() {
    if (this.seed == false) {
      for (let server of this.server) {
        server.Services.length = 0;
      }
    }
  }

  contentReady = (e) => {
    this.updater(this.server);
    this.clearServices();
    this.seedServices();
    setTimeout(() => this.dataGrid.instance.refresh(), this.update);
  };

  ngOnInit() {
    this.service.getServerInfo().subscribe((data: Server[]) => this.server = data);
    this.sdService.getSD().subscribe((sdData: SD[]) => this.sd = sdData);
    this.seed = false;
    this.update = 10000;
  }

}
