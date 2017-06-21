import {Component, OnInit} from '@angular/core';
import {Group} from "../../models/group";

@Component({
    selector: 'app-group-details',
    templateUrl: './group-details.component.html',
    styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    group = new Group(423, "Group A");
    chartOptions = {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel + " uur";
                }
            }
        }
    }
}
