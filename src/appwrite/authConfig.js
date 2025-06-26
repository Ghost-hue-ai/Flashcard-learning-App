import conf from '../conf/conf';
import { Client, Account, ID, OAuthProvider } from 'appwrite';
import Input from '../Components/Input'
export class AppService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
        this.account = new Account(this.client);
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error('Error getting current user:', error);
        }
    }

    async logOutUser() {
        try {
            await this.account.deleteSession('current');

            const returnTo = encodeURIComponent(conf.auth0ReturnTo);
            const logoutUrl = `https://${conf.auth0Domain}/v2/logout?client_id=${conf.auth0ClientId}&returnTo=${returnTo}`;

            window.location.href = logoutUrl;
        } catch (error) {
            console.error('Error logging out user:', error);
        }
    }
    async loginWithAuth0() {
        try {
            return await this.account.createOAuth2Session(
                OAuthProvider.Auth0,
                'https://flarelearn.vercel.app/oauth/callback',
                'https://flarelearn.vercel.app/login'
            );
        } catch (e) {
            console.error('Failed logging in with Auth0:', e);
        }
    }

    async updateUserName(name) {
        try {
            await this.account.updateName(name);
        } catch (e) {
            console.error('Error updating user name:', e);
        }
    }
}

const accountServ = new AppService();
export default accountServ;
