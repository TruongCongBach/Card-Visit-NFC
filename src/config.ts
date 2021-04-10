import { FunctionComponent } from "react";

export type ContactType = {
    address: string,
    social: {
        key: string
        name: string,
        logo: string,
    }
}

export const websOpenNewTab = ['facebook', 'youtube', 'instagram', 'zalo'];

export type CardVisitComponentProps = {
    cardVisit: CardVisitType
}

export type ContactsType = ContactType[]

export type CardVisitType = {
    patchUrl: string,
    Component: FunctionComponent<CardVisitComponentProps>,
    name: string,
    avatar: string | '',
    contacts: ContactsType,
    vcf?: string

}
export type Cards = CardVisitType[]


export enum SocialNameType {
    phone     = 'phone',
    facebook  = 'facebook',
    youtube   = 'youtube',
    gmail     = 'gmail',
    zalo      = 'zalo',
    instagram = 'instagram',

}

export type SocialType = Record<SocialNameType, { key: SocialNameType, name: string, logo: string }>

export const Social: SocialType = {
    facebook : {
        key : SocialNameType.facebook,
        name: 'Facebook',
        logo: 'socical-logo/facebook.svg',
    },
    phone    : {
        key : SocialNameType.phone,
        name: 'Phone Number',
        logo: 'socical-logo/phoneNumber.svg',
    },
    youtube  : {
        key : SocialNameType.youtube,
        name: 'Youtube',
        logo: 'socical-logo/youtube.svg',
    },
    gmail    : {
        key : SocialNameType.gmail,
        name: 'Gmail',
        logo: 'socical-logo/gmail.svg',
    },
    zalo     : {
        key : SocialNameType.zalo,
        name: 'Zalo',
        logo: 'socical-logo/zalo.svg',
    },
    instagram: {
        key : SocialNameType.instagram,
        name: 'Instagram',
        logo: 'socical-logo/instagram.svg',
    }
};
