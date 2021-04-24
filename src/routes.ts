import * as controller from './app';
import * as validator from './validators';
import { logger } from './utils';

/**
 * @description - API endpoints declarations.
 * @param app - express server.
 */
export const routes = (app) => {
	//Route for addition functionality.
	app.get('/start', validator.launch, (request, response) => {
		logger.info(`Request: start browser.`);
		controller.launch(request);
		logger.info(`Response: start browser.`)
		return response.status(200).json({
		});
	});

	app.get('/stop', validator.close, (request, response) => {
		logger.info(`Request: start browser.`);
		controller.close(request);
		logger.info(`Response: start browser.`)
		return response.status(200).json({
		});
	});

	app.get('/stop', validator.close, (request, response) => {
		logger.info(`Request: start browser.`);
		controller.close(request);
		logger.info(`Response: start browser.`)
		return response.status(200).json({
		});
	});
};
