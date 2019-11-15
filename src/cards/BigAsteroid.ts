import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";
import { SelectPlayer } from "../inputs/SelectPlayer";

export class BigAsteroid implements IProjectCard {
    public cost: number = 27;
    public nonNegativeVPIcon: boolean = true;
    public tags: Array<Tags> = [Tags.SPACE];
    public cardType: CardType = CardType.EVENT;
    public name: string = "Big Asteroid";
    public text: string = "Raise temperature 2 steps and gain 4 titanium. Remove up to 4 plants from any player.";
    public requirements: undefined;
    public description: string = "There are many unpopulated areas to crash it on";
    public canPlay(): boolean {
        return true;
    }
    public play(player: Player, game: Game) {
        if (game.getPlayers().length == 1) {
            player.titanium += 4;
            return game.increaseTemperature(player, 2);
        }
        return new SelectPlayer(game.getPlayers(), "Select player to remove up to 4 plants from", (foundPlayer: Player) => {
            foundPlayer.removePlants(player, 4);
            player.titanium += 4;
            return game.increaseTemperature(player, 2);
        });
    }
}