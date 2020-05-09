import { observable} from 'mobx';

class Store {

    // @observable user = ""    
    @observable user = [];

    @observable notification = {
        type: '',
        message: ''
    };


    

}

const appStore = new Store();


export default appStore;

// action, computed,decorate