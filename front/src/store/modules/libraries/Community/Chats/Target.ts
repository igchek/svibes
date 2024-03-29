import { PrivateChat } from "./Private";
import { targetContract, targetOffer, targetOfferNegotiations } from "../Target/Template";



export class TargetChat extends PrivateChat {
    constructor (
        chat:PrivateChat,
        offers:targetOffer[],

    ){
        super(
            chat.chatId,
            chat.hostContentId,
            chat.chatTitle,
            chat.hostContentTitle,
            chat.chatType,
            chat.audience,
            chat.chatParams,
            chat.moderationSettings,
            chat.messages,
            chat.inviteParams
        )
        this.chatId=chat.chatId
        this.offers=offers


    }
    offers:targetOffer[]
    contracts?:targetContract[]
    negotiations?:targetOfferNegotiations
}