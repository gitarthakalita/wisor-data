import {decorate, observable, action, computed} from 'mobx';

class UserStore {

    @observable user= []
    

}

const userStore = new UserStore();


export default userStore;