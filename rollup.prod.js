import dev from './rollup.dev.js';

import uglify from 'rollup-plugin-uglify-es';

dev.plugins.push(uglify());

export default dev;
