import { writeFileSync } from "fs";

import { processFile } from "./process-file";

function main(): void {
	for (const file of process.argv.slice(2)) {
		const fileOutput = processFile(file);
		console.info(`Writing ${file}.d.ts`);
		writeFileSync(`${file}.d.ts`, fileOutput);
	}
}

main();
