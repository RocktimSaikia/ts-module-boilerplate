import test from 'ava';
import unicornFun from './src';

test('main', t => {
	t.is(unicornFun('unicorns'), 'unicorns & rainbows');
});
