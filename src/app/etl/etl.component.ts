import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { EtlService } from '../etl.service';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'app-etl',
    templateUrl: './etl.component.html',
    styleUrls: ['./etl.component.less'],
    providers: [EtlService]
})
export class ETLComponent implements OnInit {

    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

    dataSource: DataSource;

    constructor(private service: EtlService) {
        this.dataSource = service.getDataSource();
    }

    collapsed = false;
    contentReady = (e) => {

    };

    switchIt(event) {
        let upd = this.dataGrid.instance.getSelectedRowKeys()[0];
        upd.Status = event.value;
        if (event.value == true) {
            let dateFormat = require('dateformat') 
            let now = new Date();
            upd.StartDate = dateFormat(now, "yyyy-mm-dd HH:MM:ss");
        }
        this.service.updateEtl(upd);
    }

    customizeTooltip = (pointsInfo) => {
        return { text: parseInt(pointsInfo.originalValue) + "%" };
    }

    ngOnInit() {
    }

}
