import {Router} from 'https://deno.land/x/oak@v9.0.1/mod.ts';

class shoppingCartEntry {
    constructor(public productId: string, public amount: number) {
    }
}

const shoppingCartRouter = new Router();
shoppingCartRouter.put('/shoppingCart', async (context) => {
    const newItem: shoppingCartEntry = await (await context.request.body({type: "json"})).value;
    let shoppingcart = await context.cookies.get('shoppingcart') || '[]';
    await context.cookies.set('shoppingcart', JSON.stringify(
        JSON.parse(shoppingcart).push(newItem)
    ));
});
export default shoppingCartRouter;

