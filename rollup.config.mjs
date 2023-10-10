import jetpack from 'fs-jetpack';
import typescript from 'rollup-plugin-typescript2';
import swc from 'rollup-plugin-swc3';
import builtinModules from 'builtin-modules';

const pkgJson = jetpack.read('package.json', 'json');
const packages = [...Object.keys(pkgJson.dependencies)];

if (jetpack.exists('./dist/package.json')) jetpack.remove('./dist/package.json');
jetpack.copy('./package-dist.json', './dist/package.json');

if (jetpack.exists('./dist/.env')) jetpack.remove('./dist/.env');
jetpack.copy('./.env', './dist/.env');

export default {
	input: './src/index.ts',
	output: {
		file: './dist/bundle.js',
		format: 'cjs',
	},
	plugins: [typescript(), swc({ minify: true })],
	external: [...builtinModules, ...packages],
};
