import LogEvent from "./LogEvent";

class Logger {
    private static loggerInstance: Logger;
    private readonly events: Array<LogEvent> = new Array<LogEvent>();

    private constructor() {}

    public static GetInstance(): Logger {
        if (Logger.loggerInstance == null) {
            Logger.loggerInstance = new Logger();
        }

        return Logger.loggerInstance;
    }

    SetToLog(message: string) {
        this.events.push(new LogEvent(message))
    }

    ShowEvents(): void {
       for (const ev of this.events) {
           console.log(`Message: ${ev.Message} - Date: ${ev.Date}`);
       }
    }
}

export default Logger