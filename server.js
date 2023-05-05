import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.get('/quizzes', (req, res) => {
  const quizzes = router.db.get('quizzes');

  res.status(200).json(quizzes);
});

server.get('/quizzes/:id', (req, res) => {
  const quizzes = router.db.get('quizzes').value();
  const quiz = quizzes.find(
    (existingQuiz) => existingQuiz.id === +req.params.id
  );

  res.status(200).json(quiz);
});

server.post('/quizzes', (req, res) => {
  const { name, questions } = req.body;

  const quizId = Math.floor(Math.random() * 2000000000000000);
  const newQuiz = { id: quizId, name, questions: [] };

  for (let i = 0; i < questions.length; i++) {
    const questionId = Math.floor(Math.random() * 1000000000000000);
    const newQuestion = { id: questionId, ...questions[i] };
    newQuiz.questions.push(newQuestion);
    if (!questions[i].id) {
      router.db.get('questions').push(newQuestion).write();
    }
  }

  router.db.get('quizzes').push(newQuiz).write();

  res.status(201).json({ message: 'Quiz saved successfully.' });
});

server.delete('/quizzes/:id', (req, res) => {
  const quizIndex = router.db
    .get('quizzes')
    .findIndex({ id: req.params.id })
    .value();

  router.db.get('quizzes').splice(quizIndex, 1).write();

  res.sendStatus(204);
});

server.put('/quizzes/:id', (req, res) => {
  const quizzes = router.db.get('quizzes').value();
  const quizIndex = router.db
    .get('quizzes')
    .findIndex({ id: +req.params.id })
    .value();

  const updatingQuiz = quizzes[quizIndex];

  const newQuiz = { id: updatingQuiz.id, name: req.body.name, questions: [] };

  router.db.get('quizzes').splice(quizIndex, 1, newQuiz).write();

  for (let i = 0; i < req.body.questions.length; i++) {
    const questionId = Math.floor(Math.random() * 1000000000000000);
    const newQuestion = { id: questionId, ...req.body.questions[i] };
    newQuiz.questions.push(newQuestion);
    if (!req.body.questions[i].id) {
      router.db.get('questions').push(newQuestion).write();
    }
  }

  res.status(201).json({ message: 'Successfully updated quiz.' });
});

server.get('/questions', (req, res) => {
  const questions = router.db.get('questions');

  res.status(200).json(questions);
});

server.listen(3001, () => {
  console.log('JSON Server is running');
});
