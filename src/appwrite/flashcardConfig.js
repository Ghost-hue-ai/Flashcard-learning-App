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


    async createFlashcard({question,answer,subjectId,status,userId,name}){
        try {
            return await this.databases.createDocument(
              conf.databaseId,
              conf.flashcardCollectionId,
              ID.unique(),
              {
                question,
                answer,
                subjectId,
                status,
                userId,
                name
              },
              [
                Permission.read(Role.user(userId)),
                Permission.write(Role.user(userId)),
              ]
            );
        } catch (error) {
            LogRocket.captureException(error);

        }


    }


    async getAllFlashcard({userId,subjectId}){
        try {
            return await this.databases.listDocuments(
              conf.databaseId,
              conf.flashcardCollectionId,
              [
                Query.equal("userId", userId),
                Query.equal("subjectId", subjectId),
              ]
            );
        } catch (error) {
            LogRocket.captureException(error);

        }
    }


    async deleteFlashCard(documentId){
        try {
            await this.databases.deleteDocument(
                conf.databaseId,
                conf.flashcardCollectionId,
                documentId

            )

        } catch (error) {
            LogRocket.captureException(error);

        }
    }

    async updateFlashcard({name,question,answer,documentId}){
        try {
            return await this.databases.updateDocument(
              conf.databaseId,
              conf.flashcardCollectionId,
              documentId,
              {
                name,
                question,
                answer
              }
            );

        } catch (error) {
            LogRocket.captureException(error);

        }

    }






}


const flashcard = new FlashcardService()
export default flashcard
