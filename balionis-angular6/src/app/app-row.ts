export class AppRow {
    id: string;
    fullName: string;

    fs: string;
    ss: string;

    hasChildren: boolean;
    children: AppRow[];

    constructor(id: string, fullName: string, hasChildren: boolean) {
        this.id = id;
        this.fullName = fullName;
        this.hasChildren = hasChildren;
        this.children = [];
        this.fs = 'Y';
        this.ss = 'N';
    }
}
