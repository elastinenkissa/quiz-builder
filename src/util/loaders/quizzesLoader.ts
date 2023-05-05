import { baseUrl } from '../config/baseApiUrl';

export const quizzesLoader = async () => {
  const response = await fetch(`${baseUrl}/quizzes`);

  if (!response.ok) {
    throw { message: 'Failed to fetch quizzes.', status: 500 };
  }

  return response.json();
};
