import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CustomCheckbox from "../components/CustomCheckbox";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

const tasks = [
	{
		id: 1,
		name: "This is task 1",
		completed: false,
	},
	{
		id: 2,
		name: "This is task 2",
		completed: false,
	},
	{
		id: 3,
		name: "This is task 3",
		completed: false,
	},
	{
		id: 4,
		name: "This is task 4",
		completed: false,
	},
	{
		id: 5,
		name: "This is task 5",
		completed: false,
	},
	{
		id: 6,
		name: "This is task 6",
		completed: false,
	},
	{
		id: 7,
		name: "This is task 7",
		completed: false,
	},
	{
		id: 8,
		name: "This is task 8",
		completed: false,
	},
	{
		id: 9,
		name: "This is task 9",
		completed: false,
	},
	{
		id: 10,
		name: "This is task 10",
		completed: false,
	},
];

const Home: NextPage = () => {
	const [allChecked, setAllChecked] = useState(false);
	return (
		<div className="flex w-screen justify-center min-h-screen bg-secondary">
			<div className="container flex flex-col py-4 space-y-6 rounded-b 2xl:max-w-screen-xl bg-common-50 px-10 md:py-8 xl:px-36 mt-32">
				<div>
					<h1 className="text-7xl font-semibold text-primary">TO DO LIST</h1>
				</div>
				<div className="flex items-center">
					<CustomCheckbox checked={allChecked} onChange={(c) => setAllChecked(c)} />
					<input
						type="text"
						placeholder="Type your task"
						className="px-2 py-1 rounded-xl bg-transparent ml-2 border border-tertiary focus:ring-0 w-full"
					/>
					<button className="px-5 py-4 rounded-xl bg-primary text-secondary font-extralight flex items-center">
						Insert <MdOutlineModeEditOutline className="ml-1 w-5 h-5" />
					</button>
				</div>
				<div>
					<ul>
						{tasks.map((t, i) => (
							<li className="flex items-center my-2" key={t.id}>
								<CustomCheckbox checked={t.completed} onChange={(c) => setAllChecked(c)} />
								<input
									disabled
									className="mx-1 px-2 py-1 rounded-xl bg-transparent border border-tertiary focus:ring-0 w-full"
									value={t.name}
								/>

								<button className="bg-quartiary w-10 h-10 rounded-xl inline-flex justify-center items-center shadow-xl">
									<FaTrash className="w-4 h-5" />
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
