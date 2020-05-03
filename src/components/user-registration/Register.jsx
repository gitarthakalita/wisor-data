import React, { Component } from 'react';
import axios from 'axios';

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

       

        axios.post("http://localhost:8080/user-create", JSON.stringify(this.state))
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
                
            </div>
        )
    }
}

export default Register;
