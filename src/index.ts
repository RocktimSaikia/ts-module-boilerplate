'use strict';

function unicornFun(input: string, {postfix = 'rainbows'}: {postfix?: string} = {}): string {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return `${input} & ${postfix}`;
}

export default unicornFun;

// For CommonJS default export support
module.exports = unicornFun;
module.exports.default = unicornFun;
