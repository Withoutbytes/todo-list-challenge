import { AiOutlineCheck } from "react-icons/ai";
import classNames from "classnames";

interface CustomCheckboxProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange }) => {
	return (
		<button
			className={classNames(
				"bg-tertiary rounded-lg w-8 h-8 items-center inline-flex justify-center shadow-xl"
			)}
			onClick={() => onChange(!checked)}
		>
			{checked && <AiOutlineCheck className={classNames("text-black")} />}
		</button>
	);
};

export default CustomCheckbox;
