# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

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

Recipe.destroy_all
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

Ingredient.destroy_all
350.times do
  Ingredient.create!({
    recipe_id: Recipe.all.sample.id,
    content: Faker::Food.ingredient,
    ord: rand(9) + 1
    })
end

Step.destroy_all
350.times do
  Step.create!({
    recipe_id: Recipe.all.sample.id,
    content: Faker::Hipster.paragraph(2),
    ord: rand(9) + 1
    })
end

RecipeSave.destroy_all
i = 0
while i < 100
  begin
    RecipeSave.create({user_id: User.all.sample.id, recipe_id: Recipe.all.sample.id})
    i += 1
  rescue
  end

end

Comment.destroy_all
300.times do
  u = User.all.sample

  Comment.create!({user_id: u.id,
    recipe_id: Recipe.all.sample.id,
    comment_name: u.name,
    body: Faker::Lovecraft.paragraph(3)
  })

end
