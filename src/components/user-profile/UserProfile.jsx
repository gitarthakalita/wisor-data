import React, { Component } from 'react';

import axios from 'axios';

import { observer, inject } from "mobx-react";
import UserCard from './components/UserCard';

import './user-profile.scss';

@inject("store")
@observer
class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {

            user: [],

            userid: "",
            usertype: "",
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            password: "",
            activeflag: "",
            createdate: "",
            updatedate: "",
            inactivedate: "",
            dob: "",
            gender: "",
            wsrUserAddress: [
                {
                    user_address_id: "",
                    addresstype: "",
                    addressline1: "",
                    addressline2: "",
                    phone: "",
                    city: "",
                    state: "",
                    country: "",
                    postalcode: "",
                    email: "",
                    updatedate: "",
                    createdate: "",
                    inactivedate: "",
                    activeflag: ""
                },

            ],
            wsrUserInGroup: [
                {
                    user_in_group_id: "",
                    delete_time: "",
                    insert_time: "",
                    group_admin: ""
                },
                {
                    user_in_group_id: "",
                    delete_time: "",
                    insert_time: "",
                    group_admin: ""
                }
            ],

            wsrUserGroupType: [
                {
                    user_group_type_id: "",
                    group_name: "",
                    wsrUserGroupXref: {
                        user_group_id: "",
                        insert_time: "",
                        wsrUserInGroup: {
                            user_in_group_id: "",
                            delete_time: "",
                            insert_time: "",
                            group_admin: ""
                        }
                    }
                }

            ]
        }
    }



    componentDidMount() {
        const { store } = this.props;
        // const { user } = this.state;

        axios.get('http://localhost:8080/user-data', this.state)
            .then((response) => {
                

                store.user = response.data[0];

                // console.log(store.user);

                // console.log(response.data[0]);

            })
            .catch((error) => {
                console.log(error);

            })
    }



    render() {
        // const { store } = this.props;

        
        

        return (

            <div>
               <UserCard/>
                
            </div>
        )
    }
}

export default UserProfile;
