
import { IProjectCard } from "../IProjectCard";
import { Tags } from "../Tags";
import { CardType } from "../CardType";
import { Player } from "../../Player";
import { Game } from "../../Game";

export class MartianSurvey implements IProjectCard {
    public cost: number = 9;
    public nonNegativeVPIcon: boolean = true;
    public tags: Array<Tags> = [Tags.SCIENCE];
    public name: string = "Martian Survey";
    public cardType: CardType = CardType.EVENT;
    public text: string = "Oxygen must be 4% or lower. Draw two cards.";
    public requirements: string = "4% or less Oxygen";
    public description: string = "A thorough investigation of the geology of Mars";
    public canPlay(player: Player, game: Game): boolean {
		return game.getOxygenLevel() <= 4 + player.getRequirementsBonus(game);
    }

    public play(player: Player, game: Game) {
		for (let i = 0; i < 2; i++) {
            player.cardsInHand.push(game.dealer.dealCard());
        }
		player.victoryPoints++;    
        return undefined;
    }
}