import React, { FunctionComponent }                    from "react";
import { ContactType, SocialNameType, websOpenNewTab } from "./config";

type RenderVisualContactComponentProps = {
    contact: ContactType
}
const RenderVisualContactComponent: FunctionComponent<RenderVisualContactComponentProps> = ({contact}) => {
    const {social} = contact;
    if (social.key === SocialNameType.phone) {
        return <a hidden
                  id={`link-contact-${social.key}`}
                  href={`tel:${contact.address}`}
        >
            {contact.address}
        </a>;
    }

    if (websOpenNewTab.includes(social.key)) {
        return <a hidden target={'_blank'} rel="noreferrer"
                  id={`link-contact-${social.key}`}
                  href={contact.address}
        >
            {contact.address}
        </a>;
    }
    if (social.key === 'gmail') {
        return <a href={`mailto::${contact.address}`}
                  id={`link-contact-${social.key}`}
        >{contact.address}</a>;
    }
    return <div/>;
};
export default RenderVisualContactComponent;
