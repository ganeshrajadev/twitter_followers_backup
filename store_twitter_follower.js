require('dotenv').config(); //Load Env values
const Twitter = require('twitter-lite');
const MongoClient = require('mongodb').MongoClient;

storeFollowersData = async (count) => {
  try {
    const url = process.env.database_url;
    let db = await MongoClient.connect(url, { useUnifiedTopology: true });
    const dbo = db.db('twitter');
    await dbo.collection('twitter_followers').insertOne({ time: Date.now(), count: count });
    db.close();
  } catch (err) {
    console.log(err);
  }
};

const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret,
});

try {
  client.get('account/verify_credentials').then(async (data) => await storeFollowersData(data.followers_count));
} catch (err) {
  console.log(err);
}
