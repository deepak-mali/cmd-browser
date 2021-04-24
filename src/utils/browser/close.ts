import { exec } from 'child_process';

export const closeBrowser = (browser: string): void  => {
	exec(`taskkill /F /IM ${browser}.exe`, (error, stderr) => {
			if (error) {
					console.log(`unable to close ${browser} browser. Error: ${error.message}`);
					return;
			}
			if (stderr) {
					console.log(`closed ${browser} browser`);
					return;
			}
	});
}