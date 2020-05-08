import React from 'react'
import { inject, observer } from 'mobx-react';



const AddressInfo = inject("store")(observer(({ store }) => {


    return (

        
        <div className="address-info-container">

            <h3>Address Information</h3>

            <div className="info-item">
                <div className="label"> Address Type </div>
                <div className="info">  {store.user.userAddresses ? store.user.userAddresses[0].addressType : ''} </div>
            

            </div>

            <div className="info-item">
                <div className="label"> Address Line 1 </div>
                <div className="info"> {store.user.userAddresses ? store.user.userAddresses[0].addressLine1 : ''} </div>

            </div>

            <div className="info-item">
                <div className="label"> Address Line 2 </div>
                <div className="info">  {store.user.userAddresses ? store.user.userAddresses[0].addressLine2 : ''} </div>

            </div>

            <div className="info-item">
                <div className="label"> City </div>
                <div className="info">  {store.user.userAddresses ? store.user.userAddresses[0].city : ''} </div>

            </div>

            <div className="info-item">
                <div className="label"> State </div>
                <div className="info">  {store.user.userAddresses ? store.user.userAddresses[0].state : ''} </div>

            </div>
            <div className="info-item">
                <div className="label"> Country </div>
                <div className="info"> {store.user.userAddresses ? store.user.userAddresses[0].country : ''}</div>

            </div>

            <div className="info-item">
                <div className="label"> Postal Code </div>
                <div className="info">  {store.user.userAddresses ? store.user.userAddresses[0].postalCode : ''} </div>

            </div>


<h3>Group Information</h3>
      
            <div className="info-item">
                <div className="label"> Group Name </div>
                <div className="info">  {store.user.userInGroups ? store.user.userInGroups[0].userGroup.groupName : ''} </div>

            </div>



        </div>
        
    )
}

));

export default AddressInfo;