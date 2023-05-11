import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let podcasts;

export default class PodcastsDAO {
  static async injectDB(conn) {
    if (podcasts) {
      return;
    }
    try {
      podcasts = await conn.db(process.env.MYAPP_NS).collection("podcast");
      console.log(podcasts);
    } catch (e) {
      console.error(
        `Unable to establish collection handles in podcastDAO: ${e}`
      );
    }
  }

  static async addPodcast(acc, SnumberRoom, date, email) {
    try {
      const podcastDoc = {
        acc: acc,
        SnumberRoom: SnumberRoom,
        date: date,
        email: email,
      };
      console.log(podcastDoc);
      return await podcasts.insertOne(podcastDoc);
    } catch (e) {
      console.error(`Unable to post podcast: ${e}`);
      return { error: e };
    }
  }

  static async updatePodcast(acc, SnumberRoom) {
    try {
      const updateResponse = await podcasts.updateOne(
        { SnumberRoom: SnumberRoom },
        { $set: { acc: acc } }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update podcast: ${e}`);
      return { error: e };
    }
  }

  static async deletePodcast(SnumberRoom) {
    try {
      const deleteResponse = await podcasts.deleteOne({
        SnumberRoom: SnumberRoom,
      });
      console.log(SnumberRoom);
      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete podcast: ${e}`);
      return { error: e };
    }
  }
  static async getPodcasts({
    filters = null,
    page = 0,
    podcastsPerPage = 100,
  } = {}) {
    let query;
    if (filters) {
      if ("SnumberRoom" in filters) {
        query = { $text: { $search: filters["SnumberRoom"] } };
      }

      let cursor;

      try {
        cursor = await podcasts.find(query);
      } catch (e) {
        console.error(`Unable to issue find command, ${e}`);
        return { podcastsList: [], totalNumPodcasts: 0 }; // si erreur
      }

      const displayCursor = cursor
        .limit(podcastsPerPage)
        .skip(podcastsPerPage * page);

      try {
        const podcastsList = await displayCursor.toArray();

        return { podcastsList };
      } catch (e) {
        console.error(
          `Unable to convert cursor to array or problem counting documents, ${e}`
        );
        return { podcastsList: [], totalNumPodcasts: 0 }; // si erreur
      }
    }
  }
}
