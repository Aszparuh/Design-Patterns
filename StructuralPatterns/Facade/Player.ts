import IPlayer from "./IPlayer";
import MediaEntry from "./MediaEntry";

class Player implements IPlayer {
    private readonly playList!: MediaEntry[];
    private currentIndex: number = 0;

    constructor() {
        this.playList = new Array<MediaEntry>();
    }

    Play(): void {
        if (this.playList.length === 0) {
           throw Error("Playlist is empty");
        }

        let currentItem = this.playList[this.currentIndex];
        if (currentItem === null) {
            throw Error("Item does not exist");
        }

        console.log(`Playing ${currentItem.title} - Duration: ${currentItem.durationSeconds} seconds`);
    }    
    
    Stop(): void {
        console.log("Stop");
    }
    
    Next(): void {
        this.currentIndex++;
        if (this.currentIndex >= this.playList.length) {
            this.currentIndex = 0;
        }

        console.log("Switching to next item...")
    }

    Previous(): void {
        this.currentIndex--;
        if (this.currentIndex < this.playList.length) {
            this.currentIndex = this.playList.length - 1;
        }

        console.log("Switching to previous item...")
    }
    
    LoadMedia(mediaEntry: MediaEntry): void {
        this.playList.push(mediaEntry);
        console.log(`Media Added ${mediaEntry.title}`);
    }
}

export default Player;