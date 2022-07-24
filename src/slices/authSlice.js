import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { url } from "./api";

const initialState = {
    registerToken: null,
    token: window.localStorage.getItem("token"),
    first_name: window.localStorage.getItem('first_name'),
    last_name: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
    _id: '',
    registerStatus: '',
    registerError: '',
    loginStatus: '',
    loginError: '',
    loading: false,
    userLoaded: false,
    success: false,
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (user, {rejectWithValue}) => {
        try{
            await axios.post(`${url}/register/`, {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone: user.phone,
                password: user.password,
                password2: user.password2,
            }).then((response) => {
                    if (response.status === 200) {
                        console.log('Success!!');
                    } else{
                       throw response
                    }
                })
        }catch(err){
            console.log(err.response.data.email);

            return rejectWithValue(err.response.data.email)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (user, {rejectWithValue}) => {
        try{
         const response = await axios.post(`${url}/login/`, {
                email: user.email,
                password: user.password,
            })
            window.localStorage.setItem('token', response.data.token)
            window.localStorage.setItem('first_name', response.data.first_name)
            return response.data
            }catch(err){
                console.log(err.response.data.non_field_errors);

            return rejectWithValue(err.response.data.non_field_errors)
        }
    }
    
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loadUser(state, action){
            const loadToken = state.token
            const name = localStorage.getItem('first_name')

            if (loadToken && name){
                const user = jwt_decode(loadToken) 
                console.log(user);
                console.log(name);

                return{
                    ...state,
                    token: loadToken,
                    first_name: name,
                    email: user.email,
                    _id: user.user_id,
                    userLoaded: true,
                }
            } else return {...state, userLoaded: true}
        },
        logoutUser(state, action){
            localStorage.removeItem('token')
            localStorage.removeItem('first_name')

            return{
                ...state,
                token: '',
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                password: '',
                password2: '',
                _id: '',
                loading: false,
                registerStatus: '',
                registerError: '',
                loginStatus: '',
                loginError: '',
                userLoaded: false,
                success: false,
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            return {
                ...state,
                registerStatus: 'pending',
                loading: true
            }    
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
                return {
                    ...state,
                    registerStatus: 'success',
                    loading: false,
                    success: true,
                }    
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            return {
                ...state,
                registerStatus: 'rejected',
                registerError: action.payload,
                loading: false,
            }    
        });

        builder.addCase(loginUser.pending, (state, action) => {
            return {
                ...state,
                loginStatus: 'pending',
                loading: true
            }    
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload){
                const user = jwt_decode(action.payload.token)
                console.log(user);
                const name = localStorage.getItem('first_name')


                return {
                    ...state,
                    token: action.payload.token,
                    first_name: name,
                    _id: user.user_id,
                    loginStatus: 'success',
                    loading: false,
                    success: true,
                }
            }else return state      
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            return {
                ...state,
                loginStatus: 'rejected',
                loginError: action.payload,
                loading: false,
            }    
        });
    },
});

export const {loadUser, logoutUser} = authSlice.actions;

export default authSlice.reducer