import { Client, Databases, ID, Permission, Role, Query } from "appwrite";
import conf from "../conf/conf";

export class SubjectService {
  client = new Client();
  databases;
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.databases = new Databases(this.client);
  }

  async createSubject({name,description,userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.subjectCollectionId,
        ID.unique(),
        {
          name,
          description,
          userId,},

        [
          Permission.read(Role.user(userId)),
          Permission.write(Role.user(userId)),
        ]
      );
    } catch (error) {
      console.error("Error creating subject:", error);
    }
  }

  async getAllSubject({ userId }) {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.subjectCollectionId,
        [Query.equal("userId", userId)]
      );
    } catch (error) {
      console.error("Error fetching subject:", error);
    }
  }

  async deleteSubject(documentId) {
    try {
      await this.databases.deleteDocument(
        conf.databaseId,
        conf.subjectCollectionId,
        documentId
      );
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  }

  async updateSubject({name,description,documentId}){
    try {
      await this.databases.updateDocument(
        conf.databaseId,
        conf.subjectCollectionId,
        documentId,
        {
          name,
          description

        }
      );

    } catch (error) {
      console.error('error updating the subject in core level',error);

    }

  }
}

const subject = new SubjectService();
export default subject;
