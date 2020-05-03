

from flask import Flask, escape, request, jsonify

from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/user/*":{"origins": "*"}})

@app.route('/user-data', methods=['GET'])
def services_category():
    return jsonify(
   [

    {
        "userid": 13,
        "usertype": "admin",
        "firstname": "Manjit",
        "lastname": "Barman",
        "phone": "8888",
        "email": "mbarman@gmail.com",
        "password": "Weekly",
        "activeflag": "true",
        "createdate": "2020-04-23 15:54:30",
        "updatedate": "2020-04-23 15:55:06",
        "inactivedate": "2021-04-22 16:55:31",
        "dob": "2000-12-12",
        "gender": "Male",
        "wsrUserAddress": [
            {
                "user_address_id": 25,
                "addresstype": "Home",
                "addressline1": "NYC1",
                "addressline2": "NYC2",
                "phone": "8888",
                "city": "NYC",
                "state": "NYC",
                "country": "USA",
                "postalcode": "22222",
                "email": "m2@gmail.com",
                "createdate": "2020-04-23 15:54:30",
                "updatedate": "2020-04-23 15:55:06",
                "inactivedate": "2021-04-22 16:55:31",
                "activeflag": "true"
            },
            {
                "user_address_id": 26,
                "addresstype": "Office",
                "addressline1": "Cal1",
                "addressline2": "Cal2",
                "phone": "8888",
                "city": "CALIFORNIA",
                "state": "CAL",
                "country": "USA",
                "postalcode": "333333",
                "email": "m3@gmail.com",
                "createdate": "2020-04-23 15:54:30",
                "updatedate": "2020-04-23 15:55:06",
                "inactivedate": "2021-04-22 16:55:31",
                "activeflag": "true"
            }
        ],
        "wsrUserInGroup": [
            {
                "user_in_group_id": 25,
                "delete_time": "",
                "insert_time": "2020-04-23 15:54:30",
                "group_admin": "true"
            },
            {
                "user_in_group_id": 26,
                "delete_time": "",
                "insert_time": "2020-04-23 15:54:30",
                "group_admin": "false"
            }
        ],
        "wsrUserGroupType": [
            {
                "user_group_type_id": 25,
                "group_name": "M_B_Research",
                "wsrUserGroupXref": {
                    "user_group_id": 25,
                    "insert_time": "2020-04-23 15:54:30",
                    "wsrUserInGroup": {
                        "user_in_group_id": 25,
                        "delete_time": "",
                        "insert_time": "2020-04-23 15:54:30",
                        "group_admin": "true"
                    }
                }
            },
            {
                "user_group_type_id": 26,
                "group_name": "M_B_STEM",
                "wsrUserGroupXref": {
                    "user_group_id": 26,
                    "insert_time": "2020-04-23 15:54:30",
                    "wsrUserInGroup": {
                        "user_in_group_id": 26,
                        "delete_time": "",
                        "insert_time": "2020-04-23 15:54:30",
                        "group_admin": "false"
                    }
                }
            }
        ]
    },

    {
        "userid": 14,
        "usertype": "user",
        "firstname": "Arup",
        "lastname": "Barman",
        "phone": "7777",
        "email": "abarman@gmail.com",
        "password": "hello",
        "activeflag": "true",
        "createdate": "2020-04-23 25:54:30",
        "updatedate": "2020-04-23 25:55:06",
        "inactivedate": "2021-04-22 16:55:31",
        "dob": "2000-12-12",
        "gender": "Male",
        "wsrUserAddress": [
            {
                "user_address_id": 25,
                "addresstype": "Home",
                "addressline1": "NYC1",
                "addressline2": "NYC2",
                "phone": "8888",
                "city": "NYC",
                "state": "NYC",
                "country": "USA",
                "postalcode": "22222",
                "email": "m2@gmail.com",
                "createdate": "2020-04-23 15:54:30",
                "updatedate": "2020-04-23 15:55:06",
                "inactivedate": "2021-04-22 16:55:31",
                "activeflag": "true"
            },
            {
                "user_address_id": 26,
                "addresstype": "Office",
                "addressline1": "Cal1",
                "addressline2": "Cal2",
                "phone": "8888",
                "city": "CALIFORNIA",
                "state": "CAL",
                "country": "USA",
                "postalcode": "333333",
                "email": "m3@gmail.com",
                "createdate": "2020-04-23 15:54:30",
                "updatedate": "2020-04-23 15:55:06",
                "inactivedate": "2021-04-22 16:55:31",
                "activeflag": "true"
            }
        ],
        "wsrUserInGroup": [
            {
                "user_in_group_id": 25,
                "delete_time": "",
                "insert_time": "2020-04-23 15:54:30",
                "group_admin": "true"
            },
            {
                "user_in_group_id": 26,
                "delete_time": "",
                "insert_time": "2020-04-23 15:54:30",
                "group_admin": "false"
            }
        ],
        "wsrUserGroupType": [
            {
                "user_group_type_id": 25,
                "group_name": "M_B_Research",
                "wsrUserGroupXref": {
                    "user_group_id": 25,
                    "insert_time": "2020-04-23 15:54:30",
                    "wsrUserInGroup": {
                        "user_in_group_id": 25,
                        "delete_time": "",
                        "insert_time": "2020-04-23 15:54:30",
                        "group_admin": "true"
                    }
                }
            },
            {
                "user_group_type_id": 26,
                "group_name": "M_B_STEM",
                "wsrUserGroupXref": {
                    "user_group_id": 26,
                    "insert_time": "2020-04-23 15:54:30",
                    "wsrUserInGroup": {
                        "user_in_group_id": 26,
                        "delete_time": "",
                        "insert_time": "2020-04-23 15:54:30",
                        "group_admin": "false"
                    }
                }
            }
        ]
    },

    {
        "userid": 15,
        "usertype": "admin",
        "firstname": "Gitartha",
        "lastname": "Kalita",
        "phone": "5555",
        "email": "gkalita@gmail.com",
        "password": "Weekly",
        "activeflag": "true",
        "createdate": "2020-04-23 15:54:30",
        "updatedate": "2020-04-23 15:55:06",
        "inactivedate": "2021-04-22 16:55:31",
        "dob": "2000-12-12",
        "gender": "Male",
        "wsrUserAddress": [
            {
                "user_address_id": 25,
                "addresstype": "Home",
                "addressline1": "NYC1",
                "addressline2": "NYC2",
                "phone": "8888",
                "city": "NYC",
                "state": "NYC",
                "country": "USA",
                "postalcode": "22222",
                "email": "m2@gmail.com",
                "createdate": "2020-04-23 15:54:30",
                "updatedate": "2020-04-23 15:55:06",
                "inactivedate": "2021-04-22 16:55:31",
                "activeflag": "true"
            },
            {
                "user_address_id": 26,
                "addresstype": "Office",
                "addressline1": "Cal1",
                "addressline2": "Cal2",
                "phone": "8888",
                "city": "CALIFORNIA",
                "state": "CAL",
                "country": "USA",
                "postalcode": "333333",
                "email": "m3@gmail.com",
                "createdate": "2020-04-23 15:54:30",
                "updatedate": "2020-04-23 15:55:06",
                "inactivedate": "2021-04-22 16:55:31",
                "activeflag": "true"
            }
        ],
        "wsrUserInGroup": [
            {
                "user_in_group_id": 25,
                "delete_time": "",
                "insert_time": "2020-04-23 15:54:30",
                "group_admin": "true"
            },
            {
                "user_in_group_id": 26,
                "delete_time": "",
                "insert_time": "2020-04-23 15:54:30",
                "group_admin": "false"
            }
        ],
        "wsrUserGroupType": [
            {
                "user_group_type_id": 25,
                "group_name": "M_B_Research",
                "wsrUserGroupXref": {
                    "user_group_id": 25,
                    "insert_time": "2020-04-23 15:54:30",
                    "wsrUserInGroup": {
                        "user_in_group_id": 25,
                        "delete_time": "",
                        "insert_time": "2020-04-23 15:54:30",
                        "group_admin": "true"
                    }
                }
            },
            {
                "user_group_type_id": 26,
                "group_name": "M_B_STEM",
                "wsrUserGroupXref": {
                    "user_group_id": 26,
                    "insert_time": "2020-04-23 15:54:30",
                    "wsrUserInGroup": {
                        "user_in_group_id": 26,
                        "delete_time": "",
                        "insert_time": "2020-04-23 15:54:30",
                        "group_admin": "false"
                    }
                }
            }
        ]
    }

    ]
        
 ),200



 
@app.route('/user-create',methods=['POST'])
def doCreateRegistraion(): 
    print("-----------CREATE ---------------")
    
    
    try:
        print("Try block")
        print("==============")
        
        print("Data : ", request)
        
        print("================")
        
        receiveddata = request.get_json();
        print("ReceivedData From Client : ", receiveddata)

        
        print("===============================================================")
        print("")
        print("usertype : " + receiveddata["usertype"])
        print("firname : " + receiveddata["firstname"])
        print("lastname : " + receiveddata["lastname"])
        print("addressline1 : " + receiveddata["addressline1"])
        print("addressline2 : " + receiveddata["addressline2"])
        print("city : " + receiveddata["city"])
        print("state : " + receiveddata["state"])
        print("pin : " + receiveddata["pin"])
        print("country : " + receiveddata["country"])
        print("phone : " + receiveddata["phone"])
        print("email : " + receiveddata["email"])
        print("subscriptionlevel : " + receiveddata["subscriptionlevel"])
        print("dob : " + receiveddata["dob"])
        print("gender : " + receiveddata["gender"])
        print("groupid : " + receiveddata["groupid"])
        print("addresstype : " + receiveddata["addresstype"])
        
        
        print("")    
        print("SERVICE WILL DO PROCESSING AND STORE IN DB")
        print("================================================================")
    
    except KeyError as e:
        print('Invalid recipe: missing ')

        
    print("==========================")      
    print("")
    
    a ={"phone":receiveddata["phone"], "status":"Registration Successfull"} 
    b = json.dumps(a)
    print("")
    print(b)
    print("")
    return b;


if __name__ == '__main__':
    app.run(debug=True, host = '0.0.0.0', port=8080)