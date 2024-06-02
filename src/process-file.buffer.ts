import inflection from 'inflection';
import path from 'path';

import { getConstFormattedOutputs } from './get-const-formatted-outputs';
import { getJsonFormattedOutputs } from './get-json-formatted-outputs';
import { parseJson } from './parse-json';

export interface ProcessBufferContext {
	buffer: Buffer;
	file: string;
}

export function processFileBuffer({ buffer, file }: ProcessBufferContext): string {
	const { json, serialisedJson } = parseJson({ buffer, file });
	const name = path.basename(file);
	const typeName = inflection.camelize(name.includes('.') ? name.slice(0, name.indexOf('.')) : name);
	const declarationType = typeof json === 'object' ? 'type' : 'const';
	switch (declarationType) {
		case 'const':
			return getConstFormattedOutputs({ serialisedJson, typeName }).join('\n');
		case 'type':
			return getJsonFormattedOutputs({ serialisedJson, typeName }).join('\n');
	}
}
