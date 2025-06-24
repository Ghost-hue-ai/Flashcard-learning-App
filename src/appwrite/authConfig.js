import conf from '../conf/conf'
import { Client,Account,ID } from "appwrite";
import {OAuthProvider} from "appwrite";

export class AppService {
    client = new Client()
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
        this.account = new Account(this.client)
    }

    //
    // async createAccount({email,password,name}){
    //     try {
    //         return await this.account.create(
    //             ID.unique(),
    //             email,
    //             password,
    //             name
    //
    //         )
    //
    //     } catch (error) {
    //         console.error('error creating an account: ', error);
    //
    //     }
    // }

    async getCurrentUser() {
        try {
            return await this.account.get()

        } catch (error) {
            console.error('error getting the current user info ', error);

        }
    }

    // async logInUser({email,password}){
    //     try {
    //         return this.account.createEmailPasswordSession(
    //             email,
    //             password
    //         )
    //     } catch (error) {
    //         console.error('error logging user', error);
    //
    //
    //     }
    // }

    async logOutUser() {
        try {
            await this.account.deleteSession('current')
            const auth0Domain = 'dev-623dh4zgohh7hnua.us.auth0.com'; // e.g., dev-xyz123.us.auth0.com
            const clientId = '6sXhVtxPN8rYbVWTcCJZM2VmUGHWOHCU';
            const returnTo = encodeURIComponent('http://localhost:5173/'); // Where to go after logout

            window.location.href = `https://${auth0Domain}/v2/logout?client_id=${clientId}&returnTo=${returnTo}`;


        } catch (error) {
            console.error('error logging out user', error);

        }
    }


    async loginWithAuth0() {
        try {
            return await this.account.createOAuth2Session(
                OAuthProvider.Auth0,
                "http://localhost:5173/oauth/callback",
                'http://localhost:5173/login'
            )

        } catch (e) {
            console.error('failed logging with auth0 ', e)
        }
    }
    async updateUserName(name){
        try {
            await this.account.updateName(
                name
            )

        }catch(e){
        console.log(e)
    }}






}




const accountServ = new AppService()
export default accountServ

