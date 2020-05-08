import React from 'react'
// import { inject, observer } from 'mobx-react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';

// const UserCard =inject("store")(observer(({store}) => {


const UserCard = () => {
    
    return (
        <div className="user-card-container">
            <PersonalInfo/>
            <AddressInfo/>
            
        </div>
    )
}

// ));

export default UserCard;