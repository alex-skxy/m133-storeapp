import {Router} from 'https://deno.land/x/oak@v9.0.1/mod.ts';

class ShoppingCartEntry {
    constructor(public productId: string, public amount: number) {
    }
}

const shoppingCartRouter = new Router();
shoppingCartRouter.put('/shoppingCart', async (context) => {
    const newItem: ShoppingCartEntry = await (await context.request.body({type: "json"})).value;
    let shoppingcart = await context.cookies.get('shoppingcart') || '[]';
    const shoppingCart:ShoppingCartEntry[] = JSON.parse(shoppingcart);
    const entryIndex = shoppingCart.findIndex(entry => entry.productId === newItem.productId);
    if(entryIndex != -1){
        shoppingCart[entryIndex].amount += newItem.amount;
    } else {
        shoppingCart.push(newItem);
    }
    await context.cookies.set('shoppingcart', JSON.stringify(shoppingCart));
});
export default shoppingCartRouter;

