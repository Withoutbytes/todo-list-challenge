import axios from "axios";

export const api = axios.create({
	baseURL: "/api",
});

interface ITask {
	_id: string;
	name: string;
	completed: boolean;
	createdAt: string;
}

export const getTasks = async () => {
	const { data } = await api.get("/tasks");
	return data.tasks as ITask[];
};

export const createTask = async (name: string) => {
	const { data } = await api.post("/tasks", { name });
	return data.task as ITask;
};

export const updateTask = async ({ id, completed }: { id: string; completed: boolean }) => {
	const { data } = await api.put("/tasks", { id, completed });
	return data.task as ITask;
};

export const deleteTask = async (id: string) => {
	const { data } = await api.delete("/tasks", { data: { id } });
	return data.task as ITask;
};

export const checkAllTasks = async (completed: boolean) => {
	const { data } = await api.put("/check-all", { completed });
	return data.tasks as ITask[];
};
