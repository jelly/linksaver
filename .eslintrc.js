module.exports = {
	'env': {
		'es6': true,
		'browser': true
	},
  'globals': {
    'chrome': true
  },
	'extends': 'eslint:recommended',
	'rules': {
		'indent': [
			'error',
			2
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'no-console': 0
	}
}
