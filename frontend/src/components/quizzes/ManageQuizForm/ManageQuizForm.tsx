import { FC, FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Save } from "@mui/icons-material";

import Card from "../../shared/Card/Card";
import ManageQuizName from "./ManageQuizName/ManageQuizName";
import ClickableIcon from "../../shared/ClickableIcon/ClickableIcon";
import ManageQuizSelection from "./ManageQuizSelection/ManageQuizSelection";
import Questions from "./Questions/Questions";

import { Quiz } from "../../../util/types/quiz";
import { Question } from "../../../util/types/question";
import { baseUrl } from "../../../util/config/baseApiUrl";

import classes from "./ManageQuizForm.module.css";

interface ManageQuizFormProps {
	quiz: Quiz;
}

const ManageQuizForm: FC<ManageQuizFormProps> = (props) => {
	const [name, setName] = useState<string>(props.quiz.name || "New Quiz");
	const [questions, setQuestions] = useState<Array<Question>>(
		props.quiz.questions || []
	);

	const navigate = useNavigate();

	const { id } = useParams();

	const saveQuizHandler = async (event: FormEvent) => {
		event.preventDefault();

		await fetch(`${baseUrl}/quizzes/${id === "new" ? "" : id!}`, {
			method: id === "new" ? "POST" : "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name,
				questions
			})
		});

		navigate("/");
	};

	const addQuestionHandler = (question: Question) => {
		setQuestions((prevQuestions) => prevQuestions.concat(question));
	};

	const removeQuestionHandler = (questionId: string) => {
		setQuestions((prevQuestions) =>
			prevQuestions.filter((question) => question.id !== questionId)
		);
	};

	return (
		<Card
			style={{
				width: "80vw",
				padding: "3rem",
				height: "fit-content",
				maxHeight: "150vh",
				marginTop: "10rem",
				marginBottom: "10rem",
				backgroundColor: "#a1c8e5",
				overflow: "scroll"
			}}
			className={classes.container}
		>
			<form onSubmit={saveQuizHandler} className={classes.form}>
				<ManageQuizName
					quizName={name}
					onChangeName={(newName) => setName(newName)}
				/>
				<hr />
				<div className={classes.main}>
					<Questions
						questions={questions}
						onRemoveQuestion={removeQuestionHandler}
					/>
					<ManageQuizSelection
						onAddQuestion={addQuestionHandler}
						questions={questions}
					/>
					<ClickableIcon
						submit
						icon={
							<Save
								sx={{ fontSize: 70, marginTop: "2rem", marginBottom: "3rem" }}
							/>
						}
						onClick={() => {
							return;
						}}
					/>
				</div>
			</form>
		</Card>
	);
};

export default ManageQuizForm;
