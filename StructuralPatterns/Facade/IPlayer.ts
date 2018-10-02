import MediaEntry from "./MediaEntry";

interface IPlayer {
    Play(): void;
    Stop(): void;
    LoadMedia(mediaEntry: MediaEntry): void;
}

export default IPlayer;