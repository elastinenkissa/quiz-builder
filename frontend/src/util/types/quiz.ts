import { Question } from "./question";

export interface Quiz {
	id: string;
	name: string;
	questions: Array<Question>;
}
