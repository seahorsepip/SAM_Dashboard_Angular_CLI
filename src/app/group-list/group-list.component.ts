import {Component, OnInit} from '@angular/core';
import {Group} from "../../models/group";

@Component({
    selector: 'app-group-list',
    templateUrl: './group-list.component.html',
    styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }

    groups = [
        new Group(11, 'Groep A'),
        new Group(65, 'Groep B'),
        new Group(23, 'Groep C'),
        new Group(345, 'Groep D'),
        new Group(34, 'Groep E'),
        new Group(214, ',Groep F'),
    ];
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

