import axios from "axios";

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

interface ITask {
	id: string;
	name: string;
	completed: boolean;
	createdAt: string;
}

export const getTasks = async () => {
	const { data } = await api.get("/Tasks");
	return data as ITask[];
};

export const createTask = async (name: string) => {
	const { data } = await api.post<ITask>("/Tasks", { name });
	return data;
};

export const updateTask = async ({ id, completed }: { id: string; completed: boolean }) => {
	const { data } = await api.put<boolean>("/Tasks/" + id, { completed });
	return data;
};

export const deleteTask = async (id: string) => {
	const { data } = await api.delete<boolean>("/Tasks/" + id, { data: { id } });
	return data;
};

export const checkAllTasks = async (completed: boolean) => {
	const { data } = await api.put<boolean>("/Tasks/CheckAll", { completed });
	return data;
};
