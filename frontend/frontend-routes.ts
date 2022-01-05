import {Router} from 'https://deno.land/x/oak/mod.ts';

async function getFile(path: string) {
    return await Deno.readFile(path);
}

function renderFile(mainFile: string, subPage: string) {
    return mainFile.replace('<app-root/>', subPage);
}

const router = new Router();

router.get('/', async (ctx) => {
    const template = new TextDecoder().decode(await getFile('./frontend/files/template.html'));
    const file = new TextDecoder().decode(await getFile('./frontend/files/home.html'));
    console.log(renderFile(template, file));
    ctx.response.body = renderFile(template, file);
});

router.get('/product/:id', async (ctx) => {
    const template = new TextDecoder().decode(await getFile('./frontend/files/template.html'));
    const file = new TextDecoder().decode(await getFile('./frontend/files/product.html'));
    ctx.response.body = renderFile(template, file);
});

router.get('/shoppingcart', async (ctx) => {
    const template = new TextDecoder().decode(await getFile('./frontend/files/template.html'));
    const file = new TextDecoder().decode(await getFile('./frontend/files/shoppingcart.html'));
    ctx.response.body = renderFile(template, file);
});

router.get('/checkout', async (ctx) => {
    const template = new TextDecoder().decode(await getFile('./frontend/files/template.html'));
    const file = new TextDecoder().decode(await getFile('./frontend/files/checkout.html'));
    ctx.response.body = renderFile(template, file);
});


router.get('/index.js', async (ctx) => {
    ctx.response.headers.set('Content-Type', 'application/javascript');
    ctx.response.body = await getFile('./frontend/files/script.js');
});

router.get('/style.css', async (ctx) => {
    ctx.response.body = await getFile('./frontend/files/style.css');
});

export default router;
