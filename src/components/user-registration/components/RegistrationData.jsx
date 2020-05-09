import React from 'react';


import { inject, observer } from 'mobx-react';
import FormInput from '../../../UI-components/FormInput/FormInput';

const RegistrationData = inject("store")(observer(({ store }) => {
    return (
        <div className="personal-info-container">

            <div className="reg-data-group">
                <h3>Personal Information</h3>

                <FormInput Label="Firstname" />
                <FormInput Label=" Lastname " />
                <FormInput Label=" Phone " />
                <FormInput Label=" Email " />
                <FormInput Label=" Password " />
                <FormInput Label=" Gender " />
                <FormInput Label=" Date of Birth " type="date" />
            </div>

            <div className="reg-data-group">
                <h3>Address Information</h3>
                <FormInput Label=" Address Type " />
                <FormInput Label="Address Line 1" />
                <FormInput Label=" Address Line 2 " />

                <FormInput Label=" City " />
                <FormInput Label=" State " />
                <FormInput Label=" Country " />
                <FormInput Label=" Postal Code " />

            </div>

            <div className="reg-data-group">
                <h3>Group Information</h3>
                <FormInput Label=" Group Name " />
          

            </div>


        </div>
    )
}

));

export default RegistrationData;