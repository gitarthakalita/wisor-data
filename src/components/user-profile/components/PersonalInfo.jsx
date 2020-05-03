import React from 'react'
import { inject, observer } from 'mobx-react';

const PersonalInfo = inject("store")(observer(({ store }) => {
    return (
        <div className="personal-info-container">

            <h2>Personal Information</h2>

            <div className="info-item">
                <div className="label"> User Type </div>
                <div className="info"> {store.user.usertype}  </div>

            </div>

            <div className="info-item">
                <div className="label"> Name </div>
                <div className="info"> {store.user.firstname} {store.user.lastname}  </div>

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