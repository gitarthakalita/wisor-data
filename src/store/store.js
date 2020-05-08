import { observable} from 'mobx';

class Store {

    // @observable user = ""    
    @observable user = []


    

}

const appStore = new Store();


export default appStore;

// action, computed,decorate