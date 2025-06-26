import { Client, Databases, ID, Query } from "appwrite";
import conf from "../conf/conf";
import LogRocket from 'logrocket';

export class FlashcardService {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.databases = new Databases(this.client);
  }

  async createPredefinedCard({ name, language, definition, level, category, completed }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.predefinedCards,
        ID.unique(),
        {
          name,
          language,
          definition,
          level,
          category,
          completed,
        }
      );
    } catch (error) {
      LogRocket.captureException(error);
    }
  }

  async deletePredefinedCards(documentId) {
    try {
      return await this.databases.deleteDocument(
        conf.databaseId,
        conf.predefinedCards,
        documentId
      );
    } catch (error) {
      LogRocket.captureException(error);
    }
  }

  async updatePredefinedCards({ name, language, definition, level, category, completed, documentId }) {
    try {
      return await this.databases.updateDocument(
        conf.databaseId,
        conf.predefinedCards,
        documentId,
        {
          name,
          language,
          definition,
          level,
          category,
          completed,
        }
      );
    } catch (error) {
      LogRocket.captureException(error);
    }
  }

  async listAllPredefinedFlashcards(category) {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.predefinedCards,
        [Query.equal("category", category)]
      );
    } catch (error) {
      LogRocket.captureException(error);
    }
  }
}
