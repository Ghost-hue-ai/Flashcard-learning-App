import conf from '../conf/conf';
import { Client, Account, ID, OAuthProvider } from 'appwrite';
import Input from '../Components/Input'
import LogRocket from 'logrocket';

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
            LogRocket.captureException(error);
            return null
        }
    }

    async logOutUser() {
        try {
            await this.account.deleteSession('current');

            const returnTo = encodeURIComponent(conf.auth0ReturnTo);
            const logoutUrl = `https://${conf.auth0Domain}/v2/logout?client_id=${conf.auth0ClientId}&returnTo=${returnTo}`;

            window.location.href = logoutUrl;
        } catch (error) {
            LogRocket.captureException(error);
        }
    }
    async loginWithAuth0() {
        try {
            return await this.account.createOAuth2Session(
                OAuthProvider.Auth0,
                conf.auth0Callback,
                conf.auth0Failure
            );
        } catch (e) {
            LogRocket.captureException(e);
        }
    }

    async updateUserName(name) {
        try {
            await this.account.updateName(name);
        } catch (e) {
            LogRocket.captureException(e);
            return null
        }
    }
}

const accountServ = new AppService();
export default accountServ;
