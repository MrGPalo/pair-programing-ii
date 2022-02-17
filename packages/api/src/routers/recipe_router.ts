/* eslint-disable no-tabs */
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { Recipes } from '../models/Recipe.model';

type Myrequest = FastifyRequest<{
	Body: {
		name: string; instructions: string, price: number, ingredient: {
			name: string, quantity: string
		}
	};
  Params: { id: string };
}>;

export const recipe_router: FastifyPluginAsync = async (app) => {
  // Get all recipe
  app.get('/', async () => {
    const recipe = await Recipes.find().lean();
    return recipe;
  });
  // Create a new ingredient
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const {
      name, instructions, price, ingredient,
    } = request.body;
    const recipe = new Recipes({
      name, instructions, price, ingredient,
    });
    await recipe.save();
    return recipe;
  });
  app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await Recipes.findByIdAndDelete(id);
    return { status: 'delete' };
  });
};
