import {Router} from 'https://deno.land/x/oak@v9.0.1/mod.ts';

class ShoppingCartEntry {
    constructor(public productId: string, public amount: number) {
    }
}

const shoppingCartRouter = new Router();
shoppingCartRouter.put('/shoppingCart', async (context) => {
    const newItem: ShoppingCartEntry = await (await context.request.body({type: "json"})).value;
    const shoppingcart = await context.cookies.get('shoppingcart') || '[]';
    const shoppingCart:ShoppingCartEntry[] = JSON.parse(shoppingcart);
    const entryIndex = shoppingCart.findIndex(entry => entry.productId === newItem.productId);
    if(entryIndex != -1){
        shoppingCart[entryIndex].amount += newItem.amount;
    } else {
        shoppingCart.push(newItem);
    }
    await context.cookies.set('shoppingcart', JSON.stringify(shoppingCart));
}).get('/shoppingCart', async (context) => {
    return await context.cookies.get('shoppingcart') || '[]';
}).get('/shoppingCart/total', async (context) => {
    const shoppingcart = await context.cookies.get('shoppingcart') || '[]';
    const shoppingCart:ShoppingCartEntry[] = JSON.parse(shoppingcart);
    let total:number = 0.0;
    shoppingCart.forEach(entry => {
        total += (await (await fetch(`/api/product/${entry.productId}`)).json()).specialOffer * entry.amount;
    });
    return total;
}).post('/shoppingCart/purchase', async (context) => {
    context.cookies.set('shoppingcart', '[]');
});
export default shoppingCartRouter;

