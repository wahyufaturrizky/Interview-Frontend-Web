import { RequestPublic } from './headerRequest';
/**
 * @author wahyu fatur rizki (+62 822 7458 6011)
 * @return { obj }
 */

export const getQuestionOneFrontEnd = () => {
	const response = RequestPublic().get('/frontend/web/question/one');
	return response;
};
