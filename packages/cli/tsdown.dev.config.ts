import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

const config: UserConfig = defineConfig({
	banner: {
		js: "#!/usr/bin/env node"
	},
	clean: false,
	dts: false,
	entry: ["src/index.ts"],
	format: ["esm"],
	platform: "node",
	watch: true
});

export default config;
