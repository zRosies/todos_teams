import { ObjectId } from "mongodb";
import { initClientDB, initDb } from "../mongo/connection";
import User from "../schemas/user";

export async function getAllProducts() {
  try {
    const data = await initDb();
    // const data = await initDb();
    const arts = await data.find().toArray();
    return arts;
  } catch (error) {
    return { error: `${error} failed to fetch arts` };
  }
}

export async function getProductsById(sellerId: any) {
  try {
    const data = await initDb();
    const arts = await data.find({ sellerId: sellerId }).toArray();
    return arts;
  } catch (error) {
    return { error: `${error}failed to fetch arts` };
  }
}

export async function postArtProduct(body: any) {
  try {
    const data = await initDb();
    const result = await data.insertOne(body);
    return result;
  } catch (err) {
    return err;
  }
}

export async function deleteProductsById(id: any) {
  try {
    const data = await initDb();
    const response = await data.deleteOne({ _id: new ObjectId(`${id}`) });

    console.log(response);

    return response;
  } catch (error) {
    return error;
  }
}

export async function updateProductsById(id: any, body: any) {
  try {
    const data = await initDb();
    const response = await data.replaceOne(
      { _id: new ObjectId(`${id}`) },
      body
    );

    console.log(response);

    return response;
  } catch (error) {
    return { message: error };
  }
}

export async function updateReview(id: any, review: any) {
  try {
    const data = await initDb();
    const response = data.updateOne({ _id: new ObjectId(id) }, review);
    return response;
  } catch (error) {
    return { message: error };
  }
}

export async function insertCredentialsInMongo({
  user,
  account,
}: {
  user: any;
  account: any;
}) {
  const db = await initClientDB();

  try {
    const existingUser = await db.findOne({ email: user.email });

    if (!existingUser) {
      const newUser = new User({
        email: user.email,
        id: user.id,
      });

      await db.insertOne(newUser);
      return true;
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
