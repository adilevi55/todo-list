export class Task {
    constructor(
        public title?: string,
        public description?: string,
        public date?: Date,
        public completed?:boolean
    ) { }
}