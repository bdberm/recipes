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
num_users = User.all.length

#Cornbread
feature = Recipe.new({title: 'Brown Butter Skillet Cornbread', yield: '12 servings', time_minutes: 60,
  description: "This lightly sweet cornbread has a crunchy, buttery crust, which comes from baking it in a hot skillet. If you have a cast-iron pan, this is the time to use it. The heavy, heat-retaining material will give you the darkest color (which equals the most flavor). But any large ovenproof skillet will work. And if you don’t have a skillet big enough to hold all the batter, you can either halve the recipe or bake the cornbread in 9-by-13-inch pan. (Brown the butter first in a saucepan.) Your bread won’t have the same dark crust, but the moist crumb flavored with brown butter and maple syrup is ample recompense.",
  author_id: User.first.id, featured: true
  })

feature.image = File.open("app/assets/images/cornbread.jpg")
feature.save

Ingredient.create!({recipe_id: feature.id, content: "12 tablespoons (1 1/2 sticks)/170 grams unsalted butter", ord: 1})
Ingredient.create!({recipe_id: feature.id, content: "½ cup/120 ml maple syrup", ord: 2})
Ingredient.create!({recipe_id: feature.id, content: "2 ¼ cups/530 ml buttermilk", ord: 3})
Ingredient.create!({recipe_id: feature.id, content: "3 large eggs", ord: 4})
Ingredient.create!({recipe_id: feature.id, content: "1 ½ cups/180 grams yellow cornmeal, fine or medium-coarse grind", ord: 5})
Ingredient.create!({recipe_id: feature.id, content: "½ cup/65 grams whole wheat flour", ord: 6})
Ingredient.create!({recipe_id: feature.id, content: "1 ½ tablespoons/18 grams baking powder", ord: 7})
Ingredient.create!({recipe_id: feature.id, content: "1 ½ teaspoons/9 grams kosher salt", ord: 8})
Ingredient.create!({recipe_id: feature.id, content: "½ teaspoon/5 grams baking soda", ord: 9})

Step.create!({recipe_id: feature.id,content: "Heat oven to 375 degrees. On the stovetop, in a 11- or 12-inch skillet (ovenproof and preferably cast iron), melt the butter over medium heat. Cook, swirling pan to lightly coat sides and bottom, until the foam subsides and the butter turns a deep nut brown. (Watch carefully to see that it does not burn.)",ord: 1})
Step.create!({recipe_id: feature.id,content: "Pour brown butter into a large bowl. (Do not wipe out the pan.) Whisk the maple syrup into the butter, then whisk in buttermilk. The mixture should be cool to the touch; if not, let cool before whisking in the eggs. Then whisk in the cornmeal, flours, baking powder, salt and baking soda.",ord: 2})
Step.create!({recipe_id: feature.id,content: "If the skillet is no longer hot (cast iron retains heat longer than other metals), reheat it briefly on the stove for a few minutes. Scrape batter back into it. Bake until the top is golden brown and a toothpick inserted into it emerges clean, 30 to 40 minutes. Cool in the skillet for 10 minutes before slicing.",ord: 3})

#sausage
sausage = Recipe.new({title: 'Sausage With Peppers and Onions', yield: '4 servings', time_minutes: 30,
  description: "For an easy, hearty dinner (or breakfast or lunch) buy fresh Italian pork fennel sausages, preferably from an Italian deli or butcher. Pair them with quickly stewed peppers and onions, splashed with vinegar, and fried eggs.",
  author_id: User.all.sample.id, featured: false
  })
sausage.image = File.open("app/assets/images/sausage.jpg")
sausage.save

Ingredient.create!({recipe_id: sausage.id, content: "8 Italian pork fennel sausages, sweet or hot (about 2 pounds)", ord: 1})
Ingredient.create!({recipe_id: sausage.id, content: "Extra-virgin olive oil", ord: 2})
Ingredient.create!({recipe_id: sausage.id, content: "3 or 4 medium bell peppers, a mix of red and yellow, sliced into 1/4-inch strips", ord: 3})
Ingredient.create!({recipe_id: sausage.id, content: "2 medium red onions, sliced into 1/4-inch half-moons", ord: 4})
Ingredient.create!({recipe_id: sausage.id, content: "Salt and pepper", ord: 5})
Ingredient.create!({recipe_id: sausage.id, content: "2 garlic cloves, minced", ord: 6})
Ingredient.create!({recipe_id: sausage.id, content: "1 tablespoon red wine vinegar", ord: 7})
Ingredient.create!({recipe_id: sausage.id, content: "Pinch of crushed red pepper", ord: 8})
Ingredient.create!({recipe_id: sausage.id, content: "Pinch of dried oregano", ord: 9})
Ingredient.create!({recipe_id: sausage.id, content: "Basil leaves, for garnish", ord: 10})
Ingredient.create!({recipe_id: sausage.id, content: "4 large eggs (optional)", ord: 11})

Step.create!({recipe_id: sausage.id,content: "Prick each sausage in several places with a skewer or the tip of paring knife to prevent bursting. Put sausages in one layer in a skillet. Add water to cover and bring to a simmer. Cook for 5 minutes, then cover, turn off heat and let steep.",ord: 1})
Step.create!({recipe_id: sausage.id,content: "Place a wide skillet over high heat and add 2 tablespoons olive oil. When oil is hot, add sliced peppers and onions. Season generously with salt and pepper, and cook, stirring frequently, until softened and beginning to brown, about 10 minutes. Adjust heat as necessary if mixture seems to be cooking too quickly. Add garlic just at the end, stir to incorporate and cook 1 minute more. Stir in the vinegar.",ord: 2})
Step.create!({recipe_id: sausage.id,content: "Transfer pepper mixture to a platter. Over medium heat, coat pan with 1 tablespoon olive oil, add sausages and cook 2 to 3 minutes per side, to brown. Top pepper mixture with cooked sausages. Sprinkle with crushed red pepper and oregano and garnish with basil leaves.",ord: 3})
Step.create!({recipe_id: sausage.id,content: "If desired, in the same wide skillet, fry eggs sunny side up in a little olive oil to accompany. Season with salt and pepper.",ord: 4})

#asparagus
asparagus = Recipe.new({title: 'Stir-Fried Spicy Asparagus', yield: '4 to 6 servings', time_minutes: 15,
  description: "Holding out for regional produce may seem absurdly romantic, or a little stubborn, but there’s no denying the thrill when, after months of apples, potatoes and sturdy greens, suddenly asparagus appears in full force at the market. Finally, spring has arrived.",
  author_id: User.all.sample.id, featured: false
  })
asparagus.image = File.open("app/assets/images/asparagus.jpg")
asparagus.save

Ingredient.create!({recipe_id: asparagus.id, content: "1 ½ pounds pencil-thin asparagus (or substitute small or medium asparagus, split lengthwise)", ord: 1})
Ingredient.create!({recipe_id: asparagus.id, content: "1 tablespoon vegetable oil", ord: 2})
Ingredient.create!({recipe_id: asparagus.id, content: "Salt and pepper", ord: 3})
Ingredient.create!({recipe_id: asparagus.id, content: "3 garlic cloves, minced", ord: 4})
Ingredient.create!({recipe_id: asparagus.id, content: "1 tablespoon grated ginger", ord: 5})
Ingredient.create!({recipe_id: asparagus.id, content: "1 serrano or other fresh hot chile, finely chopped", ord: 6})
Ingredient.create!({recipe_id: asparagus.id, content: "A large handful of basil, mint and cilantro leaves", ord: 7})

Step.create!({recipe_id: asparagus.id,content: "Snap off and discard the tough bottoms of each asparagus spear. Cut the asparagus into 2-inch lengths",ord: 1})
Step.create!({recipe_id: asparagus.id,content: "In a wok or cast-iron skillet, heat the oil until nearly smoking. Add the asparagus, season generously with salt and pepper and stir well, making sure the asparagus is coated and glistening with oil. Continue to stir-fry over high heat for about 1 minute, until the asparagus looks bright green and barely cooked. Add the garlic, ginger and chile and stir-fry for 30 seconds more.",ord: 2})
Step.create!({recipe_id: asparagus.id,content: "Transfer to a serving platter and scatter leaves on top. Serve immediately.",ord: 3})

#chicken_fennel
chicken_fennel = Recipe.new({title: 'Roast Chicken With Fennel', yield: '4 servings', time_minutes: 40,
  description: "The kind of fennel we see in supermarkets (which, almost needless to say, is cultivated, not wild) is wonderful when cooked to full tenderness, so I thought it might make a good base for chicken, which is heavier than fish and takes longer to cook. The idea was that the fennel would lend its flavor to the chicken, the chicken would lend its juices to the fennel and the creation would need little else. The results were better than expected. Garnished with parsley and served with a bit of lemon (especially when caramelized, fennel can be quite sweet), the dish has an elegant look and delicious, surprisingly complex flavor.",
  author_id: User.all.sample.id, featured: false
  })
chicken_fennel.image = File.open("app/assets/images/chicken_fennel.jpg")
chicken_fennel.save

Ingredient.create!({recipe_id: chicken_fennel.id, content: "⅓ cup extra virgin olive oil, or as needed", ord: 1})
Ingredient.create!({recipe_id: chicken_fennel.id, content: "2 bulbs fennel, trimmed and cut into 1/4-inch-thick slices", ord: 2})
Ingredient.create!({recipe_id: chicken_fennel.id, content: "Salt and freshly ground black pepper", ord: 3})
Ingredient.create!({recipe_id: chicken_fennel.id, content: "1 whole (about 3-pound) chicken, cut up, or about 3 pounds drumsticks and thighs", ord: 4})
Ingredient.create!({recipe_id: chicken_fennel.id, content: "Chopped fresh parsley leaves for garnish", ord: 5})
Ingredient.create!({recipe_id: chicken_fennel.id, content: "Lemon wedges", ord: 6})

Step.create!({recipe_id: chicken_fennel.id,content: "Heat oven to 450 degrees. Drizzle bottom of shallow roasting pan or baking sheet with about half the olive oil and cover it with a layer of the fennel. Overlap pieces if necessary but use whole pan. Drizzle remaining oil over fennel and sprinkle with salt and pepper. Roast about 10 minutes. Meanwhile, cut up chicken if necessary and sprinkle the pieces with salt and pepper.",ord: 1})
Step.create!({recipe_id: chicken_fennel.id,content: "Top fennel with the chicken parts, skin side up. Ideally, you'll have a layer of fennel pretty much covered by a layer of chicken, but it's fine if some of the fennel roasts uncovered. Spoon some of the oil from bottom of pan over chicken. If there is not enough, drizzle additional olive oil over the chicken. Roast about 15 minutes, then baste chicken with pan drippings and rotate the pan. If necessary, adjust oven temperature so chicken browns but does not burn.",ord: 2})
Step.create!({recipe_id: chicken_fennel.id,content: "The chicken will be done in about 30 minutes. Serve each piece with some fennel and a little of the pan juices spooned over, garnished with parsley and a lemon wedge.",ord: 3})

#carrots
carrots = Recipe.new({title: 'Braised Carrots With Cumin and Red Pepper', yield: '8 to 10 servings', time_minutes: 30,
  description: "The humble carrot veers exotic in this simple recipe that calls for braising them in olive oil and garlic, then seasoning with toasted cumin and red pepper. They taste good hot or at room temperature which makes them ideal for a large dinner party or potluck. Use real carrots and peel your own. Which is not to say that those miniature peeled carrots in bags aren’t real, but, convenience aside, they often lack true carrot flavor.",
  author_id: User.all.sample.id, featured: false
  })
carrots.image = File.open("app/assets/images/carrots.jpg")
carrots.save

Ingredient.create!({recipe_id: carrots.id, content: "3 pounds medium carrots, peeled", ord: 1})
Ingredient.create!({recipe_id: carrots.id, content: "4 tablespoons olive oil", ord: 2})
Ingredient.create!({recipe_id: carrots.id, content: "Salt", ord: 3})
Ingredient.create!({recipe_id: carrots.id, content: "6 garlic cloves, sliced", ord: 4})
Ingredient.create!({recipe_id: carrots.id, content: "½ teaspoon cumin seed, toasted and coarsely ground", ord: 5})
Ingredient.create!({recipe_id: carrots.id, content: "2 teaspoons mild red pepper flakes, like Aleppo or Marash", ord: 6})
Ingredient.create!({recipe_id: carrots.id, content: "2 teaspoons paprika, smoked or unsmoked", ord: 7})

Step.create!({recipe_id: carrots.id,content: "Cut the carrots lengthwise, or quarter them if you wish.",ord: 1})
Step.create!({recipe_id: carrots.id,content: "Warm the olive oil in a large Dutch oven or heavy bottomed pot over medium heat. Add the carrots and turn them in the oil to coat. Season generously with salt. Add the garlic and 1 cup of water. Bring to a boil, then reduce the heat to a gentle simmer and cover the pan. Cook for about 10 minutes, until the carrots are just tender.",ord: 2})
Step.create!({recipe_id: carrots.id,content: "Remove the lid, raise the heat, and let any remaining water cook away.",ord: 3})
Step.create!({recipe_id: carrots.id,content: "Sprinkle the cumin, red pepper and paprika over the carrots and transfer them to an oven-proof serving dish. Serve hot or at room temperature. The carrots may be left at room temperature for 2 to 3 hours, or refrigerated and brought to room temperature, before reheating in a 400-degree oven for 10 minutes.",ord: 4})

#shawarma
shawarma = Recipe.new({title: 'Oven-Roasted Chicken Shawarma', yield: '4 to 6 servings', time_minutes: 45,
  description: "Here is a recipe for an oven-roasted version of the classic street-side flavor bomb usually cooked on a rotisserie. It is perfect for an evening with family and friends. Serve with pita and tahini, chopped cucumbers and tomatoes, some olives, chopped parsley, some feta, fried eggplant, hummus swirled with harissa, rice or rice pilaf. You can make the white sauce that traditionally accompanies it by cutting plain yogurt with mayonnaise and lemon juice, and flecking it with garlic. For a red to offset it, simmer ketchup with red pepper flakes and a hit of red-wine vinegar until it goes syrupy and thick, or just use your favorite hot sauce instead.",
  author_id: User.all.sample.id, featured: false
  })
shawarma.image = File.open("app/assets/images/shawarma.jpg")
shawarma.save

Ingredient.create!({recipe_id: shawarma.id, content: "2 lemons, juiced", ord: 1})
Ingredient.create!({recipe_id: shawarma.id, content: "½ cup plus 1 tablespoon olive oil", ord: 2})
Ingredient.create!({recipe_id: shawarma.id, content: "6 cloves garlic, peeled, smashed and minced", ord: 3})
Ingredient.create!({recipe_id: shawarma.id, content: "1 teaspoon kosher salt", ord: 4})
Ingredient.create!({recipe_id: shawarma.id, content: "2 teaspoons freshly ground black pepper", ord: 5})
Ingredient.create!({recipe_id: shawarma.id, content: "2 teaspoons ground cumin", ord: 6})
Ingredient.create!({recipe_id: shawarma.id, content: "2 teaspoons paprika", ord: 7})
Ingredient.create!({recipe_id: shawarma.id, content: "½ teaspoon turmeric", ord: 8})
Ingredient.create!({recipe_id: shawarma.id, content: "A pinch ground cinnamon", ord: 9})
Ingredient.create!({recipe_id: shawarma.id, content: "Red pepper flakes, to taste", ord: 10})
Ingredient.create!({recipe_id: shawarma.id, content: "2 pounds boneless, skinless chicken thighs", ord: 11})
Ingredient.create!({recipe_id: shawarma.id, content: "1 large red onion, peeled and quartered", ord: 12})
Ingredient.create!({recipe_id: shawarma.id, content: "2 tablespoons chopped fresh parsley", ord: 13})

Step.create!({recipe_id: shawarma.id,content: "Prepare a marinade for the chicken. Combine the lemon juice, 1/2 cup olive oil, garlic, salt, pepper, cumin, paprika, turmeric, cinnamon and red pepper flakes in a large bowl, then whisk to combine. Add the chicken and toss well to coat. Cover and store in refrigerator for at least 1 hour and up to 12 hours.",ord: 1})
Step.create!({recipe_id: shawarma.id,content: "When ready to cook, heat oven to 425 degrees. Use the remaining tablespoon of olive oil to grease a rimmed sheet pan. Add the quartered onion to the chicken and marinade, and toss once to combine. Remove the chicken and onion from the marinade, and place on the pan, spreading everything evenly across it.",ord: 2})
Step.create!({recipe_id: shawarma.id,content: "Put the chicken in the oven and roast until it is browned, crisp at the edges and cooked through, about 30 to 40 minutes. Remove from the oven, allow to rest 2 minutes, then slice into bits. (To make the chicken even more crisp, set a large pan over high heat, add a tablespoon of olive oil to the pan, then the sliced chicken, and sauté until everything curls tight in the heat.) Scatter the parsley over the top and serve with tomatoes, cucumbers, pita, white sauce, hot sauce, olives, fried eggplant, feta, rice — really anything you desire.",ord: 3})

#miso_chicken
miso_chicken = Recipe.new({title: 'Miso Chicken', yield: '4 servings', time_minutes: 45,
  description: "Making a compound of unsalted butter and the salty, fungal deliciousness of Japanese miso paste is a surefire way of adding immense flavor to a simple weeknight meal. Here the mixture is spread over chicken thighs, which are then roasted to golden perfection. But you could easily use it on salmon or flounder, on corn or potatoes. The recipe calls for white miso, which is more mild than the aged version known as red miso. But you could certainly use red for a more intense result.",
  author_id: User.all.sample.id, featured: false
  })
miso_chicken.image = File.open("app/assets/images/miso_chicken.jpg")
miso_chicken.save

Ingredient.create!({recipe_id: miso_chicken.id, content: "4 tablespoons unsalted butter, softened", ord: 1})
Ingredient.create!({recipe_id: miso_chicken.id, content: "½ cup white miso", ord: 2})
Ingredient.create!({recipe_id: miso_chicken.id, content: "2 tablespoons honey", ord: 3})
Ingredient.create!({recipe_id: miso_chicken.id, content: "1 tablespoon rice vinegar (do not use seasoned rice vinegar)", ord: 4})
Ingredient.create!({recipe_id: miso_chicken.id, content: "Black pepper, to taste", ord: 5})
Ingredient.create!({recipe_id: miso_chicken.id, content: "8 skin-on, bone-in chicken thighs, approximately 2 1/2 to 3 pounds", ord: 6})

Step.create!({recipe_id: miso_chicken.id,content: "Heat oven to 425 degrees. Combine butter, miso, honey, rice vinegar and black pepper in a large bowl and mix with a spatula or spoon until it is well combined.",ord: 1})
Step.create!({recipe_id: miso_chicken.id,content: "Add chicken to the bowl and massage the miso-butter mixture all over it. Place the chicken in a single layer in a roasting pan and slide it into the oven. Roast for 30 to 40 minutes, turning the chicken pieces over once or twice, until the skin is golden brown and crisp, and the internal temperature of the meat is 160 to 165 degrees.
",ord: 2})

#cookies
cookies = Recipe.new({title: 'Quintessential Chocolate Chip Cookies', yield: 'About 4 dozen cookies', time_minutes: 40,
  description: "Sherry Yard's iconic chocolate-chip cookies are just the right mix of chewy and crisp, with a bittersweet morsel of chocolate in each bite. They are the cookies anyone who asks you to make chocolate chip cookies are asking for -- the kind of chocolate cookie that demands to be dunked into a glass of ice-cold milk.",
  author_id: User.all.sample.id, featured: false
  })
cookies.image = File.open("app/assets/images/cookies.jpg")
cookies.save

Ingredient.create!({recipe_id: cookies.id, content: "185 grams all-purpose flour (1 1/2 cups)", ord: 1})
Ingredient.create!({recipe_id: cookies.id, content: "2 grams baking soda (1/2 teaspoon)", ord: 2})
Ingredient.create!({recipe_id: cookies.id, content: "115 grams butter (4 ounces/1 stick)", ord: 3})
Ingredient.create!({recipe_id: cookies.id, content: "100 grams sugar (1/2 cup)", ord: 4})
Ingredient.create!({recipe_id: cookies.id, content: "80 grams light brown sugar (1/2 cup packed)", ord: 5})
Ingredient.create!({recipe_id: cookies.id, content: "2 grams salt (1/4 teaspoon)", ord: 6})
Ingredient.create!({recipe_id: cookies.id, content: "1 egg", ord: 7})
Ingredient.create!({recipe_id: cookies.id, content: "5 grams vanilla (1 teaspoon)", ord: 8})
Ingredient.create!({recipe_id: cookies.id, content: "225 grams bittersweet chocolate (8 ounces), cut in 1-inch pieces (or use coins)", ord: 9})

Step.create!({recipe_id: cookies.id,content: "Sift together flour and baking soda and set aside. In the bowl of a standing electric mixer fitted with the paddle attachment, cream butter until lemony yellow, about 2 minutes. Scrape down sides of bowl and paddle. Add sugar, brown sugar and salt. Continue creaming mixture on medium speed until it is smooth and lump free, about 1 minute. Stop mixer and scrape down sides of bowl and paddle.",ord: 1})
Step.create!({recipe_id: cookies.id,content: "Add egg and vanilla and beat on low speed for 15 seconds, or until they are fully incorporated. Do not over-beat. Scrape down sides of bowl and paddle.",ord: 2})
Step.create!({recipe_id: cookies.id,content: "On low speed, add sifted flour mixture. Beat slowly until all of the flour is incorporated. Scrape down sides of bowl. Add chocolate chunks and mix in.",ord: 3})
Step.create!({recipe_id: cookies.id,content: "Heat oven to 350 degrees with the rack positioned in the lower third of the oven. Line 2 baking sheets with parchment. Spoon heaping teaspoons of dough 2 inches apart onto baking sheets. If not baking right away, remove small handfuls or spoonfuls of dough from mixer and plop them down on the middle of a sheet of parchment or wax paper, creating a log about 1 1/2 inches wide and 12 inches long. Fold parchment over, creating a sausage. Chill for at least 1 hour, preferably overnight. Using a serrated knife, slice chilled dough into 1/3-inch-thick rounds and place them 2 inches apart, in staggered rows, on parchment-lined sheets and proceed. (Dough will keep nicely, tightly wrapped, in the refrigerator for 1 week, or in the freezer for up to 1 month. Thaw frozen dough at room temperature for 30 minutes before slicing.)",ord: 4})
Step.create!({recipe_id: cookies.id,content: "Bake one sheet at a time for 12 to 15 minutes, until lightly browned, rotating the baking sheet front to back halfway through. Remove from heat and slide parchment off baking sheet and onto a work surface. Allow cookies to cool for at least 5 minutes before serving, or for at least 20 minutes before storing in an airtight container. They will keep for up to 3 days at room temperature.",ord: 5})

#broccoli
broccoli = Recipe.new({title: 'Roasted Broccoli With Tahini Garlic Sauce', yield: 'Serves 6', time_minutes: 30,
  description: "One of my favorite Middle Eastern mezze is deep-fried cauliflower served with tahini garlic sauce. I decided to try the dish with broccoli, but instead of deep-frying the broccoli I roasted it, a method that requires a lot less oil. The buds on the broccoli florets toast to a crispy brown, and the texture of the stalk remains crisp. It goes wonderfully with the classic and irresistible tahini garlic sauce.",
  author_id: User.all.sample.id, featured: false
  })
broccoli.image = File.open("app/assets/images/broccoli.jpg")
broccoli.save

Ingredient.create!({recipe_id: broccoli.id, content: "1 garlic clove, cut in half, green shoots removed", ord: 1})
Ingredient.create!({recipe_id: broccoli.id, content: "Salt to taste", ord: 2})
Ingredient.create!({recipe_id: broccoli.id, content: "⅓ cup sesame tahini", ord: 3})
Ingredient.create!({recipe_id: broccoli.id, content: "2 to 4 tablespoons fresh lemon juice (more to taste)", ord: 4})
Ingredient.create!({recipe_id: broccoli.id, content: "⅓ cup water", ord: 5})
Ingredient.create!({recipe_id: broccoli.id, content: "Aleppo pepper or red pepper flakes for sprinkling", ord: 6})
Ingredient.create!({recipe_id: broccoli.id, content: "1 to 1 ½ pounds broccoli crowns", ord: 7})
Ingredient.create!({recipe_id: broccoli.id, content: "2 tablespoons extra virgin olive oil", ord: 8})
Ingredient.create!({recipe_id: broccoli.id, content: "Salt and freshly ground pepper to taste", ord: 9})

Step.create!({recipe_id: broccoli.id,content: "In a mortar and pestle mash the garlic clove to a purée with a generous pinch of salt. Transfer to a bowl and whisk in the sesame tahini. Whisk in the lemon juice, beginning with the smaller amount. The mixture will stiffen up. Gradually whisk in up to 1/3 cup water, until the sauce has the consistency of thick cream (or runny yogurt). Taste and adjust salt.",ord: 1})
Step.create!({recipe_id: broccoli.id,content: "Heat the oven to 450 degrees. Line a baking sheet with parchment paper. Slice the broccoli crowns 1/3 inch thick, letting the flower buds on the edges fall off. Peel any large pieces of stem by gently pulling away the thick skin, then toss the slices and the unattached buds with the olive oil, salt, and pepper. Place on the baking sheet in an even layer. Roast until the tops are nicely browned, stirring and flipping the large slices over (tongs are a good tool for this) after 8 minutes, roasting about 15 minutes total. Remove from the oven and transfer to a platter or to individual serving plates. Drizzle on the tahini sauce and serve, or serve the tahini sauce in small bowls for dipping.",ord: 2})

#rib_steak
rib_steak = Recipe.new({title: 'Seared Rib Steak', yield: '2 servings', time_minutes: 30,
  description: "A bone-in rib steak, 1 ¼ to 1 ½ inches thick, will feed two. Scaling up is easy; just buy a thicker steak. A two-inch slab serves three to four, and it requires only a few extra minutes in the oven. Then add steaks as needed, bearing in mind that each one should cook in its own skillet.",
  author_id: User.all.sample.id, featured: false
  })
rib_steak.image = File.open("app/assets/images/rib_steak.jpg")
rib_steak.save

Ingredient.create!({recipe_id: rib_steak.id, content: "1 bone-in rib steak, 1 1/2 inches thick", ord: 1})
Ingredient.create!({recipe_id: rib_steak.id, content: "1 garlic clove, halved", ord: 2})
Ingredient.create!({recipe_id: rib_steak.id, content: "Coarse kosher salt", ord: 3})
Ingredient.create!({recipe_id: rib_steak.id, content: "Black pepper", ord: 4})

Step.create!({recipe_id: rib_steak.id,content: "Heat a heavy ovenproof skillet (preferably cast iron) over high heat for 15 minutes. Meanwhile, heat your broiler.",ord: 1})
Step.create!({recipe_id: rib_steak.id,content: "Pat steak dry with paper towels, then vigorously rub cut side of garlic all over steak, particularly the bone. Season generously all over with salt and pepper.",ord: 2})
Step.create!({recipe_id: rib_steak.id,content: "Place steak in hot pan and carefully, using a potholder, transfer pan to broiler. Cook meat until done to taste, about 5 to 7 minutes for rare. Transfer steak to a cutting board, and let it rest for 5 to 10 minutes before slicing and serving.",ord: 3})

#sesame_noodles
sesame_noodles = Recipe.new({title: 'Takeout-Style Sesame Noodles', yield: '4 servings', time_minutes: 10,
  description: "Eddie Schoenfeld, the affable yarn-spinner and restaurateur who opened Red Farm in the West Village and on the Upper West Side of Manhattan, is also one of New York's finest practitioners of Chinese cuisine. In 2007, he helped The Times drill down into the taste history of sesame noodles in America, and specifically to the ones made and sold by Shorty Tang at the restaurant Hwa Yuan on East Broadway. Soft and luxurious, bathed in an emulsified mixture of sesame paste and peanut butter, rendered vivid and fiery by chili oil and sweetened by sugar, then cut by vinegar, this version brings home what used to be classic New York takeout. “The art is in the balance,” Mr. Schoenfeld said at the time, “between the salt and sweet, the sweet and the fire, and the fire and the acidity.”",
  author_id: User.all.sample.id, featured: false
  })
sesame_noodles.image = File.open("app/assets/images/sesame_noodles.jpg")
sesame_noodles.save

Ingredient.create!({recipe_id: sesame_noodles.id, content: "1 pound Chinese egg noodles (1/8-inch-thick), frozen or (preferably) fresh, available in Asian markets", ord: 1})
Ingredient.create!({recipe_id: sesame_noodles.id, content: "2 tablespoons sesame oil, plus a splash", ord: 2})
Ingredient.create!({recipe_id: sesame_noodles.id, content: "3 ½ tablespoons soy sauce", ord: 3})
Ingredient.create!({recipe_id: sesame_noodles.id, content: "2 tablespoons Chinese rice vinegar", ord: 4})
Ingredient.create!({recipe_id: sesame_noodles.id, content: "2 tablespoons Chinese sesame paste", ord: 5})
Ingredient.create!({recipe_id: sesame_noodles.id, content: "1 tablespoon smooth peanut butter", ord: 6})
Ingredient.create!({recipe_id: sesame_noodles.id, content: "1 tablespoon sugar", ord: 7})
Ingredient.create!({recipe_id: sesame_noodles.id, content: "1 tablespoon finely grated ginger", ord: 8})
Ingredient.create!({recipe_id: sesame_noodles.id, content: "2 teaspoons minced garlic", ord: 9})
Ingredient.create!({recipe_id: sesame_noodles.id, content: "2 teaspoons chili-garlic paste, or to taste", ord: 10})
Ingredient.create!({recipe_id: sesame_noodles.id, content: "Half a cucumber, peeled, seeded, and cut into 1/8-inch by 1/8-inch by 2-inch sticks", ord: 11})
Ingredient.create!({recipe_id: sesame_noodles.id, content: "¼ cup chopped roasted peanuts", ord: 12})

Step.create!({recipe_id: sesame_noodles.id,content: "Bring a large pot of water to a boil. Add noodles and cook until barely tender, about 5 minutes; they should retain a hint of chewiness. Drain, rinse with cold water, drain again and toss with a splash of sesame oil.",ord: 1})
Step.create!({recipe_id: sesame_noodles.id,content: "In a medium bowl, whisk together the remaining 2 tablespoons sesame oil, the soy sauce, rice vinegar, sesame paste, peanut butter, sugar, ginger, garlic and chili-garlic paste.",ord: 2})
Step.create!({recipe_id: sesame_noodles.id,content: "Pour the sauce over the noodles and toss. Transfer to a serving bowl, and garnish with cucumber and peanuts.",ord: 3})

#rosemary_shortbread
rosemary_shortbread = Recipe.new({title: 'Rosemary Shortbread', yield: 'One 8- or 9-inch shortbread', time_minutes: 45,
  description: "This basic, buttery shortbread practically begs that you customize it to suit your own tastes or pantry supplies. The dough, which comes together quickly in a food processor, is already enhanced with rosemary, but nuts, seeds, citrus zest, spices, vanilla or minced dried fruit — or a combination of some of these — all make fine additions. Scale it up, scale it down. Add more salt, or use less. As long as you maintain the butter-flour ratio (one stick of butter for every cup of flour), you are free to play around. But the shortbread is delicious all on its own: tender, rich, crumbly, irresistible.",
  author_id: User.all.sample.id, featured: false
  })
rosemary_shortbread.image = File.open("app/assets/images/shortbread.jpg")
rosemary_shortbread.save

Ingredient.create!({recipe_id: rosemary_shortbread.id, content: "2 cups all-purpose flour", ord: 1})
Ingredient.create!({recipe_id: rosemary_shortbread.id, content: "⅔ cup granulated sugar", ord: 2})
Ingredient.create!({recipe_id: rosemary_shortbread.id, content: "1 tablespoon finely chopped fresh rosemary", ord: 3})
Ingredient.create!({recipe_id: rosemary_shortbread.id, content: "1 teaspoon plus 1 pinch kosher salt", ord: 4})
Ingredient.create!({recipe_id: rosemary_shortbread.id, content: "1 cup (2 sticks) unsalted cold butter, cut into 1-inch chunks", ord: 5})
Ingredient.create!({recipe_id: rosemary_shortbread.id, content: " to 2 teaspoons rosemary, chestnut or other dark, full-flavored honey (optional)", ord: 6})

Step.create!({recipe_id: rosemary_shortbread.id,content: "Heat oven to 325 degrees. In a food processor, pulse together flour, sugar, rosemary and salt. Add butter, and honey if desired, and pulse to fine crumbs. Pulse a few more times until some crumbs start to come together, but don't overprocess. Dough should not be smooth.",ord: 1})
Step.create!({recipe_id: rosemary_shortbread.id,content: "Press dough into an ungreased 8- or 9-inch-square baking pan or 9-inch pie pan. Prick dough all over with a fork. Bake until golden brown, 35 to 40 minutes for 9-inch pan, 45 to 50 minutes for 8-inch. Transfer to a wire rack to cool. Cut into squares, bars or wedges while still warm.",ord: 2})

#roasted_fish
roasted_fish = Recipe.new({title: 'Roasted Fish', yield: '4 servings', time_minutes: 15,
  description: "Cooking fish for 10 minutes per inch of thickness is an old rule of thumb that works perfectly when roasting fillets or steaks. It’s just enough time to cook the flesh through so that it’s opaque, but not so much that it flakes. The only hitch comes with fillets that are uneven. Use your judgment but err on the side of less is more. You can always put any undercooked parts back in the oven, but you can’t undo overdone. Serve these as is in their purist form, or add your favorite sauce on the side. A pesto, aioli or vinaigrette would work well.",
  author_id: User.all.sample.id, featured: false})
roasted_fish.image = File.open("app/assets/images/roasted_fish.jpg")
roasted_fish.save

Ingredient.create!({recipe_id: roasted_fish.id, content: "4 fish fillets or steaks of any kind of fish, skin on or off to taste", ord: 1})
Ingredient.create!({recipe_id: roasted_fish.id, content: "Extra-virgin olive oil", ord: 2})
Ingredient.create!({recipe_id: roasted_fish.id, content: "Fine sea salt", ord: 3})
Ingredient.create!({recipe_id: roasted_fish.id, content: "Black pepper", ord: 4})
Ingredient.create!({recipe_id: roasted_fish.id, content: "Lemon wedges, for serving", ord: 5})

Step.create!({recipe_id: roasted_fish.id,content: "Heat oven to 400 degrees. Measure fish fillets at the thickest part. Drizzle fish with olive oil, sprinkle with salt and pepper and place on a rimmed baking sheet, skin side down if you've left the skin on.",ord: 1})
Step.create!({recipe_id: roasted_fish.id,content: "Roast fish for 10 minutes per inch of thickness, until the fish is opaque and tender when pierced with a fork but before it starts to flake. Serve with lemon wedges, drizzled with more good olive oil.",ord: 2})

#spicy_shrimp
spicy_shrimp = Recipe.new({title: 'Spicy Shrimp Sauté', yield: '4 servings', time_minutes: 15,
  description: "This recipe is inspired by the late-night meals that feed chefs, cooks, waiters, bussers, porters and everyone else it takes to run a restaurant. After a rough day, a dish that can be thrown together quickly is invaluable.\n\nFor restaurant workers, Mario Batali included, sometimes the evening starts out as just drinking and continues that way into the early morning, when they end up at someone’s apartment and start preparing spicy food. Here is one of the best of those recipes.",
  author_id: User.all.sample.id, featured: false})
spicy_shrimp.image = File.open("app/assets/images/spicy_shrimp.jpg")
spicy_shrimp.save

Ingredient.create!({recipe_id: spicy_shrimp.id, content: "2 tablespoons red curry paste", ord: 1})
Ingredient.create!({recipe_id: spicy_shrimp.id, content: "¼ cup fish sauce", ord: 2})
Ingredient.create!({recipe_id: spicy_shrimp.id, content: "¼ cup sambal", ord: 3})
Ingredient.create!({recipe_id: spicy_shrimp.id, content: "¼ cup sweet chili sauce", ord: 4})
Ingredient.create!({recipe_id: spicy_shrimp.id, content: "2 pounds medium shrimp, peeled and deveined", ord: 5})
Ingredient.create!({recipe_id: spicy_shrimp.id, content: "3 tablespoons light sesame oil", ord: 6})
Ingredient.create!({recipe_id: spicy_shrimp.id, content: "1 cup sliced scallions", ord: 7})
Ingredient.create!({recipe_id: spicy_shrimp.id, content: "2 tablespoons sweet soy sauce", ord: 8})
Ingredient.create!({recipe_id: spicy_shrimp.id, content: "1(14-ounce) can light coconut milk", ord: 9})
Ingredient.create!({recipe_id: spicy_shrimp.id, content: "1 bunch cilantro, chopped", ord: 10})

Step.create!({recipe_id: spicy_shrimp.id,content: "Combine curry paste, fish sauce, sambal and chili sauce in a medium bowl; add shrimp, tossing to coat. Place a large nonstick skillet over medium-high heat until hot. Add oil, and heat till smoking then add the shrimp mixture, and sauté for 2 minutes. Add scallions; cover, and cook for 3 minutes. Stir in sweet soy sauce and coconut milk. Cook for 3 minutes or until thoroughly heated and the shrimp is cooked through. Add cilantro and serve.",ord: 1})

salmon = Recipe.new({title: 'Salmon en Papillote', yield: '4 servings', time_minutes: 20,
  description: "Salmon cooked en papillote, which means wrapped in a packet of parchment (or foil), is a dramatic way to procure perfectly cooked salmon, but it isn’t difficult. Fold a fillet into a cut piece of parchment, and then layer it with seasonings or perhaps vegetables or citrus fruit. Then simply bake the packets until done. The steam created by the parchment produces reliably moist salmon, and opening the individual packets at the table makes for a fun way to start dinner.",
  author_id: User.all.sample.id, featured: false})
salmon.image = File.open("app/assets/images/salmon.jpg")
salmon.save

Ingredient.create!({recipe_id: salmon.id, content: "4 (6- to 8-ounce) skin-on salmon fillets", ord: 1})
Ingredient.create!({recipe_id: salmon.id, content: "Cut vegetables, fresh herbs and/or slices of lemon, lime or orange", ord: 2})
Ingredient.create!({recipe_id: salmon.id, content: "Salt and pepper", ord: 3})

Step.create!({recipe_id: salmon.id,content: "Heat the oven to 400 degrees. Cut 4 large heart-shaped pieces of parchment paper or foil, and place them on a sheet pan. Fold the parchment or foil in half down the middle, place a fillet with its garnishes and seasonings on one side of each, fold the other side over and crimp the rounded edge tightly closed.",ord: 1})
Step.create!({recipe_id: salmon.id,content: "Place in oven for 10 to 15 minutes, depending on how done you’d like to serve the salmon. The packages should puff up and make for dramatic serving.",ord: 2})

#brie
brie = Recipe.new({title: 'Baked Brie', yield: '8 or more servings', time_minutes: 60,
  description: "Serve a creamy, runny-centered, pastry-wrapped baked brie at your next party and watch your guests cluster around it, slicing off bits until it completely disappears. Don’t be tempted to use a fancy, artisan brie from a cheese shop here. This recipe works best with the regular kind of brie you find at the supermarket; fancier bries may leak out of their pastry. Choose any flavor jam for the topping. Orange or ginger marmalade will give you something tangier than, say, raspberry and cherry jam, which are sweeter, more mellow options. While a wedge of brie will work in this recipe, a round of brie looks prettiest.",
  author_id: User.all.sample.id, featured: false})
brie.image = File.open("app/assets/images/brie.jpg")
brie.save

Ingredient.create!({recipe_id: brie.id, content: "1 piece of brie, 4 to 8 ounces, cold", ord: 1})
Ingredient.create!({recipe_id: brie.id, content: "1 sheet puff pastry, chilled but not frozen", ord: 2})
Ingredient.create!({recipe_id: brie.id, content: "2 tablespoons thick jam or marmalade, any flavor", ord: 3})
Ingredient.create!({recipe_id: brie.id, content: "1 egg beaten with 1 tablespoon water", ord: 4})
Ingredient.create!({recipe_id: brie.id, content: "1 tablespoon demerara sugar (optional)", ord: 5})

Step.create!({recipe_id: brie.id,content: "Heat the oven to 400 degrees. Using a large chef’s knife, cut the white rind off the brie and discard (this works best when the cheese is very cold).",ord: 1})
Step.create!({recipe_id: brie.id,content: "Roll the chilled dough to about 1/8-inch think. Transfer the rolled dough to a baking sheet covered with parchment paper. Place the brie at the center of the dough square and then spread the jam over the top of cheese. Drape the four corners of the dough, one at a time, across the brie to enclose it. If there is too much overlapping dough, trim the sides before draping. You want the dough to just cover the brie.",ord: 2})
Step.create!({recipe_id: brie.id,content: "Brush the egg wash over the brie, making sure it does not pool where it meets the tray or it will stick. Sprinkle with the sugar if using. Bake on the middle rack of the oven for 35 to 45 minutes, until the pastry is golden brown and cooked through. Transfer to a wire rack and let cool for 8 to 10 minutes before serving warm.",ord: 3})

#brussels
brussels = Recipe.new({title: 'Sautéed Brussels Sprouts', yield: '4 to 6 servings', time_minutes: 20,
  description: "This is sort of a no-recipe recipe for brussels sprouts that will have you wanting to make them every day of the week. Once you memorize the proportions, you can vary the fat and seasonings any which way you like. One important tip: Having a large enough skillet is key, so the sprouts have a chance to brown on one side before steaming and turning to mush.",
  author_id: User.all.sample.id, featured: false})
brussels.image = File.open("app/assets/images/brussels.jpg")
brussels.save

Ingredient.create!({recipe_id: brussels.id, content: "1 pound brussels sprouts, trimmed and halved", ord: 1})
Ingredient.create!({recipe_id: brussels.id, content: "3 to 4 tablespoons fat (olive oil, schmaltz, duck fat or the fat rendered from 8 ounces of bacon, sausage or chorizo)", ord: 2})
Ingredient.create!({recipe_id: brussels.id, content: "A handful of aromatics, like chopped garlic, sliced onion, thyme sprigs or dried chiles", ord: 3})
Ingredient.create!({recipe_id: brussels.id, content: "Lemon juice, vinegar, pickled onions or shallots", ord: 4})
Ingredient.create!({recipe_id: brussels.id, content: "Salt and pepper to taste", ord: 5})
Ingredient.create!({recipe_id: brussels.id, content: "Chopped fresh herbs like parsley, cilantro or mint (optional)", ord: 6})

Step.create!({recipe_id: brussels.id,content: "If using something like bacon or sausage, start by browning the meat in a large skillet (10 to 12 inches) over medium-high heat to render the fat. Once the meat is cooked, remove it with a slotted spoon, leaving behind the drippings. (You can add the crispy meat bits back later.)",ord: 1})
Step.create!({recipe_id: brussels.id,content: "Add halved brussels sprouts to the fat, shaking the skillet so that as many as possible land cut side down. Now, don’t touch! Disturbing the skillet at this point would prevent the sprouts from caramelizing. Cook until they have a nice sear on one side, 5 to 8 minutes. Using a wooden spoon or spatula, give them a stir and continue to cook until they’re nicely browned all over and just tender on the inside, another 5 to 8 minutes.",ord: 2})
Step.create!({recipe_id: brussels.id,content: "Just before removing from the heat, add in a handful of aromatics, like chopped garlic, sliced onion, thyme sprigs or dried chiles, tossing to coat and cooking only a minute or two. Stir in the reserved bacon or sausage bits, if using.",ord: 3})
Step.create!({recipe_id: brussels.id,content: "Finish with either a squeeze of halved lemon, a splash of nice vinegar or a handful of pickled onions or shallots. Because of the sprouts’ meaty flavor profile, it’s also nice to hit them with a smattering of fresh herbs, especially parsley, cilantro or mint. Salt and pepper to taste.",ord: 4})

#omelet
omelet = Recipe.new({title: 'Omelet Mousseline', yield: '1 serving', time_minutes: 5,
  description: "This omelet is fluffier and lighter than the classic. It uses Auguste Escoffier’s technique: whipping the egg whites and then gently folding in the yolks. A small amount of heavy cream enriches the omelet, making it a good candidate for a final sprinkle of powdered sugar – or a jam filling. Served sweet or savory, it’s a decadent yet ethereal dish that truly melts in the mouth.",
  author_id: User.all.sample.id, featured: false})
omelet.image = File.open("app/assets/images/omelet.jpg")
omelet.save

Ingredient.create!({recipe_id: omelet.id, content: "3 large eggs, whites and yolks separated", ord: 1})
Ingredient.create!({recipe_id: omelet.id, content: "1 tablespoon heavy cream", ord: 2})
Ingredient.create!({recipe_id: omelet.id, content: "Large pinch fine sea salt, to taste", ord: 3})
Ingredient.create!({recipe_id: omelet.id, content: "Freshly ground black pepper, to taste", ord: 4})
Ingredient.create!({recipe_id: omelet.id, content: "1 tablespoon unsalted butter", ord: 5})

Step.create!({recipe_id: omelet.id,content: "Using an electric mixer, beat egg whites until stiff peaks form. Meanwhile, in a large bowl, beat yolks with heavy cream, salt and pepper. Fold 1/4 of stiff egg whites into yolks. Gently fold in remaining whites in two increments.",ord: 1})
Step.create!({recipe_id: omelet.id,content: "Place an 8- to 9-inch skillet (preferably nonstick, or, if not nonstick, then well-seasoned carbon-steel) over high heat. Melt butter until bubbling subsides.",ord: 2})
Step.create!({recipe_id: omelet.id,content: "Pour in egg mixture, and reduce heat to medium. Using a spatula, spread egg mixture to cover entire skillet and cook until set on the bottom. This takes only a few seconds. Use a spatula to fold egg over itself in thirds. Tilt skillet and a serving plate together, and flip omelet onto plate.",ord: 3})

#sesame_chicken
sesame_chicken = Recipe.new({title: 'Grilled Sesame Lime Chicken Breasts', yield: '4 servings', time_minutes: 45,
  description: "Brining chicken breasts in a soy sauce and fish sauce marinade flecked with lime adds flavor and helps retain moisture while they are on the grill. Chicken breasts do particularly well when pounded into an even thickness and cooked quickly over a hot fire, which chars the exterior but keeps them juicy inside. But if you or anyone in your clan would prefer dark meat to white, this recipe will also work with boneless, skinless thighs, though you might have to add a minute or so to the cooking time. Or use a combination of breasts and thighs. Serve these with a cucumber salad and grilled eggplant in the heart of summer.",
  author_id: User.all.sample.id, featured: false})
sesame_chicken.image = File.open("app/assets/images/sesame_chicken.jpg")
sesame_chicken.save

Ingredient.create!({recipe_id: sesame_chicken.id, content: "4 (6-ounce) boneless, skinless chicken breasts", ord: 1})
Ingredient.create!({recipe_id: sesame_chicken.id, content: "2 tablespoons soy sauce", ord: 2})
Ingredient.create!({recipe_id: sesame_chicken.id, content: "2 teaspoons Asian-style fish sauce", ord: 3})
Ingredient.create!({recipe_id: sesame_chicken.id, content: "1 (2-inch) piece ginger, peeled and grated", ord: 4})
Ingredient.create!({recipe_id: sesame_chicken.id, content: "3 garlic cloves, grated", ord: 5})
Ingredient.create!({recipe_id: sesame_chicken.id, content: "2 limes, as needed", ord: 6})
Ingredient.create!({recipe_id: sesame_chicken.id, content: "2 tablespoons peanut oil, more for grill", ord: 7})
Ingredient.create!({recipe_id: sesame_chicken.id, content: "Sesame oil, as needed", ord: 8})
Ingredient.create!({recipe_id: sesame_chicken.id, content: "Coarsely chopped cilantro, for garnish", ord: 9})
Ingredient.create!({recipe_id: sesame_chicken.id, content: "Thinly sliced red or green chilies, seeded, for garnish (optional)", ord: 10})

Step.create!({recipe_id: sesame_chicken.id,content: "Place chicken breasts between two sheets of parchment or plastic wrap. Using a mallet or rolling pin, pound each to an even thickness of 1/2 inch. Do not make them any thinner or they could dry out.",ord: 1})
Step.create!({recipe_id: sesame_chicken.id,content: "In a large bowl, whisk together soy sauce, fish sauce, ginger and garlic. Grate in zest of 1 lime and squeeze in its juice. Whisk in peanut oil. Place chicken breasts in bowl and turn breasts well to evenly coat with mixture. Cover and refrigerate for at least 1 hour and up to 4 hours. Remove chicken from fridge while you heat the grill.",ord: 2})
Step.create!({recipe_id: sesame_chicken.id,content: "Light the grill, building a hot fire, or heat your gas grill to high. Once grill is fully heated, brush breasts lightly with peanut oil and place chicken on the grill. Cook until undersides are browned and chicken is about halfway cooked, 3 to 5 minutes. Flip breasts and grill until cooked through, 3 to 5 minutes more.",ord: 3})
Step.create!({recipe_id: sesame_chicken.id,content: "Transfer chicken to a platter. Drizzle with sesame oil; garnish with lime juice and cilantro, and chiles if desired.",ord: 4})

#potatoes
potatoes = Recipe.new({title: 'Sweeney Potatoes', yield: '8 to 10 servings', time_minutes: 60,
  description: 'This is a variation of a dish sometimes called "company potatoes," popular in the postwar kitchens of the 1950s, made with canned condensed soups and frozen hash browns. Maura Passanisi, of Alameda, Calif., shared it with The Times as a tribute to her grandmother, Florence Sweeney, who originally served it as a Thanksgiving side dish. Ms. Passanisi uses fresh russet potatoes and no condensed soup, but plenty of cream cheese, sour cream, butter and cheese. "Legendary," she calls the dish. And so it is. Small portions are best. It\'s rich. And feeds a crowd.',
  author_id: User.all.sample.id, featured: false})
potatoes.image = File.open("app/assets/images/sweeney_potatoes.jpg")
potatoes.save

Ingredient.create!({recipe_id: potatoes.id, content: "2 ½ pounds russet potatoes, scrubbed and cut into 1/4-inch cubes", ord: 1})
Ingredient.create!({recipe_id: potatoes.id, content: "1 (8-ounce) package cream cheese, at room temperature", ord: 2})
Ingredient.create!({recipe_id: potatoes.id, content: "½ cup unsalted butter, melted, plus more butter for the pan", ord: 3})
Ingredient.create!({recipe_id: potatoes.id, content: "1 cup sour cream", ord: 4})
Ingredient.create!({recipe_id: potatoes.id, content: "¼ to ½ cup whole milk", ord: 5})
Ingredient.create!({recipe_id: potatoes.id, content: "Kosher salt and ground black pepper, to taste", ord: 6})
Ingredient.create!({recipe_id: potatoes.id, content: "2 ½ cups freshly grated sharp Cheddar cheese (about 8 ounces)", ord: 7})
Ingredient.create!({recipe_id: potatoes.id, content: "Chopped fresh parsley, for garnish (optional)", ord: 8})

Step.create!({recipe_id: potatoes.id,content: "Heat oven to 325 degrees. Put potatoes in a large heavy-bottomed pot and cover with cold water. Set on stove over high heat and bring to a boil, then reduce heat and allow potatoes to simmer until they have just started to soften, about 10 minutes. Drain and set aside.",ord: 1})
Step.create!({recipe_id: potatoes.id,content: "Combine cream cheese, melted butter and sour cream in a large bowl and stir to combine. Add enough milk so that the mixture is creamy but not soupy. Season mixture with salt and pepper to taste. Add potatoes to bowl and stir gently to combine.",ord: 2})
Step.create!({recipe_id: potatoes.id,content: "Generously grease a 9-by-13-inch baking dish. Tip half the potatoes into the dish and spread to the edges, then scatter half the grated cheese over the top. Add remaining potatoes and spread to the edges, then top with remaining cheese.",ord: 3})
Step.create!({recipe_id: potatoes.id,content: "Bake until casserole is bubbling at the edges and cheese has melted across the top, 30 to 35 minutes. Sprinkle with parsley before serving, if you'd like.",ord: 4})

#kale
kale = Recipe.new({title: 'Sautéed Kale', yield: '4 servings', time_minutes: 15,
  description: "This is a technique that elevates basic sauteed greens into something even more savory and tender.",
  author_id: User.all.sample.id, featured: false})
kale.image = File.open("app/assets/images/kale.jpg")
kale.save

Ingredient.create!({recipe_id: kale.id, content: "¼ cup extra-virgin olive oil", ord: 1})
Ingredient.create!({recipe_id: kale.id, content: "3 cloves garlic, peeled and sliced", ord: 2})
Ingredient.create!({recipe_id: kale.id, content: "1 large bunch kale, stemmed, with leaves coarsely chopped", ord: 3})
Ingredient.create!({recipe_id: kale.id, content: "½ cup vegetable stock, white wine or water", ord: 4})
Ingredient.create!({recipe_id: kale.id, content: "Kosher salt, freshly ground black pepper and red-pepper flakes to taste", ord: 5})
Ingredient.create!({recipe_id: kale.id, content: "2 tablespoons red-wine vinegar", ord: 6})

Step.create!({recipe_id: kale.id,content: "Heat olive oil in a large sauté pan set over medium-high heat until it shimmers. Add garlic, and cook until soft.",ord: 1})
Step.create!({recipe_id: kale.id,content: "Add kale to the pan, turn the heat to high and add the stock. Use a spoon to toss the greens in the oil and stock, then cover and cook for approximately 5 to 7 minutes, until it is soft and wilted, but still quite green. Remove cover and continue to cook, stirring occasionally until all the liquid has evaporated, another 1 to 2 minutes. Season to taste with salt and peppers, add vinegar and toss to combine.",ord: 2})


30.times do
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

200.times do
  idx = rand(20...Recipe.all.length)
  recipe = Recipe.all.order(:id)[idx]
  Ingredient.create!({
    recipe_id: recipe.id,
    content: Faker::Food.ingredient,
    ord: rand(9) + 1
    })
end

175.times do
  idx = rand(20...Recipe.all.length)
  recipe = Recipe.all.order(:id)[idx]
  Step.create!({
    recipe_id: recipe.id,
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
