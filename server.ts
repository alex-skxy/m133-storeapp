import {Application} from 'https://deno.land/x/oak/mod.ts';
import router from './frontend/frontend-routes.ts';
import apiRouter from './backend/productApi.ts';

const app = new Application();
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());
app.use(router.routes());
app.use(router.allowedMethods());
console.log('Server is listening on 8080');
await app.listen({port: 8080});
