const esbuild = require('esbuild')
const { sassPlugin } = require('esbuild-sass-plugin')
const inlineImage = require('esbuild-plugin-inline-image');

esbuild.build({
    entryPoints: ['src/App.tsx'],
    bundle: true,
    minify: true,
    target: ['esnext'],
    outdir: 'out',
    plugins: [sassPlugin({
        cssImports: true,
        // importMapper: (path) => {
        //     if(path === 'src/globals/global') {
        //         return path.replace(path, './src/globals/global.scss')
        //     }
        //     return path
        // }
    }), inlineImage()]
})
