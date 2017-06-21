export class User {
    public id: number;
    public name: string;
    public role: string;
    public chartData: object;
    public increase: number;

    public constructor(id: number, name: string, role: string) {
        this.id = id;
        this.name = name;
        this.role = role;
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