import React from 'react';
import './App.css';

const contacts = [
    {
        type: 'Phone Number',
        logo: 'socical-logo/phoneNumber.svg',
        address: '0946856960'
    },
    {
        type: 'Facebook',
        logo: 'socical-logo/facebook.svg',
        address:''
    },
    {
        type: 'Zalo',
        logo: 'socical-logo/zalo.svg',
        address:''
    },
    {
        type: 'Gmail',
        logo: 'socical-logo/gmail.svg',
        address:''
    },
    {
        type: 'Instagram',
        logo: 'socical-logo/instagram.svg',
        address:''
    }
]

function App() {
    return (
        <div className={'App greyBG'}>
            <div className={'Card-layout'}>
                <div>
                    <img src="https://lh3.googleusercontent.com/ogw/ADGmqu9tXpjafCc3XViKZnYNBqtwT9-t5ndnBaT7AgfwDQ=s83-c-mo"
                         alt="avatar-user"
                        className={'card-avatar'}
                    />
                    <h3 className={'user-name'}>Truong Cong Bach</h3>
                </div>
                {contacts.map((contact) => {
                    return <div className={'contact-info'}>
                        <div className={'icon-contact'}>
                            <img
                                src={contact.logo} alt={contact.logo}
                                className={'social-logo'}
                            />
                        </div>
                        <div className={'name-contact'}>{contact.type}</div>
                        <div className={'action-contact'}>
                            <i className="fas fa-angle-right"/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default App;
