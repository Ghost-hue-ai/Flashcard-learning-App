import { Client, Databases, ID, Permission, Role,Query } from "appwrite";
import conf from '../conf/conf'
import LogRocket from 'logrocket';

export class FlashcardService{
    client = new Client()
    databases;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId)
        this.databases= new Databases(this.client)
    }

    async getAllPredefiniedSubjects(){
        try {
            return await this.databases.listDocuments(
                conf.databaseId,
                conf.predefinedsUBJECTS

            )
        } catch (error) {
            LogRocket.captureException(error)
        }
    }
}

const cardsService = new FlashcardService()
export default cardsService
