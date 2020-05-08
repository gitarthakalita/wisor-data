import React from 'react'
import { inject, observer } from 'mobx-react';

const PersonalInfo = inject("store")(observer(({ store }) => {
    return (
        <div className="personal-info-container">

            <h3>Personal Information</h3>

            <div className="info-item">
                <div className="label"> User Type </div>
                <div className="info"> {store.user.userType}  </div>

            </div>

            <div className="info-item">
                <div className="label"> Name </div>
                <div className="info"> {store.user.firstName} {store.user.lastName}  </div>

            </div>

            <div className="info-item">
                <div className="label"> Phone Number </div>
                <div className="info">  {store.user.phone} </div>

            </div>

            <div className="info-item">
                <div className="label"> Email </div>
                <div className="info"> {store.user.email} </div>

            </div>

            <div className="info-item">
                <div className="label"> Date of Birth </div>
                <div className="info">  {store.user.dob} </div>

            </div>

            <div className="info-item">
                <div className="label"> Gender </div>
                <div className="info">  {store.user.gender} </div>

            </div>


        </div>
    )
}

));

export default PersonalInfo;