import React, { Component } from 'react';
import axios from 'axios';


import './register.scss';
import RegistrationData from './components/RegistrationData';
import CustomButton from '../../UI-components/CustomButton/CustomButton';

class Register extends Component {

    constructor(props){
        super(props);

        this.state ={

            register_data: {

                wsrUserAccount: {


                    
                    usertype: "",
                    firstname: '',
                    lastname: '',
                    phone: '',
                    email: '',
                    password: '',
                    activeflag: '',
                    dob: '',
                    gender: ''

                },
                wsrUserAddressList: [
                    {
                        addresstype: '',
                        addressline1: '',
                        addressline2: '',
                        phone: '',
                        state: '',
                        country: '',
                        postalcode: '',
                        email: '',
                        activeflag: ''
                    }
                ],

                wsrUserGroupTypeList: [
                    {
                        group_name: '',
                        wsrUserGroupXref: {
                            wsrUserInGroup: {
                                group_admin: ''
                            }
                        }
                    }
                ]


            }
        }
    }



    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        const { store } = this.props;

        e.preventDefault();

       

        axios.post("http://ec2-35-174-156-7.compute-1.amazonaws.com:8080/api/registration/users", JSON.stringify(this.state))
            .then(response => {
                console.log(response);

                if (response.status === 200) {
                    store.notification = { type: 'success', message: response.data.status, phone: response.data.phone };
                    store.mobile.push(response.data.phone);
                    this.props.history.push(`/thank-you`);
                } if (response.status === null) {
                    this.props.history.push(`/404`);
                    console.log('Api error or bad request');
                }
            })
            .catch(error => {
                console.log(error);
                console.log(JSON.stringify(this.state));
                // alert(JSON.stringify(this.state)+ "\n");
            })
    }

    render() {
        

       

        return (
            <div className="register-container">

                
                <form className="form-group" onSubmit={this.submitHandler.bind(this)} >
                 <RegistrationData 
                    onChange={this.changeHandler}
                 />
                 
                 <CustomButton>Submit</CustomButton> 
                </form>
            </div>
        )
    }
}

export default Register;
