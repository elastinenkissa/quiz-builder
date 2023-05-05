import { FC, useState, useEffect } from 'react';

import { Add } from '@mui/icons-material';

import Card from '../../../shared/Card/Card';
import QuestionContainer from '../QuestionContainer/QuestionContainer';
import ClickableIcon from '../../../shared/ClickableIcon/ClickableIcon';
import NewManualQuesiton from './NewManualQuestion/NewManualQuestion';
import NewExistingQuestion from './NewExistingQuesiton/NewExistingQuesiton';

import { Question } from '../../../../util/types/question';
import { baseUrl } from '../../../../util/config/baseApiUrl';

import classes from './ManageQuizSelection.module.css';

interface ManageQuizSelectionProps {
  onAddQuestion: (question: Question) => void;
  questions: Array<Question>;
}

const ManageQuizSelection: FC<ManageQuizSelectionProps> = (props) => {
  const [initialQuestions, setInitialQuestions] = useState<Array<Question>>([]);
  const [questions, setQuestions] = useState<Array<Question>>([]);

  const [newQuestionQuestion, setNewQuestionQuestion] = useState<string>('');
  const [newQuestionAnswer, setNewQuestionAnswer] = useState<string>('');
  const [existingQuestionId, setExistingQuestionId] = useState<string>('');

  const [addButtonIsHovered, setAddButtonIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(`${baseUrl}/questions`);

      if (!response.ok) {
        throw { message: 'Failed to fetch questions.', status: 500 };
      }

      const fetchedQuestions: Array<Question> = await response.json();

      setInitialQuestions(
        fetchedQuestions.filter(
          (fetchedQuestion) =>
            !props.questions.some(
              (question) => question.id === fetchedQuestion.id
            )
        )
      );
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    setQuestions(
      initialQuestions.filter(
        (prevQuestion) =>
          !props.questions.some((question) => question.id === prevQuestion.id)
      )
    );
  }, [props.questions, initialQuestions]);

  const isNewQuestion = existingQuestionId?.length === 0;

  const isExistingQuesiton =
    newQuestionAnswer.length === 0 && newQuestionQuestion.length === 0;

  const newQuestionHandler = () => {
    const existingQuestion = questions.find(
      (question) => question.id === +existingQuestionId
    );

    if (existingQuestion) {
      props.onAddQuestion(existingQuestion);
    }

    if (!existingQuestion) {
      const newQuestion = new Question(newQuestionQuestion, newQuestionAnswer);
      props.onAddQuestion(newQuestion);
    }

    setNewQuestionQuestion('');
    setNewQuestionAnswer('');
    setExistingQuestionId('');
  };

  return (
    <div className={classes.container}>
      <QuestionContainer>
        {isNewQuestion && (
          <NewManualQuesiton
            question={newQuestionQuestion}
            answer={newQuestionAnswer}
            onInputAnswer={(value) => setNewQuestionAnswer(value)}
            onInputQuestion={(value) => setNewQuestionQuestion(value)}
          />
        )}
        {isNewQuestion && isExistingQuesiton && (
          <div className={classes.verticalLine}></div>
        )}
        {isExistingQuesiton && (
          <NewExistingQuestion
            questionId={existingQuestionId}
            questions={questions}
            onQuestionSelect={(questionId) => setExistingQuestionId(questionId)}
          />
        )}
      </QuestionContainer>
      {((isNewQuestion &&
        newQuestionAnswer.length > 0 &&
        newQuestionQuestion.length > 0) ||
        (!isNewQuestion && isExistingQuesiton)) && (
        <ClickableIcon
          onHoverOver={() => setAddButtonIsHovered(true)}
          onHoverOut={() => setAddButtonIsHovered(false)}
          onClick={newQuestionHandler}
          icon={
            <Card
              style={{
                width: 100,
                height: 30,
                zIndex: 1,
                backgroundColor: 'violet',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                transform: `translateY(${addButtonIsHovered ? '-5' : '-23'}px)`,
                transition: 'transform 500ms'
              }}
            >
              <Add />
            </Card>
          }
        />
      )}
    </div>
  );
};

export default ManageQuizSelection;
