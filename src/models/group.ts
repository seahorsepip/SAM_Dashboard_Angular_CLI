import {User} from "./user";
export class Group {
    public id: number;
    public name: string;
    public members: User[];
    public chartData: object;
    public increase: number;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.members = [
            new User(23, 'Thomas', 'Web-frontend dashboard'),
            new User(34, 'Alex', 'Backend/database'),
            new User(76, 'Thijs', 'Android applicatie'),
            new User(45, 'Casper', 'Backend'),
            new User(65, 'Hello World!', 'Bot')
        ];
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

    public getMemberNames(): string {
        let names = [];
        for(let i = 0; i < this.members.length; i++) {
            names.push(this.members[i].name);
        }
        return names.join(", ");
    }
}