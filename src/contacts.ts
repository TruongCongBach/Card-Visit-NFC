import CardVisit         from "./CardVisit";
import { Cards, Social } from "./config";


const customersCardVisit: Cards = [
    {
        patchUrl: '/TruongCongBach',
        Component: CardVisit,
        name: 'Trương Công Bách',
        avatar: 'contacts/truongcongbach301096/avatar.jpg',
        vcf: 'contacts/truongcongbach301096/contact.vcf',
        contacts: [
            {
                address: '+84946856960',
                social: Social.phone
            },
            {
                address: 'https://www.facebook.com/bach.truongcong.946/',
                social: Social.facebook
            },
            {
                address: 'https://www.youtube.com/channel/UCNEwSpww4EfGvJl319fTW_g',
                social: Social.youtube,
            },
            {
                address: 'https://zalo.me/0946856960',
                social: Social.zalo,
            },
            {
                address: '',
                social: Social.gmail
            },
            {
                address: 'https://www.instagram.com/truongcongbach/',
                social: Social.instagram
            }
        ]
    }
];
export default customersCardVisit;
