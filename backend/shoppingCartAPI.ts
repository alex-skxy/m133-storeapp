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
        context.cookies.set('shoppingcart', '[]');
    }
    //TODO: add entry
});
export default shoppingCartRouter;