import { Request } from 'express';
import { logger, closeBrowser } from '../utils';

/**
 * @description - Function to add numbers provided in an array.
 * @param { Array<number> } numbers - Array of numbers.
 * @returns { number } - Return a number which can be integer or float.
 */
export const close = (request: Request): number => {
	const { browser, url } = request.query;
	closeBrowser(browser as string);
	// logger.info(`starting addition...`);
	// let sum = 0;
	// numbers && numbers.map((num) => {
	// 	num = Number(num);
	// 	sum += num;
	// });
	// logger.info(`Finished addition...`);
	return 2;
};
