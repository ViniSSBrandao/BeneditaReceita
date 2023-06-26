import { PrismaClient } from '../node_modules/.prisma/client/index';

const prisma = new PrismaClient();

async function main() {
  let user = await prisma.user.findFirst();
  if (!user) {
    user = await prisma.user.create({
      data: {
        id: 1,
        name: 'anon',
        image: 'https://upload.wikimedia.org/wikipedia/pt/0/04/Wojak.jpg',
        email: 'test@gmail.com',
        password: '123456',
      },
    });
  }

  const Recipe = await prisma.recipe.create({
    data: {
      name: 'hamburguer delicioso',
      Description: 'hamburguer delicioso',
      img: 'https://cdn.casaeculinaria.com/wp-content/uploads/2023/04/05163949/Hamburguer-artesanal.webp',
    },
  });

  const ingredient1 = await prisma.ingredients.create({
    data: {
      RecipeId: Recipe.id,
      quantity: 1,
      name: 'Pão',
      measureUnit: 'unidade',
    },
  });

  const ingredient2 = await prisma.ingredients.create({
    data: {
      RecipeId: Recipe.id,
      quantity: 1,
      name: 'queijo',
      measureUnit: 'unidade',
    },
  });

  const ingredient3 = await prisma.ingredients.create({
    data: {
      RecipeId: Recipe.id,
      quantity: 1,
      name: 'carne para hamburguer',
      measureUnit: 'unidade',
    },
  });

  const step1 = await prisma.steps.create({
    data: {
      RecipeId: Recipe.id,
      Description: 'corte o pao',
      img: 'https://images.food52.com/It1IB4kY0ZdN4Icguvp0ZcAV4rg=/1200x900/29a4e008-ae77-4089-b44e-e10b63192c0f--2017_0822_EmilyDryden_EDIT_a-better-way-to-slice-bread_036.jpg',
      step: 1,
    },
  });

  const step2 = await prisma.steps.create({
    data: {
      RecipeId: Recipe.id,
      Description: 'coloque o queijo',
      img: 'https://cdn.shariblogs.com/how_many_slices_of_cheese_do_you_put_in_grilled_cheese.jpg',
      step: 2,
    },
  });
  const step3 = await prisma.steps.create({
    data: {
      RecipeId: Recipe.id,
      Description:
        'Asse a carne ate dourar de ambos os lados (aproximadamente 1 min e 30 segundos por lado apos a panela estar quente)',
      img: 'https://www.jessicagavin.com/wp-content/uploads/2020/03/stovetop-burgers-5-600x900.jpg',
      step: 3,
    },
  });
  const step4 = await prisma.steps.create({
    data: {
      RecipeId: Recipe.id,
      Description: 'Junte tudo agora e saboreie seu delicioso sanduiche',
      img: 'https://www.bobs.com.br/media/filer_public_thumbnails/filer_public/a5/0a/a50ae724-57c9-4ed0-922e-c5434576689b/036_bobs_altualizacao_cardapio_site_610x400_cheeseburguer.png__1200x630_subsampling-2_upscale.png',
      step: 4,
    },
  });

  console.log({ user });
  console.log({ Recipe });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
