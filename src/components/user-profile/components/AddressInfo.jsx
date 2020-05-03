import React from 'react'
import { inject, observer } from 'mobx-react';

const AddressInfo = inject("store")(observer(({ store }) => {

    
    return (
        <div className="address-info-container">
            <h2>Address Information</h2>

            <div className="info-item">
                <div className="label"> Name </div>
                {/* <div className="info"> {store.user.wsrUserAddress[0].addressline1}  </div> */}

                {
                    console.log(store.user)
                    
                }

            </div>

            <div className="info-item">
                <div className="label"> Phone Number </div>
                <div className="info">  {store.user.phone} </div>

            </div>


        </div>
    )
}

));

export default AddressInfo;