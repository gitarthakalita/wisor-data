import React, { Component } from 'react';
import axios from 'axios';


import './register.scss';

import CustomButton from '../../UI-components/CustomButton/CustomButton';
import FormInput from '../../UI-components/FormInput/FormInput';


class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {

            // register_data: {

            // wsrUserAccount: {



            //     usertype: "",
            //     firstname: '',
            //     lastname: '',
            //     phone: '',
            //     email: '',
            //     password: '',
            //     activeflag: '',
            //     dob: '',
            //     gender: ''

            // },
            // wsrUserAddressList: [
            //     {
            //         addresstype: '',
            //         addressline1: '',
            //         addressline2: '',
            //         phone: '',
            //         state: '',
            //         country: '',
            //         postalcode: '',
            //         email: '',
            //         activeflag: ''
            //     }
            // ],

            // wsrUserGroupTypeList: [
            //     {
            //         group_name: '',
            //         wsrUserGroupXref: {
            //             wsrUserInGroup: {
            //                 group_admin: ''
            //             }
            //         }
            //     }
            // ]





            usertype: '',
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            password: '',
            activeflag: '',
            dob: '',
            gender: '',
            addresstype: '',
            addressline1: '',
            addressline2: '',
            state: '',
            country: '',
            postalcode: '',





        }
    }





    submitHandler = (e) => {
        // const { store } = this.props;

        e.preventDefault();



        // let data = JSON.stringify(this.state)

        // let data = JSON.stringify({
        //     wsrUserAccount: {



        //         usertype: '',
        //         firstname: this.state.firstname,
        //         lastname: this.state.lastname,
        //         phone: this.state.phone,
        //         email: this.state.email,
        //         password: this.state.password,
        //         activeflag: '',
        //         dob: this.state.dob,
        //         gender: this.state.gender

        //     },
        //     wsrUserAddressList: [
        //         {
        //             addresstype: this.state.addresstype,
        //             addressline1: this.state.addressline1,
        //             addressline2: this.state.addressline2,
        //             phone: this.state.phone,
        //             state: this.state.state,
        //             country: this.state.country,
        //             postalcode: this.state.postalcode,
        //             email: this.state.email,
        //             activeflag: ''
        //         }
        //     ],

        //     wsrUserGroupTypeList: [
        //         {
        //             group_name: '',
        //             wsrUserGroupXref: {
        //                 wsrUserInGroup: {
        //                     group_admin: ''
        //                 }
        //             }
        //         }
        //     ]
        // })


        axios.post("http://ec2-35-174-156-7.compute-1.amazonaws.com:8080/api/registration/users", this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);

                console.log(this.state);


            })
    }


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {

        const { firstname, lastname, email, phone, password, addressline1, addressline2, city, state, postalcode, country, dob, gender, addresstype } = this.state;




        return (
            <div className="register-container">


                <form className="personal-info-container form-group" onSubmit={this.submitHandler.bind(this)} >

                    <div className="reg-data-group">
                        <h3>Personal Information</h3>

                        {/* <FormInput Label="Firstname" value={firstname} onChange={this.changeHandler} />
                        <FormInput Label=" Lastname " value={ lastname } onChange={this.changeHandler} />
                        <FormInput Label=" Phone " value={ phone } onChange={this.changeHandler} />
                        <FormInput Label=" Email " value={ email } onChange={this.changeHandler} />
                        <FormInput Label=" Password " value={ password } onChange={this.changeHandler} />
                        <FormInput Label=" Gender " value={ gender } onChange={this.changeHandler} />
                        <FormInput Label=" Date of Birth " value={ dob } type="date" onChange={this.changeHandler} /> */}


                        <div className="form-input-group">
                            <label className="form-label">Firstname </label>
                            <input className="form-input"  defaultValue={firstname}  onChange={this.changeHandler} />
                        </div>
                        <div className="form-input-group">
                            <label className="form-label">Lastname </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={lastname} />
                        </div>
                        <div className="form-input-group">
                            <label className="form-label">Phone </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={phone} />
                        </div>
                        <div className="form-input-group">
                            <label className="form-label">Email </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={email} />
                        </div>
                        <div className="form-input-group">
                            <label className="form-label">Password </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={password} />
                        </div>
                        <div className="form-input-group">
                            <label className="form-label">Gender </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={gender} />
                        </div>



                    </div>

                    <div className="reg-data-group">
                        <h3>Address Information</h3>
                        {/* <FormInput Label=" Address Type " value={ addresstype } onChange={this.changeHandler} />
                        <FormInput Label="Address Line 1" value={ addressline1 } onChange={this.changeHandler} />
                        <FormInput Label=" Address Line 2 " value={ addressline2 } onChange={this.changeHandler} />

                        <FormInput Label=" City " value={ city } onChange={this.changeHandler} />
                        <FormInput Label=" State " value={ state } onChange={this.changeHandler} />
                        <FormInput Label=" Country " value={ country } onChange={this.changeHandler} />
                        <FormInput Label=" Postal Code " value={ postalcode } onChange={this.changeHandler} /> */}

                        <div className="form-input-group">
                            <label className="form-label">Address Type </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={addresstype} />
                        </div>
                        <div className="form-input-group">
                            <label className="form-label">AddressLine 1 </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={addressline1} />
                        </div>
                        <div className="form-input-group">
                            <label className="form-label">AddressLine 2 </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={addressline2} />
                        </div>
                        <div className="form-input-group">
                            <label className="form-label">Phone </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={phone} />
                        </div>
                        <div className="form-input-group">
                            <label className="form-label">City </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={city} />
                        </div>
                        <div className="form-input-group">
                            <label className="form-label">State </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={state} />
                        </div>
                        <div className="form-input-group">
                            <label className="form-label">Country </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={country} />
                        </div>
                        <div className="form-input-group">
                            <label className="form-label">Postal Code </label>
                            <input className="form-input" onChange={this.changeHandler} defaultValue={postalcode} />
                        </div>



                    </div>

                    {/* <div className="reg-data-group">
                        <h3>Group Information</h3>
                        <FormInput Label=" Group Name " onChange={this.changeHandler} />


                    </div> */}

                    <CustomButton type="submit" >Submit</CustomButton>

                </form>



            </div>
        )
    }
}

export default Register;
