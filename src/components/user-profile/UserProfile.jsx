import React, { Component } from 'react';

import axios from 'axios';

import { observer, inject } from "mobx-react";
import UserCard from './components/UserCard';

import './user-profile.scss';
import CustomButton from '../../UI-components/CustomButton/CustomButton';


@inject("store")
@observer
class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {

            user: [],


        }
    }



    componentDidMount() {
        const { store } = this.props;
        // const { user } = this.state;




        axios.get('http://ec2-35-174-156-7.compute-1.amazonaws.com:8080/api/registration/users/1', this.state)
            .then((response) => {


                store.user = response.data;

                // console.log(toJS(store.user));

                // console.log(response.data);

            })
            .catch((error) => {
                console.log(error);

            })
    }



    render() {
        // const { store } = this.props;




        return (

            <div className="user-profile-container">
                <div className="profile-menu profile-item">
                    <CustomButton variantWhite>
                        Profile Information
                    </CustomButton>
                    <CustomButton variantWhite>
                        Dashboard
                    </CustomButton>

                    <CustomButton variantWhite>
                       Account Settings
                    </CustomButton>

                    <CustomButton variantWhite>
                        Log Out
                    </CustomButton>
                </div>
                <UserCard className="profile-item" />
                <div className="profile-action profile-item">
                    <CustomButton variantTwo>
                        Update Profile
                    </CustomButton>
                </div>

            </div>
        )
    }
}

export default UserProfile;
