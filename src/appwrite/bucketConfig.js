import conf from '../conf/conf'
import {Client, Storage, ID, Account} from "appwrite";
import {Permission,Role} from "appwrite";
import LogRocket from 'logrocket';


export class StorageService {
    client = new Client()
    storage;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
        this.storage = new Storage(this.client)
    }

    async saveFile(file){
        try {
         return    await this.storage.createFile(
                conf.bucketId,
                ID.unique(),
                file,
             [Permission.read(Role.any())]
         )
        }catch (e){
            LogRocket.captureException(e)
        }
    }

     getFilePreview(fileId) {
        try {
            const result = this.storage.getFileView(conf.bucketId, fileId);
            LogRocket.captureException(result);
            return result
        } catch (e) {
            LogRocket.captureException(e);
            return null;
        }
    }


}

const storageServ = new  StorageService()
export default storageServ
