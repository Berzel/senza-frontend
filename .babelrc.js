module.exports = {
    presets: [
        ['next/babel', 
            { 
                'preset-react': { 
                    runtime: 'automatic' 
                } 
            }
        ]
    ],
    plugins: [
        'babel-plugin-macros', 
        [
            'styled-components', 
            { 
                ssr: true, 
                pure: true, 
                minify: true, 
                fileName: false, 
                preprocess: true, 
                displayName: false, 
                transpileTemplateLiterals: true 
            }
        ]
    ],
}