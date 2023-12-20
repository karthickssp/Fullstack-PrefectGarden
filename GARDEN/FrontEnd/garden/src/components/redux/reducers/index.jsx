import isLogin from './isLogin'

import { combineReducers } from "@reduxjs/toolkit";

const store = combineReducers({
    login : isLogin
})

export default store;