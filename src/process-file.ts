import { existsSync, readFileSync, statSync } from 'fs';
import { isBinaryFileSync } from 'isbinaryfile';

import { processFileBuffer } from './process-file.buffer';

export function processFile(file: string): string {
	if (!existsSync(file)) {
		console.error(`File '${file}' does not exist.`);
		process.exit(1);
	}

	if (!statSync(file).isFile()) {
		console.error(`File '${file}' is not a file.  It is likely a directory.`);
		process.exit(1);
	}
	const buffer = readFileSync(file);

	if (isBinaryFileSync(buffer)) {
		console.error(`File '${file}' is not a text file.`);
		process.exit(1);
	}

	return processFileBuffer({ buffer, file });
}
