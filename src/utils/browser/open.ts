import { exec } from 'child_process';

export const launchBrowser = (browser: string, url: string): void  => {
	exec(`start ${browser} "${url}"`, (error, stdout, stderr) => {
			if (error) {
					console.log(`unable to launch ${browser} browser. Error: ${error.message}`);
					return;
			}
			if (stderr) {
					console.log(`launched ${browser} browser`);
					return;
			}
	});
}
