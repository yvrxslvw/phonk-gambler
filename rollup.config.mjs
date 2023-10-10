import jetpack from 'fs-jetpack';
import typescript from 'rollup-plugin-typescript2';
import swc from 'rollup-plugin-swc3';
import builtinModules from 'builtin-modules';

const pkgJson = jetpack.read('package.json', 'json');
const packages = [...Object.keys(pkgJson.dependencies)];
const jsonFile = {
	name: pkgJson.name,
	version: pkgJson.version,
	description: pkgJson.description,
	scripts: {
		start: 'node bundle',
	},
	author: pkgJson.author,
	license: pkgJson.license,
	private: pkgJson.private,
	dependencies: pkgJson.dependencies,
};

const distPackagePath = './dist/package.json';
const distEnvPath = './dist/.env';

const input = './src/index.ts';
const output = {
	file: './dist/bundle.js',
	format: 'cjs',
};

if (jetpack.exists('./dist')) jetpack.remove('./dist');

jetpack.write(distPackagePath, jsonFile);
jetpack.copy('./.env', distEnvPath);

export default {
	input,
	output,
	plugins: [typescript(), swc({ minify: true })],
	external: [...builtinModules, ...packages],
};
