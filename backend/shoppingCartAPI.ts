import {Router} from 'https://deno.land/x/oak@v9.0.1/mod.ts';

class shoppingCartEntry {
    productId: string;
    amount: number;

    constructor(productId: string, amount: string) {
        this.productId = productId;
        this.amount = amount;
    }
}

const shoppingCartRouter = new Router();
shoppingCartRouter.put('/shoppingCart', async (context) => {
    const newItem: shoppingCartEntry = await context.request.body({type: "json"});
    if((await context.cookies.get('shoppingcart')) === undefined){
        await context.cookies.set('shoppingcart', '[]');
    }
    let shoppingCart = JSON.parse((await context.cookies.get('shoppingcart')) as string);
    //TODO: fix can multiple of the same product
    await shoppingCart.push(shoppingCartEntry);
    context.cookies.set('shoppingcart', shoppingCart.stringify());

});
export default shoppingCartRouter;