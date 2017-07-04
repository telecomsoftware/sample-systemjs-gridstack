async function testGridStack() {
    let mGridstack = await SystemJS.import('gridstack');
    console.debug('Imported GridStack', mGridstack);
    let mPlugin = await SystemJS.import('gridstack/dist/gridstack.jQueryUi.js');
    console.debug('Imported GridStack DnD Pluging', mPlugin);

    $(function () {
        let options = {
            alwaysShowResizeHandle: true,
            verticalMargin: 4
        };
        $('.grid-stack').gridstack(options);
        console.debug('GridStack initialized');
    });
}

testGridStack();