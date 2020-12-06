const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env) => {
	const isDev = env?.dev === true;

	return {
		mode: isDev ? 'development' : 'production',
		watch: isDev,
		entry: {
			index: [
				'./src/client/index.js',
				'./src/client/style.css'
			]
		},
		resolve: {
			extensions: ['.js'],
			alias: {
				Client: path.resolve(__dirname, 'src', 'client')
			}
		},
		output: {
			path: path.resolve(__dirname, 'dist', 'assets'),
			publicPath: 'assets/',
			filename: '[name].js'
		},
		module: {
			rules: [
				// Vue
				{
					test: /\.vue$/,
					use: 'vue-loader'
				},
				// Babel
				{
					test: /\.js$/,
					use: 'babel-loader',
					exclude: /node_modules/
				},
				// CSS
				{
					test: /\.css$/,
					use: [
						isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader'
					]
				}
			]
		},
		plugins: [
			new VueLoaderPlugin(),
			new MiniCssExtractPlugin({
				filename: 'style.css',
				chunkFilename: '[id].css'
			}),
			new CopyPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, 'html'),
						to: path.resolve(__dirname, 'dist')
					},
					{
						from: path.resolve(__dirname, 'static'),
						to: path.resolve(__dirname, 'dist', 'static')
					}
				]
			})
		],
		optimization: {
			minimize: !isDev,
			minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin({})]
		}
	};
};
