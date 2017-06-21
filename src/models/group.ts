import {forEach} from "@angular/router/src/utils/collection";
export class Group {
    public name: String;
    public members: String[];
    public chartData: object;

    public constructor(name: String) {
        this.name = name;
        this.members = ['Thomas', 'Alex', 'Thijs', 'Casper'];
        let date = new Date().getDate();
        let month = new Date().getMonth();

        let dataset = {
            data: [],
            fill: false,
            borderColor: 'hsl(200, 80%, 50%)'
        };
        for (let i = date - 10; i <= date; i++) {
            dataset.data.push(Math.floor(Math.random() * 10));
        }

        let labels = [];
        for (let i = date - 10; i <= date; i++) {
            labels.push(i + '/' + month)
        }
        this.chartData = {
            labels: labels,
            datasets: [dataset]
        }
    }
}