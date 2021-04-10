import React, { FunctionComponent }             from "react";
import RenderVisualContactComponent             from "./RenderVisualContactComponent";
import { CardVisitComponentProps, ContactType } from "./config";

const CardVisit: FunctionComponent<CardVisitComponentProps> = ({cardVisit}) => {
    const {contacts, name, avatar} = cardVisit;

    return <div className={'Card-layout'}>
        <img src={avatar}
             alt="avatar-user"
             className={'card-avatar'}
        />
        <h3 className={'user-name'}>{name}</h3>
        <a href={cardVisit.vcf}>Save Contact</a>
        {contacts.map((contact: ContactType, index) => {
            const {social} = contact;
            return <div className={'contact-info'} key={index}
                        onClick={() => document.getElementById(`link-contact-${social.key}`)?.click()}
            >
                <RenderVisualContactComponent contact={contact}/>
                <div className={'icon-contact'}>
                    <img
                        src={social.logo}
                        alt={social.logo}
                        className={'social-logo'}
                    />
                </div>
                <div className={'name-contact'}>{social.name}</div>
                <div className={'action-contact'}>
                    <i className="fas fa-angle-right"/>
                </div>
            </div>;
        })}
    </div>;
};

export default CardVisit;
