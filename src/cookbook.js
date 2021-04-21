class Cookbook {
  constructor() {
    this.recipes = {};
  }

  addRecipe(name, ingredients) {
    this.recipes[name] = ingredients;
  }

  listRecipes() {
    return Object.keys(this.recipes);
  };

  getRecipe(name) {
    return this.recipes[name];
  }

  removeRecipe(name) {
    delete this.recipes[name];
    return `${name} deleted`
  }
}

module.exports = { Cookbook };

// const myCookBook = new Cookbook
// myCookBook.addRecipe('capuchino',['milk','cofee','cream'])
// // myCookBook.addRecipe('black coffe',['water','cofee','sugar'])


// console.log(myCookBook.recipes['capuchino'].join(', '))


// console.log(myCookBook.getRecipe('capuchino'))
// console.log(myCookBook.listRecipes())

// // console.log(myCookBook.removeRecipe('capuchino'))
// // console.log(myCookBook.listRecipes())
// // const myCookBook = new Cookbook
// // const recipeName = 'capuchino'
// // const recipeIngs = ['milk','cofee','cream']
// // myCookBook.addRecipe(recipeName, recipeIngs)  
// // console.log(myCookBook.recipes)
// // console.log(recipeName, recipeIngs)
