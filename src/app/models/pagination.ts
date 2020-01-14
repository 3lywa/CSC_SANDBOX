export class Page {
    public current: number;
    public previous: number;
    public next: number;
    public last: number;

    constructor() {
        this.current = 0;
        this.previous = 0;
        this.next = 0;
        this.last = 0;
    }
}

export class Pagination {
    public results: number;
    public size: number;
    public pages: Page;

    constructor() {
        this.results = 0;
        this.size = 0;
        this.pages = new Page();
    }
}
