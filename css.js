const fs = require('fs');
const postcss = require('postcss');

const cssFile = fs.readdirSync('./build/static/css/').find(file => file.endsWith('.css'));
fs.readFile(`./build/static/css/${cssFile}`, (err, css) => {
    postcss([
        root => {
            root.walkRules(rule => {
                if (!rule.parent || (rule.type !== 'atrule' && rule.parent.name !== 'keyframes' && rule.parent.name !== '-webkit-keyframes')) {
                    rule.selectors = rule.selectors.map(selector => {
                        return `#root ${selector}`;
                    });
                }
            });
        }
    ])
    .process(css, {
        from: cssFile,
        to: 'main.css'
    })
    .then(result => {
        fs.writeFile('./build/static/css/main.css', result.css, () => true);
        console.log('CSS isolated into main.css')
    });
});