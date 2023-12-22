import { FC, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import QuizQuestionAnswer from "./QuizQuestionAnswer/QuizQuestionAnswer";

import { Question } from "../../../util/types/question";

import classes from "./QuizCardContent.module.css";

interface QuizCardContentProps {
	question: Question;
	currentQuestionIndex: number;
	onAnimationFinish: () => void;
	onAnimationStart: () => void;
}

const QuizCardContent: FC<QuizCardContentProps> = (props) => {
	const [answerIsShown, setAnswerIsShown] = useState<boolean>(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(
		props.currentQuestionIndex
	);
	const [animationDirection, setAnimationDirection] = useState<
		"left" | "right"
	>("left");

	useEffect(() => {
		setAnswerIsShown(false);
	}, [props.question]);

	const animationEnterHandler = () => {
		props.onAnimationStart();

		if (currentQuestionIndex - props.currentQuestionIndex === -1) {
			setAnimationDirection("left");
		}

		if (currentQuestionIndex - props.currentQuestionIndex === 1) {
			setAnimationDirection("right");
		}

		setCurrentQuestionIndex(props.currentQuestionIndex);
	};

	return (
		<div className={classes.container}>
			<TransitionGroup>
				<CSSTransition
					timeout={500}
					classNames={`slide-${animationDirection}`}
					key={props.question.id}
					unmountOnExit
					onEntering={animationEnterHandler}
					onExited={props.onAnimationFinish}
				>
					<div style={{ height: 300, width: 350 }}>
						<h1>Question {props.currentQuestionIndex + 1}</h1>
						<div className={classes.question}>{props.question.content}</div>
						<QuizQuestionAnswer
							answerIsShown={answerIsShown}
							onShowAnswer={() => setAnswerIsShown(true)}
							question={props.question}
						/>
					</div>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
};

export default QuizCardContent;
