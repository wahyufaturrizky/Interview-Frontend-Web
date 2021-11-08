import axios from 'axios';
/**
 * @author wahyu fatur rizki | linkedin.com/in/wahyu-fatur-rizky/
 * @return { obj }
 * Custom Header axios,
 * create from
 * using this function should axios().get(values)
 */

export const RequestPublic = () => {
	return axios.create({
		baseURL: 'https://screening.moduit.id',
		headers: {
			Accept: 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	});
};
