import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

import { client } from "../../lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "PUT":
			{
				const { completed } = req.body;

				const tasks = await client.db().collection("tasks").updateMany({}, { $set: { completed } });
				res.status(200).json({ tasks });
			}
			break;
	}
};

export default handler;
