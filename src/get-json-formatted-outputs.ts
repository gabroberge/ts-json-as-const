import type { GetFormattedOutputsContext } from './types/get-formatted-outputs-context.type';

export function getJsonFormattedOutputs({ serialisedJson, typeName }: GetFormattedOutputsContext): string[] {
	return [
		`export type ${typeName} = ${serialisedJson};`,
		`declare const ${typeName}: ${typeName};`,
		`export = ${typeName};`,
	];
}
