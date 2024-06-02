import type { GetFormattedOutputsContext } from './types/get-formatted-outputs-context.type';

export function getConstFormattedOutputs({ serialisedJson, typeName }: GetFormattedOutputsContext): string[] {
	return [`declare const ${typeName} = ${serialisedJson};`, `export = ${typeName};`];
}
