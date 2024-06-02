# ts-json-as-const

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/gabroberge/ts-json-as-const/LICENSE)

[![Server checks](https://github.com/gabroberge/ts-json-as-const/actions/workflows/ci.yml/badge.svg)](https://github.com/gabroberge/ts-json-as-const/actions/workflows/ci.yml)

## Installation

Install with pnpm

```bash
pnpm add @gabroberge/ts-json-as-const
```

Install with yarn

```bash
yarn add @gabroberge/ts-json-as-const
```

Install with npm

```bash
npm install --save @gabroberge/ts-json-as-const
```

## Usage

```sh
npx ts-json-as-const [path/to/json/file.json ...]
```

```sh
pnpm dlx ts-json-as-const [path/to/json/file.json ...]
```

## Examples

### Input `example.json`

```json
{
	"compilerOptions": {
		"target": "es2016",
		"module": "commonjs",
		"strict": true,
		"esModuleInterop": true,
		"skipLibCheck": true,
		"forceConsistentCasingInFileNames": true
	}
}
```

### Output `example.json.d.ts`

```ts
export type Tsconfig = {
	compilerOptions: {
		target: 'es2016';
		module: 'commonjs';
		strict: true;
		esModuleInterop: true;
		skipLibCheck: true;
		forceConsistentCasingInFileNames: true;
	};
};
declare const Tsconfig: Tsconfig;
export = Tsconfig;
```

### Input `array.json`

```json
[
	{
		"name": "John",
		"age": 30,
		"cars": [
			{
				"name": "Ford",
				"models": [{ "name": "Fiesta" }, { "name": "Focus" }]
			},
			{
				"name": "BMW",
				"models": [{ "name": "320" }, { "name": "X3" }]
			},
			{
				"name": "Fiat",
				"models": [{ "name": "500" }, { "name": "Panda" }]
			}
		]
	}
]
```

### Output `array.json.d.ts`

```ts
export type Array = [
	{
		name: 'John';
		age: 30;
		cars: [
			{ name: 'Ford'; models: [{ name: 'Fiesta' }, { name: 'Focus' }] },
			{ name: 'BMW'; models: [{ name: '320' }, { name: 'X3' }] },
			{ name: 'Fiat'; models: [{ name: '500' }, { name: 'Panda' }] },
		];
	},
];
declare const Array: Array;
export = Array;
```

## Authors

👤 **Gabriel Roberge**

-   Github: [@gabroberge](https://github.com/gabroberge)

👤 **Bethany Hitch** (Original Author)

-   Github: [@dfoverdx](https://github.com/dfoverdx)
