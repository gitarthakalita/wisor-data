import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';


const AddressInfo = inject("store")(observer(({ store }) => {

    
        // console.log(toJS(store.user))

        useEffect(() => {
            // store.address = toJS(store.user).wsrUserAddress;

            // console.log(toJS(store.address));
            
        })



        

    
    

    return (

        
        <div className="address-info-container">

            <h2>Address Information</h2>

            <div className="info-item">
                <div className="label"> Address Type </div>
                <div className="info">  {store.address.addresstype} </div>
            

            </div>

            <div className="info-item">
                <div className="label"> Address Line 1 </div>
                <div className="info">   </div>

            </div>

            <div className="info-item">
                <div className="label"> Address Line 2 </div>
                <div className="info">  {store.user.addressline1} </div>

            </div>

            <div className="info-item">
                <div className="label"> City </div>
                <div className="info">  {store.user.city} </div>

            </div>

            <div className="info-item">
                <div className="label"> State </div>
                <div className="info">  {store.user.state} </div>

            </div>
            <div className="info-item">
                <div className="label"> Country </div>
                <div className="info">  {store.user.city} </div>

            </div>

            <div className="info-item">
                <div className="label"> Pincode </div>
                <div className="info">  {store.user.city} </div>

            </div>

        </div>
        
    )
}

));

export default AddressInfo;