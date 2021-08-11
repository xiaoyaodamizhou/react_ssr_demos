import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'


const config = {
    input: 'index.js',
    output: {
        file: 'bundle.js',
        format: 'cjs',
        sourcemap: true
    }
}

const plugins = [
    nodeResolve(),
    babel({
        exclude: '**/node_modules/**',
        babelHelpers: 'bundled'
    }),
    commonjs()
]

config.plugins = plugins

export default config
