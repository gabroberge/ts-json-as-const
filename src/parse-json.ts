import json5 from 'json5';
import stringifyObject from 'stringify-object';

export interface ParseJsonContext {
	buffer: Buffer;
	file: string;
}

export interface ParseJsonResult {
	json: unknown;
	serialisedJson: string;
}

export function parseJson({ buffer, file }: ParseJsonContext): ParseJsonResult {
	try {
		const json: unknown = json5.parse(buffer.toString());
		const serialisedJson = stringifyObject(json, {
			indent: '\t',
			inlineCharacterLimit: 80,
			singleQuotes: false,
		});

		return { json, serialisedJson };
	} catch {
		console.error(`File '${file}' is not a valid json file.`);
		process.exit(1);
	}
}
