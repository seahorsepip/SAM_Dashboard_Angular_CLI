import {forEach} from "@angular/router/src/utils/collection";
export class Group {
    public id: number;
    public name: String;
    public members: String[];
    public chartData: object;
    public increase: number;

    public constructor(id: number, name: String) {
        this.id = id;
        this.name = name;
        this.members = ['Thomas', 'Alex', 'Thijs', 'Casper'];
        let date = new Date().getDate();
        let month = new Date().getMonth();

        let dataset = {
            data: [],
            fill: false,
            borderColor: 'hsl(200, 80%, 50%)'
        };
        for (let i = date - 7; i <= date; i++) {
            dataset.data.push(Math.floor(Math.random() * 10));
        }

        let labels = [];
        for (let i = date - 7; i <= date; i++) {
            labels.push(i + '/' + month)
        }
        this.chartData = {
            labels: labels,
            datasets: [dataset]
        }
        this.increase = Math.floor(Math.random() * 30);
    }
}