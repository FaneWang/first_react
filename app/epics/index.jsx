import {combineEpics} from 'redux-observable';
import loginEpics from './login';

export default combineEpics(
    loginEpics
);