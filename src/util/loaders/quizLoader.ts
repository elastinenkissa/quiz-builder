import { baseUrl } from '../config/baseApiUrl';

export const quizLoader = async ({ params }) => {
  const quizId = params.id;

  if (quizId === 'new') {
    return {};
  }

  const response = await fetch(`${baseUrl}/quizzes/${quizId}`);

  if (!response.ok) {
    throw { message: `Could not fetch quiz with ID of ${quizId}`, status: 500 };
  }

  return await response.json();
};
