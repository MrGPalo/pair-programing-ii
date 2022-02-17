import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
import { conectDB } from './lib/db';
import { ingredients_router } from './routers/ingredients_router';
import { main_router } from './routers/main_router';
import { recipe_router } from './routers/recipe_router';

export const main_app: FastifyPluginAsync = async (app) => {
  conectDB();

  // ALL URL
  // app.register(fastifyCors, {
  //   // put your options here
  // });

  app.register(fastifyCors, {
    origin: (origin, cb) => {
      if (/localhost/.test(origin)) {
        //  Request from localhost will pass
        cb(null, true);
        return;
      }
      // Generate an error on other origins, disabling access
      cb(null, false);
    },
  });

  app.register(main_router);
  app.register(recipe_router, { prefix: '/recipe' });
  app.register(ingredients_router, { prefix: '/ingredients' });
};
