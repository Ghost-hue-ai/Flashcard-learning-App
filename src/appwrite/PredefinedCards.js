import { Client, Databases, ID, Query } from "appwrite";
import conf from "../conf/conf";

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
      console.error("Failed to create card in predefined collection:", error);
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
      console.error("Failed to delete card from predefined collection:", error);
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
      console.error("Failed to update card in predefined collection:", error);
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
      console.error("Error retrieving predefined flashcards:", error);
    }
  }
}
