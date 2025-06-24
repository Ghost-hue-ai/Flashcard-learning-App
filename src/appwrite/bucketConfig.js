import conf from '../conf/conf'
import {Client, Storage, ID, Account} from "appwrite";
import {Permission,Role} from "appwrite";


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
            console.log(e)
        }
    }

     getFilePreview(fileId) {
        try {
            const result = this.storage.getFileView(conf.bucketId, fileId);
            console.log("📦 Appwrite result:", result); // <- Add this
            return result
        } catch (e) {
            console.log(e);
            return null;
        }
    }


}

const storageServ = new  StorageService()
export default storageServ