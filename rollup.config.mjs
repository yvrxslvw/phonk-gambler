import typescript from 'rollup-plugin-typescript2';
import swc from 'rollup-plugin-swc3';
import builtinModules from 'builtin-modules';

export default {
	input: './src/index.ts',
	output: {
		file: './dist/bundle.js',
		format: 'cjs',
	},
	plugins: [typescript(), swc({ minify: true })],
	external: [...builtinModules, 'dotenv', 'discord.js', 'sequelize', 'colorette', '@discordjs/rest'],
};
