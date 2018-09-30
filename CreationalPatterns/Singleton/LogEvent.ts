class LogEvent {
    private message!: string;
    private date!: Date;

    constructor(message: string) {
        this.Message = message;
        this.Date = new Date();
    }

    get Message(): string {
        return this.message;
    }

    set Message(message: string) {
        this.message = message;
    }

    get Date(): Date {
        return this.date;
    }

    set Date(date: Date) {
        this.date = date;
    }
}

export default LogEvent;