import { observable} from 'mobx';

class Store {

    // @observable user = {
    //     userid : null
    // }
    
    @observable user = []
    

}

const appStore = new Store();


export default appStore;

// action, computed,decorate