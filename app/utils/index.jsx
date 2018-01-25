import * as loginActionFromOther from '../actions/login';

const loginCheck = (store) => {
    const storage = window.localStorage;
    if (storage.username) {
        store.dispatch(loginActionFromOther.update(storage.username,storage.password));
    }
}

export default loginCheck;