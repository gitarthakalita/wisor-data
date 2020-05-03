import React, { Component } from 'react';

import axios from 'axios';

class UserProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
           
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
    


    componentDidMount(){
        axios.get('http://localhost:8080/user-data',this.state)
            .then((response) => {
                const {userid, ...otherProps} = response;

                this.setState({userid, ...otherProps});

                console.log(response);
            })
            .catch((error) => {
                console.log(error);
                
            })
    }
     


    render() {
        return (
          
            <div>
                
                
            </div>
        )
    }
}

export default UserProfile;
