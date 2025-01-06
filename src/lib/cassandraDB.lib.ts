import path from 'path';
import cassandra from 'cassandra-driver';
import dotenv from 'dotenv';

dotenv.config();

const secureConnectBundlePath = path.resolve(__dirname, '../secure-connect-chailytics.zip');

if (!process.env.ASTRA_DB_TOKEN) {
  throw new Error('ASTRA_DB_TOKEN is not defined. Please set it in the environment variables.');
}

const authProvider = new cassandra.auth.PlainTextAuthProvider('token', process.env.ASTRA_DB_TOKEN);

const client = new cassandra.Client({
  cloud: { secureConnectBundle: secureConnectBundlePath },
  credentials: { username: process.env.CLIENT_ID!, password: process.env.SECRET! },
});
// const client = new cassandra.Client({
//   cloud: { secureConnectBundle: secureConnectBundlePath },
//   authProvider,
// });

let isConnected = false;

const connectToCassandra = async () => {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
    console.log('Connected to Cassandra');
  }
};

export { client, connectToCassandra };
