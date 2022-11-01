import type { NextPage } from "next";
import CustomCheckbox from "../components/CustomCheckbox";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useRef } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as api from "../lib/api";
import { Grid } from "react-loader-spinner";
import { toast } from "react-toastify";

const Home: NextPage = () => {
	const refTaskInputName = useRef<HTMLInputElement>(null);
	const {
		isLoading: isTasksLoading,
		data: tasks,
		refetch: refetchTasks,
	} = useQuery(["tasks"], () => api.getTasks(), {
		onError: (error) => {
			toast.error("Erro ao carregar tarefas");
		},
	});
	const { mutate: createTask } = useMutation(api.createTask, {
		onSuccess: () => refetchTasks(),
		onError: (error) => {
			toast.error("Erro ao criar tarefa");
		},
	});
	const { mutate: updateTask } = useMutation(api.updateTask, {
		onSuccess: () => refetchTasks(),
		onError: (error) => {
			toast.error("Erro ao atualizar tarefa");
		},
	});
	const { mutate: deleteTask } = useMutation(api.deleteTask, {
		onSuccess: () => refetchTasks(),
		onError: (error) => {
			toast.error("Erro ao deletar tarefa");
		},
	});
	const { mutate: checkAllTasks } = useMutation(api.checkAllTasks, {
		onSuccess: () => refetchTasks(),
		onError: (error) => {
			toast.error("Erro ao marcar todas as tarefas");
		},
	});

	const handleCraeteTask = async () => {
		const taskName = refTaskInputName.current?.value;
		if (taskName) {
			await createTask(taskName);
			refTaskInputName.current!.value = "";
		}
	};

	return (
		<div className="fixed flex justify-center w-screen min-h-screen bg-secondary">
			<div className="container flex flex-col px-10 py-4 mt-32 space-y-6 rounded-b 2xl:max-w-screen-xl bg-common-50 md:py-8 xl:px-36">
				<div>
					<h1 className="font-semibold text-7xl text-primary">TO DO LIST</h1>
				</div>

				{isTasksLoading || !tasks ? (
					<>
						<Grid
							height="80"
							width="80"
							color="#4fa94d"
							ariaLabel="grid-loading"
							radius="12.5"
							wrapperStyle={{}}
							wrapperClass=""
							visible={true}
						/>
					</>
				) : (
					<>
						<div className="flex items-center">
							<CustomCheckbox
								checked={tasks.every((v) => v.completed === true)}
								onChange={(c) => checkAllTasks(c)}
							/>
							<input
								type="text"
								placeholder="Type your task"
								className="w-full px-2 py-1 ml-2 bg-transparent border rounded-xl border-tertiary focus:ring-0"
								ref={refTaskInputName}
							/>
							<button
								className="flex items-center px-5 py-4 rounded-xl bg-primary text-secondary font-extralight"
								onClick={handleCraeteTask}
							>
								Insert <MdOutlineModeEditOutline className="w-5 h-5 ml-1" />
							</button>
						</div>
						<div>
							<ul>
								{tasks.map((t, i) => (
									<li className="flex items-center my-2" key={t.id}>
										<CustomCheckbox
											checked={t.completed}
											onChange={(c) =>
												updateTask({
													id: t.id,
													completed: c,
												})
											}
										/>
										<input
											disabled
											className="w-full px-2 py-1 mx-1 bg-transparent border rounded-xl border-tertiary focus:ring-0"
											value={t.name}
										/>

										<button
											className="inline-flex items-center justify-center w-10 h-10 shadow-xl bg-quartiary rounded-xl"
											onClick={() => deleteTask(t.id)}
										>
											<FaTrash className="w-4 h-5" />
										</button>
									</li>
								))}
							</ul>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
