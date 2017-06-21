import {Component} from '@angular/core';
import {Group} from "../models/group";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    groups = [
        new Group('Groep A'),
        new Group('Groep B'),
        new Group('Groep C'),
        new Group('Groep D'),
        new Group('Groep E'),
        new Group('Groep F'),
    ];
    chartOptions = {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.yLabel + " uur";
                }
            }
        }
    }
}
