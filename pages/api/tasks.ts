import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

import { client } from "../../lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET":
			{
				const tasks = await client.db().collection("tasks").find().toArray();
				res.status(200).json({ tasks });
			}
			break;
		case "POST":
			{
				const { name } = req.body;
				const task = await client
					.db()
					.collection("tasks")
					.insertOne({ name, completed: false, createdAt: new Date() });
				res.status(200).json({ task });
			}
			break;
		case "PUT":
			{
				const { id, completed } = req.body;
				const task = await client
					.db()
					.collection("tasks")
					.updateOne({ _id: new ObjectId(id) }, { $set: { completed } });
				res.status(200).json({ task });
			}
			break;
		case "DELETE":
			{
				const { id } = req.body;
				const task = await client
					.db()
					.collection("tasks")
					.deleteOne({ _id: new ObjectId(id) });
				res.status(200).json({ task });
			}
			break;

		default:
			break;
	}
};

export default handler;
