import MediaEntry from "./MediaEntry";

class Database {
    private readonly entries: MediaEntry[];

    constructor() {
        this.entries = new Array<MediaEntry>();
    }

    Add(entry: MediaEntry) {
        this.entries.push(entry);
    }

    get Entries(): MediaEntry[] {
        return this.entries;
    }
}

export default Database;