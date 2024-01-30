import { ObjectId } from "mongodb";
import { initClientDB, initDb } from "../mongo/connection";
import User from "../schemas/user";

export async function getAllTodos() {
  try {
    const data = await initDb();
    // const data = await initDb();
    const arts = await data.find().toArray();
    return arts;
  } catch (error) {
    return { error: `${error} failed to fetch arts` };
  }
}

export async function getTodosById(userId: any) {
  console.log(userId);

  try {
    const data = await initDb();
    const todos = await data.find({ userId: userId }).toArray();
    return todos;
  } catch (error) {
    return { error: `${error}failed to fetch arts` };
  }
}

// export async function postTodo(body: any, userId: any) {
//   try {
//     const data = await initDb();
//     const result = await data.insertOne(body);
//     return result;
//   } catch (err) {
//     return err;
//   }
// }

export async function deleteTodoById(todoId: any) {
  try {
    const data = await initDb();
    console.log(todoId);

    // You can use strings to get the item inside the schema or you can put the array like in the post function.

    const response = await data.updateOne(
      { "todos.todoId": todoId },
      { $pull: { todos: { todoId: todoId } } }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export async function updateTodoById(todoId: any, body: any) {
  try {
    const data = await initDb();
    console.log(todoId);

    const response = await data.updateOne(
      { "todos.todoId": todoId },
      { $set: { "todos.$": body } }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export async function postTodosById(id: any, body: any) {
  try {
    const data = await initDb();

    //Checking if and ID associated exists, if not, add the json with the user ID.
    const matchingId = await data.findOne({ userId: id });
    const firstTime = { userId: id, todos: [body] };

    if (!matchingId) {
      const result = await data.insertOne(firstTime);
      return result;
    }

    // add new todos based on the user id without overwriting existing.

    const response = await data.updateOne(
      { userId: id },
      { $push: { todos: { $each: [body] } } }
    );

    return response;
  } catch (error) {
    return { message: error };
  }
}

// export async function updateReview(id: any, review: any) {
//   try {
//     const data = await initDb();
//     const response = data.updateOne({ _id: new ObjectId(id) }, review);
//     return response;
//   } catch (error) {
//     return { message: error };
//   }
// }

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
