import { MongoClient } from "mongodb";
export async function initDb({
  collection = "todos",
}: { collection?: string } = {}) {
  const uri = process.env.URI;

  if (!uri) throw new Error("No URI found");
  try {
    const client = new MongoClient(uri);
    const connection = await client.connect();
    const data = connection.db("todo").collection(`${collection}`);

    return data;
  } catch (error) {
    throw new Error(`failed to stablishc connection to the DB`);
  }
}

export async function initClientDB() {
  const uri = process.env.URI;

  if (!uri) throw new Error("No URI found");
  try {
    const client = new MongoClient(uri);
    const connection = await client.connect();
    const data = connection.db("todo").collection("users");

    return data;
  } catch (error) {
    throw new Error(`failed to stablishc connection to the DB`);
  }
}
