import { reactive, watchEffect, readonly } from 'vue'
import axios from "axios";

const state = reactive({ user: {}, token: {}, authenticated: false } );

const loginUser = async ( credentials ) =>
{
    const response = await  axios({ method: 'POST', url: 'stores/auth/login', data: { data: { type: "StoreAdministrator", attributes: { email: credentials.email, password: credentials.password } } } });
    return await validateToken ( response.data.data.token.access_token, response.data.data.attributes.resource_id )
}
const validateToken = async ( token, resource ) =>
{
    try
    {
        let response = await axios({ method: 'GET', url: 'stores/administrator/' + resource + '?include=store', headers: { 'Authorization': 'Bearer ' + token } });
        storeData( token, response.data.data )
    }
    catch ( exception )
    {
        localStorage.clear();
        state.authenticated = false
    }
}
const storeData = ( token, user ) =>
{
    localStorage.setItem( 'token', token )
    localStorage.setItem( 'user', JSON.stringify( user ) )

    state.user = JSON.parse( localStorage.getItem('user' ) )
    state.token = localStorage.getItem('token' )

    return isAuthenticated()
}
const isAuthenticated = () =>
{
    if ( localStorage.getItem('token') && localStorage.getItem( 'user' ) ){
        return state.authenticated = true
    }
    else
    {
        localStorage.clear();
        return state.authenticated = false
    }
}
const getToken = () =>
{
    return localStorage.getItem( 'token' )
}
const logoutUser = () =>
{
    return axios({ method: 'POST', url: 'stores/auth/logout', headers: { 'Authorization': 'Bearer ' + getToken() } }).then(() =>{
        localStorage.removeItem( 'token' )
        localStorage.removeItem( 'user' )
        localStorage.clear();
    })
}
watchEffect(() =>
{
    state.user = JSON.parse( localStorage.getItem('user' ) )
    state.token = localStorage.getItem('token' )
});

export default { state: readonly(state), loginUser, logoutUser, isAuthenticated }