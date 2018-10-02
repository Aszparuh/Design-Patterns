import Database from "./Database";
import Player from "./Player";
import InteriorController from "./InteriorController";
import MediaEntry from "./MediaEntry";

class HomeTheater {
    private readonly database: Database = new Database();
    private readonly player: Player = new Player();
    private readonly interiorController: InteriorController = new InteriorController();

    // singleton
    private constructor() {
        this.SeedDatabase();
    }

    static GetInstance() {
        return new HomeTheater();
    }

    StartHomeTheater() {
        this.interiorController.DimLights(10);
        this.interiorController.MoveCurtains(0);
        this.interiorController.HideTable();
        this.LoadMedia();
        this.player.Play();
    }

    Next(): void
    {
        this.player.Next();
        this.player.Play();
    }

    Previous(): void
    {
        this.player.Previous();
        this.player.Play();
    }

    Stop(): void
    {
        this.player.Stop();
    }

    private LoadMedia(): void
    {
        const allMedia = this.database.Entries;

        for (const entry of allMedia) {
            // console.log(`Title: ${entry.title}`);
            // console.log(`Duration: ${entry.durationSeconds / 60} minutes`);
            this.player.LoadMedia(entry);
        }
    }

    SeedDatabase() {
        let defaultEntry = new MediaEntry();
        
        let firstEntry = {...defaultEntry};
        firstEntry.title = "Lord of the Rings - The Fellowship of the Ring";
        firstEntry.durationSeconds = 10800;
        firstEntry.fileExtension = "mkv";

        let secondEntry = {...defaultEntry};
        secondEntry.title = "Lord of the Rings - The Two Towers";
        secondEntry.durationSeconds = 10600;
        secondEntry.fileExtension = "avi";
        
        let thirdEntry = {...defaultEntry};
        thirdEntry.title = "Lord of the Rings - The Return of the King";
        thirdEntry.durationSeconds = 10700;
        thirdEntry.fileExtension = "mp4"
        
        this.database.Add(firstEntry);
        this.database.Add(secondEntry);
        this.database.Add(thirdEntry);
    }
}

export default HomeTheater;