User.destroy_all
Recipe.destroy_all
Ingredient.destroy_all
Step.destroy_all
RecipeSave.destroy_all
Comment.destroy_all
Rating.destroy_all

User.create({email: 'ben@gmail.com', password: 'starwars', name: 'Benjamin Berman'})
User.create({email: 'mike@gmail.com', password: 'starwars', name: 'Michael Cohen'})
User.create({email: 'david@gmail.com', password: 'starwars', name: 'David Webster'})
User.create({email: 'drew@gmail.com', password: 'starwars', name: 'Drew Nguyen'})
User.create({email: 'zach@gmail.com', password: 'starwars', name: 'Zachary Gardner'})
User.create({email: 'suhan@gmail.com', password: 'starwars', name: 'Suhan Wijaya'})
User.create({email: 'salome@gmail.com', password: 'starwars', name: 'Salome Siavoshi'})
User.create({email: 'mark@nytimes.com', password:'starwars', name: 'Mark Bittman'})
User.create({email: 'melissa@nytimes.com', password:'starwars', name: 'Melissa Clark'})
User.create({email: 'florence@nytimes.com', password:'starwars', name: 'Florence Fabricant'})
User.create({email: 'pierre@nytimes.com', password:'starwars', name: 'Pierre Franey'})
User.create({email: 'ethan@gmail.com', password:'starwars', name: 'Ethan Schneider'})
User.create({email: 'chan@gmail.com', password:'starwars', name: 'Chan Fao'})
User.create({email: 'noe@gmail.com', password:'starwars', name: 'Noe Jimenez'})
User.create({email: 'neil@gmail.com', password:'starwars', name: 'Neil Gerwitz'})
User.create({email: 'chris@gmail.com', password:'starwars', name: 'Chris Lew'})
User.create({email: 'dan@gmail.com', password:'starwars', name: 'Dan Nam'})
User.create({email: 'emily@gmail.com', password:'starwars', name: 'Emily Hansen'})
User.create({email: 'elliot@gmail.com', password:'starwars', name: 'Elliot Grieco'})
User.create({email: 'isaac@gmail.com', password:'starwars', name: 'Isaac Seessel'})
User.create({email: 'isaac@gmail.com', password:'starwars', name: 'Isaac Seessel'})
User.create({email: 'tommy@gmail.com', password:'starwars', name: 'Tommy Ren'})


#Cornbread
feature = Recipe.new({title: 'Brown Butter Skillet Cornbread', yield: '12 servings', time_minutes: 60,
  description: "This lightly sweet cornbread has a crunchy, buttery crust, which comes from baking it in a hot skillet. If you have a cast-iron pan, this is the time to use it. The heavy, heat-retaining material will give you the darkest color (which equals the most flavor). But any large ovenproof skillet will work. And if you don’t have a skillet big enough to hold all the batter, you can either halve the recipe or bake the cornbread in 9-by-13-inch pan. (Brown the butter first in a saucepan.) Your bread won’t have the same dark crust, but the moist crumb flavored with brown butter and maple syrup is ample recompense.",
  author_id: User.first.id, featured: true
  })

feature.image = File.open("app/assets/images/cornbread.png")
feature.save

Ingredient.create!({recipe_id: Recipe.all.last.id, content: "12 tablespoons (1 1/2 sticks)/170 grams unsalted butter", ord: 1})
Ingredient.create!({recipe_id: Recipe.all.last.id, content: "½ cup/120 ml maple syrup", ord: 2})
Ingredient.create!({recipe_id: Recipe.all.last.id, content: "2 ¼ cups/530 ml buttermilk", ord: 3})
Ingredient.create!({recipe_id: Recipe.all.last.id, content: "3 large eggs", ord: 4})
Ingredient.create!({recipe_id: Recipe.all.last.id, content: "1 ½ cups/180 grams yellow cornmeal, fine or medium-coarse grind", ord: 5})
Ingredient.create!({recipe_id: Recipe.all.last.id, content: "½ cup/65 grams whole wheat flour", ord: 6})
Ingredient.create!({recipe_id: Recipe.all.last.id, content: "1 ½ tablespoons/18 grams baking powder", ord: 7})
Ingredient.create!({recipe_id: Recipe.all.last.id, content: "1 ½ teaspoons/9 grams kosher salt", ord: 8})





50.times do
  r = Recipe.new({author_id: User.all.sample.id,
    title: Faker::Food.dish,
    yield: "#{rand(8)+2} servings",
    time_minutes: rand(180),
    description: Faker::Hipster.paragraph(4)
    })

  num = rand(13) + 1
  filePath = "app/assets/images/#{num}.png";
  r.image = File.open(filePath)
  r.save!
end

350.times do
  Ingredient.create!({
    recipe_id: Recipe.all.sample.id,
    content: Faker::Food.ingredient,
    ord: rand(9) + 1
    })
end

350.times do
  Step.create!({
    recipe_id: Recipe.all.sample.id,
    content: Faker::Hipster.paragraph(2),
    ord: rand(9) + 1
    })
end

i = 0
while i < 200
  begin
    RecipeSave.create!({user_id: User.all.sample.id, recipe_id: Recipe.all.sample.id})
    i += 1
  rescue
  end

end

300.times do
  u = User.all.sample

  Comment.create!({user_id: u.id,
    recipe_id: Recipe.all.sample.id,
    comment_name: u.name,
    body: Faker::Lovecraft.paragraph(3)
  })
end

200.times do
  u = User.all.sample


  parent = Comment.all[rand(300)]


  Comment.create!({
    recipe_id: parent.recipe_id,
    user_id: u.id,
    comment_name: u.name,
    parent_id: parent.id,
    body: Faker::Lovecraft.paragraph(2)
  })


end

i = 0
while i < 500
  begin
    Rating.create!({user_id: User.all.sample.id, recipe_id: Recipe.all.sample.id, rating: rand(5) + 1})
    i += 1
  rescue
  end
end
