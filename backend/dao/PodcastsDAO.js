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

  static async addPodcast(date, email, Snum) {
    try {
      const podcastDoc = {
        date: date,
        email: email,
        Snum: Snum,
      };
      console.log(podcastDoc);
      return await podcasts.insertOne(podcastDoc);
    } catch (e) {
      console.error(`Unable to post podcast: ${e}`);
      return { error: e };
    }
  }

  static async updatePodcast(Snum) {
    try {
      const updateResponse = await podcasts.updateOne(
        { Snum: Snum },
        { $set: { email: email } }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update podcast: ${e}`);
      return { error: e };
    }
  }

  static async deletePodcast(Snum) {
    try {
      const deleteResponse = await podcasts.deleteOne({
        Snum: Snum,
      });
      console.log(Snum);
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
      if ("Snum" in filters) {
        query = { $text: { $search: filters["Snum"] } };
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
