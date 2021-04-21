const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {

      const myCookBook = new Cookbook
      const recipeName = 'capuchino'
      const recipeIngs = ['milk','cofee','cream']
      myCookBook.addRecipe(recipeName, recipeIngs)  

      expect(myCookBook.recipes).toEqual({ capuchino: [ 'milk', 'cofee', 'cream' ] })

    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const myCookBook = new Cookbook
      const recipeName = 'capuchino'
      const recipeIngs = ['milk','cofee','cream']
      myCookBook.addRecipe(recipeName, recipeIngs)  
      const myRecipes = myCookBook.listRecipes()


      expect(myRecipes).toEqual([ 'capuchino' ])

    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      const myCookBook = new Cookbook
      const recipeName = 'capuchino'
      const recipeIngs = ['milk','cofee','cream']
      myCookBook.addRecipe(recipeName, recipeIngs)  
      const getMyRecipe = myCookBook.getRecipe(recipeName)


      expect(getMyRecipe).toEqual(['milk','cofee','cream'])

    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

      const myCookBook = new Cookbook
      const recipeName = 'capuchino'
      const recipeIngs = ['milk','cofee','cream']
      myCookBook.addRecipe(recipeName, recipeIngs)  
      const removeMyrecipe = myCookBook.removeRecipe(recipeName)


      expect(myCookBook.recipes).toEqual({})

    });
  });
});
