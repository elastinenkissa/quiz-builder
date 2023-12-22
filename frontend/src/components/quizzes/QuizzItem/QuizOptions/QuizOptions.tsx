import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router";

import { Delete, Visibility } from "@mui/icons-material";

import ClickableIcon from "../../../shared/ClickableIcon/ClickableIcon";

import { Quiz } from "../../../../util/types/quiz";
import { baseUrl } from "../../../../util/config/baseApiUrl";

import classes from "./QuizOptions.module.css";

interface QuizOptionsProps {
	quiz: Quiz;
	onDelete: (id: string) => void;
}

const QuizOptions: FC<QuizOptionsProps> = (props) => {
	const navigate = useNavigate();

	const displayQuizHandler = (event: MouseEvent) => {
		event.stopPropagation();
		navigate(`/${props.quiz.id}`);
	};

	const editQuizHandler = (event: MouseEvent) => {
		event.stopPropagation();
		navigate(`/manage/${props.quiz.id}`);
	};

	const deleteQuizHandler = async (event: MouseEvent) => {
		event.stopPropagation();
		if (
			window.confirm(
				`Da li si siguran da želiš obrisati kviz ${props.quiz.name} `
			)
		) {
			await fetch(`${baseUrl}/quizzes/${props.quiz.id}`, {
				method: "DELETE"
			});
			props.onDelete(props.quiz.id);
		}
	};

	return (
		<div className={classes.buttons} onClick={editQuizHandler}>
			<ClickableIcon
				onClick={displayQuizHandler}
				icon={<Visibility htmlColor="#ff99cc" fontSize="large" />}
			/>
			<ClickableIcon
				onClick={deleteQuizHandler}
				icon={<Delete htmlColor="#fd6d89" fontSize="large" />}
			/>
		</div>
	);
};

export default QuizOptions;
