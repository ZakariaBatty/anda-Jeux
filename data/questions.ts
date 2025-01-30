import type { QuizQuestion } from '@/types/quiz';

export const quizQuestions: Record<string, Record<string, QuizQuestion[]>> = {
   DÉBUTANT: {
      'Aquatic Animals': [
         // Easy Level
         {
            id: 1,
            theme: 'Aquatic Animals',
            level: 'Easy',
            type: 'multiple-choice',
            question: 'Which of these is a fish?',
            options: [
               {
                  id: 'A',
                  text: 'Dolphin',
                  image: '/placeholder.svg?text=dolphin',
               },
               {
                  id: 'B',
                  text: 'Salmon',
                  image: '/placeholder.svg?text=salmon',
               },
               { id: 'C', text: 'Whale', image: '/placeholder.svg?text=whale' },
            ],
            correctAnswer: 'B',
            explanation:
               'Salmon is a fish. Dolphins and whales are marine mammals, not fish.',
         },
         {
            id: 2,
            theme: 'Aquatic Animals',
            level: 'Easy',
            type: 'true-false',
            question: 'All fish lay eggs.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'While most fish lay eggs, some species give birth to live young. These are called livebearers.',
         },
         {
            id: 3,
            theme: 'Aquatic Animals',
            level: 'Easy',
            type: 'image-association',
            question: 'Match the aquatic animal to its habitat.',
            options: [
               {
                  id: 'A',
                  text: 'Clownfish',
                  image: '/placeholder.svg?text=clownfish',
               },
               { id: 'B', text: 'Frog', image: '/placeholder.svg?text=frog' },
               {
                  id: 'C',
                  text: 'Coral reef',
                  image: '/placeholder.svg?text=coral_reef',
               },
               { id: 'D', text: 'Pond', image: '/placeholder.svg?text=pond' },
            ],
            correctAnswer: 'A',
            explanation:
               'Clownfish live in coral reefs, while frogs typically live in or near ponds and other freshwater habitats.',
         },
         {
            id: 4,
            theme: 'Aquatic Animals',
            level: 'Easy',
            type: 'multiple-choice',
            question: 'What do fish use to breathe underwater?',
            options: [
               { id: 'A', text: 'Lungs', image: '/placeholder.svg?text=lungs' },
               { id: 'B', text: 'Gills', image: '/placeholder.svg?text=gills' },
               { id: 'C', text: 'Skin', image: '/placeholder.svg?text=skin' },
            ],
            correctAnswer: 'B',
            explanation:
               'Fish use gills to extract oxygen from water, allowing them to breathe underwater.',
         },
         {
            id: 5,
            theme: 'Aquatic Animals',
            level: 'Easy',
            type: 'true-false',
            question: 'All aquatic animals live in saltwater.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'Aquatic animals live in both saltwater and freshwater habitats. Many species are adapted to specific water conditions.',
         },
         // Medium Level
         {
            id: 6,
            theme: 'Aquatic Animals',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Which of these fish is known for its ability to produce electricity?',
            options: [
               {
                  id: 'A',
                  text: 'Clownfish',
                  image: '/placeholder.svg?text=clownfish',
               },
               {
                  id: 'B',
                  text: 'Electric eel',
                  image: '/placeholder.svg?text=electric_eel',
               },
               {
                  id: 'C',
                  text: 'Goldfish',
                  image: '/placeholder.svg?text=goldfish',
               },
            ],
            correctAnswer: 'B',
            explanation:
               'Electric eels are known for their ability to generate powerful electric shocks for hunting and self-defense.',
         },
         {
            id: 7,
            theme: 'Aquatic Animals',
            level: 'Medium',
            type: 'true-false',
            question: 'Seahorses are a type of fish.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'Despite their unique appearance, seahorses are indeed a type of fish belonging to the genus Hippocampus.',
         },
         {
            id: 8,
            theme: 'Aquatic Animals',
            level: 'Medium',
            type: 'image-association',
            question: 'Match these aquatic animals to their primary diet.',
            options: [
               {
                  id: 'A',
                  text: 'Great white shark',
                  image: '/placeholder.svg?text=shark',
               },
               {
                  id: 'B',
                  text: 'Manatee',
                  image: '/placeholder.svg?text=manatee',
               },
               {
                  id: 'C',
                  text: 'Carnivore',
                  image: '/placeholder.svg?text=meat',
               },
               {
                  id: 'D',
                  text: 'Herbivore',
                  image: '/placeholder.svg?text=plants',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Great white sharks are carnivores, primarily eating fish and marine mammals. Manatees are herbivores, feeding on aquatic plants.',
         },
         {
            id: 9,
            theme: 'Aquatic Animals',
            level: 'Medium',
            type: 'multiple-choice',
            question: 'Which of these is not a type of whale?',
            options: [
               {
                  id: 'A',
                  text: 'Beluga',
                  image: '/placeholder.svg?text=beluga',
               },
               { id: 'B', text: 'Orca', image: '/placeholder.svg?text=orca' },
               {
                  id: 'C',
                  text: 'Narwhal',
                  image: '/placeholder.svg?text=narwhal',
               },
            ],
            correctAnswer: 'C',
            explanation:
               "While often called the 'unicorn of the sea', narwhals are actually a species of porpoise, not a whale.",
         },
         {
            id: 10,
            theme: 'Aquatic Animals',
            level: 'Medium',
            type: 'true-false',
            question: 'All sharks must constantly swim to breathe.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'While many shark species need to swim constantly to breathe, some species can pump water over their gills while stationary.',
         },
         // Difficult Level
         {
            id: 11,
            theme: 'Aquatic Animals',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Which of these aquatic animals is known for its advanced problem-solving abilities?',
            options: [
               {
                  id: 'A',
                  text: 'Octopus',
                  image: '/placeholder.svg?text=octopus',
               },
               {
                  id: 'B',
                  text: 'Jellyfish',
                  image: '/placeholder.svg?text=jellyfish',
               },
               {
                  id: 'C',
                  text: 'Starfish',
                  image: '/placeholder.svg?text=starfish',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Octopuses are known for their high intelligence and problem-solving abilities, often demonstrating complex behaviors in captivity and in the wild.',
         },
         {
            id: 12,
            theme: 'Aquatic Animals',
            level: 'Difficult',
            type: 'true-false',
            question:
               'The blue whale is the largest animal to have ever existed on Earth.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'The blue whale is indeed the largest animal known to have ever existed, even larger than the largest known dinosaurs.',
         },
         {
            id: 13,
            theme: 'Aquatic Animals',
            level: 'Difficult',
            type: 'image-association',
            question:
               'Match these aquatic animals to their unique adaptations.',
            options: [
               {
                  id: 'A',
                  text: 'Anglerfish',
                  image: '/placeholder.svg?text=anglerfish',
               },
               {
                  id: 'B',
                  text: 'Axolotl',
                  image: '/placeholder.svg?text=axolotl',
               },
               {
                  id: 'C',
                  text: 'Bioluminescent lure',
                  image: '/placeholder.svg?text=lure',
               },
               {
                  id: 'D',
                  text: 'Regeneration',
                  image: '/placeholder.svg?text=regeneration',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Anglerfish use a bioluminescent lure to attract prey in the deep sea. Axolotls are known for their remarkable ability to regenerate lost body parts.',
         },
         {
            id: 14,
            theme: 'Aquatic Animals',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Which of these fish species is capable of changing its sex?',
            options: [
               {
                  id: 'A',
                  text: 'Clownfish',
                  image: '/placeholder.svg?text=clownfish',
               },
               {
                  id: 'B',
                  text: 'Salmon',
                  image: '/placeholder.svg?text=salmon',
               },
               { id: 'C', text: 'Tuna', image: '/placeholder.svg?text=tuna' },
            ],
            correctAnswer: 'A',
            explanation:
               'Clownfish can change their sex, typically from male to female. This usually happens when the dominant female of a group leaves or dies.',
         },
         {
            id: 15,
            theme: 'Aquatic Animals',
            level: 'Difficult',
            type: 'true-false',
            question:
               'Some species of fish can breathe air and survive on land for short periods.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'Some fish species, like mudskippers and lungfish, have adaptations that allow them to breathe air and survive on land for short periods.',
         },
      ],
      'Feed for Farmed Fish': [
         // Easy Level
         {
            id: 1,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'multiple-choice',
            question: 'What do farmed fish typically eat?',
            options: [
               {
                  id: 'A',
                  text: 'Pellets',
                  image: '/placeholder.svg?text=pellets',
               },
               { id: 'B', text: 'Pizza', image: '/placeholder.svg?text=pizza' },
               {
                  id: 'C',
                  text: 'Seaweed',
                  image: '/placeholder.svg?text=seaweed',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Farmed fish are typically fed specially formulated pellets that contain all the necessary nutrients for their growth and health.',
         },
         {
            id: 2,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'true-false',
            question: 'Farmed fish feed themselves in aquaculture ponds.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               "In aquaculture, fish are fed by farmers according to specific feeding schedules and nutritional requirements. They don't feed themselves as they would in the wild.",
         },
         {
            id: 3,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'image-association',
            question: 'Match the food to the correct animal.',
            options: [
               { id: 'A', text: 'Fish', image: '/placeholder.svg?text=fish' },
               { id: 'B', text: 'Sheep', image: '/placeholder.svg?text=sheep' },
               {
                  id: 'C',
                  text: 'Pellets',
                  image: '/placeholder.svg?text=pellets',
               },
               { id: 'D', text: 'Grass', image: '/placeholder.svg?text=grass' },
            ],
            correctAnswer: 'A',
            explanation:
               'In aquaculture, fish are fed pellets, while sheep, being herbivores, eat grass. Each animal has its specific diet suited to its nutritional needs.',
         },
         {
            id: 4,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               'What is the most common form of fish feed in aquaculture?',
            options: [
               {
                  id: 'A',
                  text: 'Pellets',
                  image: '/placeholder.svg?text=pellets',
               },
               {
                  id: 'B',
                  text: 'Flakes',
                  image: '/placeholder.svg?text=flakes',
               },
               {
                  id: 'C',
                  text: 'Live insects',
                  image: '/placeholder.svg?text=insects',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Pellets are the most common form of fish feed in aquaculture. They are easy to store, distribute, and can be formulated to meet specific nutritional needs of different fish species.',
         },
         {
            id: 5,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'true-false',
            question: 'Fish in aquaculture farms only eat at night.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               "Farmed fish don't only eat at night. Feeding schedules in aquaculture are based on the specific needs of the fish species and can occur at various times throughout the day.",
         },
         // Medium Level
         {
            id: 6,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'multiple-choice',
            question: 'Which of these is a common ingredient in fish feed?',
            options: [
               {
                  id: 'A',
                  text: 'Fishmeal',
                  image: '/placeholder.svg?text=fishmeal',
               },
               {
                  id: 'B',
                  text: 'Chocolate',
                  image: '/placeholder.svg?text=chocolate',
               },
               {
                  id: 'C',
                  text: 'Cheese',
                  image: '/placeholder.svg?text=cheese',
               },
            ],
            correctAnswer: 'A',
            explanation:
               "Fishmeal is a common ingredient in fish feed. It's rich in protein and essential nutrients that support fish growth and health.",
         },
         {
            id: 7,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'true-false',
            question:
               'All fish species in aquaculture farms receive the same type of feed.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'Different fish species have different nutritional requirements. In aquaculture, feed is often formulated specifically for each species to optimize growth and health.',
         },
         {
            id: 8,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'image-association',
            question:
               'Match these feed ingredients to their primary nutrient contribution.',
            options: [
               {
                  id: 'A',
                  text: 'Fishmeal',
                  image: '/placeholder.svg?text=fishmeal',
               },
               {
                  id: 'B',
                  text: 'Fish oil',
                  image: '/placeholder.svg?text=fish_oil',
               },
               {
                  id: 'C',
                  text: 'Protein',
                  image: '/placeholder.svg?text=protein',
               },
               {
                  id: 'D',
                  text: 'Omega-3 fatty acids',
                  image: '/placeholder.svg?text=omega3',
               },
            ],
            correctAnswer: 'D',
            explanation:
               'In fish feed, fishmeal is primarily a source of protein, while fish oil is rich in omega-3 fatty acids. Both are crucial for fish growth and health in aquaculture.',
         },
         {
            id: 9,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'What equipment is commonly used to distribute feed in large-scale fish farms?',
            options: [
               {
                  id: 'A',
                  text: 'Automatic feeders',
                  image: '/placeholder.svg?text=automatic_feeder',
               },
               {
                  id: 'B',
                  text: 'Spoons',
                  image: '/placeholder.svg?text=spoon',
               },
               {
                  id: 'C',
                  text: 'Buckets',
                  image: '/placeholder.svg?text=bucket',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Automatic feeders are commonly used in large-scale fish farms. They ensure precise and timely distribution of feed, improving efficiency and reducing labor costs.',
         },
         {
            id: 10,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'true-false',
            question:
               'The cost of feed represents a minor portion of operational costs in aquaculture.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'This is false. Feed costs often represent 50-70% of operational costs in aquaculture. Efficient feed management is crucial for the economic viability of fish farms.',
         },
         // Difficult Level
         {
            id: 11,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Which alternative protein source is being explored for sustainable aquaculture feed?',
            options: [
               {
                  id: 'A',
                  text: 'Insect meal',
                  image: '/placeholder.svg?text=insect_meal',
               },
               {
                  id: 'B',
                  text: 'Beef protein',
                  image: '/placeholder.svg?text=beef_protein',
               },
               {
                  id: 'C',
                  text: 'Synthetic amino acids',
                  image: '/placeholder.svg?text=synthetic_amino_acids',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Insect meal, particularly from black soldier fly larvae, is being explored as a sustainable alternative protein source for aquaculture feed globally.',
         },
         {
            id: 12,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'true-false',
            question:
               'Precision feeding in aquaculture can help reduce environmental impact.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'True. Precision feeding technologies help reduce feed waste and environmental impact by ensuring fish receive the right amount of feed at the right time.',
         },
         {
            id: 13,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'image-association',
            question:
               'Match these feed management strategies to their primary benefits in aquaculture.',
            options: [
               {
                  id: 'A',
                  text: 'Precision feeding',
                  image: '/placeholder.svg?text=precision_feeding',
               },
               {
                  id: 'B',
                  text: 'Use of probiotics',
                  image: '/placeholder.svg?text=probiotics',
               },
               {
                  id: 'C',
                  text: 'Reduced feed waste',
                  image: '/placeholder.svg?text=reduced_waste',
               },
               {
                  id: 'D',
                  text: 'Improved fish health',
                  image: '/placeholder.svg?text=fish_health',
               },
            ],
            correctAnswer: 'D',
            explanation:
               'Precision feeding technologies help reduce feed waste and environmental impact, while the use of probiotics in feed can improve fish health and disease resistance.',
         },
         {
            id: 14,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'What advanced technology is being adopted in modern aquaculture for feed management?',
            options: [
               {
                  id: 'A',
                  text: 'AI-powered feeding systems',
                  image: '/placeholder.svg?text=ai_feeding',
               },
               {
                  id: 'B',
                  text: 'Manual feeding',
                  image: '/placeholder.svg?text=manual_feeding',
               },
               {
                  id: 'C',
                  text: 'Seasonal feeding',
                  image: '/placeholder.svg?text=seasonal_feeding',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'AI-powered feeding systems are being adopted in modern aquaculture. These systems can optimize feed distribution based on factors like fish behavior, water conditions, and growth rates.',
         },
         {
            id: 15,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'true-false',
            question:
               'The Fish-In Fish-Out (FIFO) ratio is a measure of aquaculture sustainability.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'True. The FIFO ratio measures the amount of wild fish used in feed to produce farmed fish. A lower ratio indicates more sustainable aquaculture practices.',
         },
      ],
      'Aquaculture Professions': [
         // Easy Level
         {
            id: 1,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'multiple-choice',
            question: 'What do farmed fish typically eat?',
            options: [
               {
                  id: 'A',
                  text: 'Pellets',
                  image: '/placeholder.svg?text=pellets',
               },
               { id: 'B', text: 'Pizza', image: '/placeholder.svg?text=pizza' },
               {
                  id: 'C',
                  text: 'Seaweed',
                  image: '/placeholder.svg?text=seaweed',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Farmed fish are typically fed specially formulated pellets that contain all the necessary nutrients for their growth and health.',
         },
         {
            id: 2,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'true-false',
            question: 'Farmed fish feed themselves in aquaculture ponds.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               "In aquaculture, fish are fed by farmers according to specific feeding schedules and nutritional requirements. They don't feed themselves as they would in the wild.",
         },
         {
            id: 3,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'image-association',
            question: 'Match the food to the correct animal.',
            options: [
               { id: 'A', text: 'Fish', image: '/placeholder.svg?text=fish' },
               { id: 'B', text: 'Sheep', image: '/placeholder.svg?text=sheep' },
               {
                  id: 'C',
                  text: 'Pellets',
                  image: '/placeholder.svg?text=pellets',
               },
               { id: 'D', text: 'Grass', image: '/placeholder.svg?text=grass' },
            ],
            correctAnswer: 'A',
            explanation:
               'In aquaculture, fish are fed pellets, while sheep, being herbivores, eat grass. Each animal has its specific diet suited to its nutritional needs.',
         },
         {
            id: 4,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               'What is the most common form of fish feed in aquaculture?',
            options: [
               {
                  id: 'A',
                  text: 'Pellets',
                  image: '/placeholder.svg?text=pellets',
               },
               {
                  id: 'B',
                  text: 'Flakes',
                  image: '/placeholder.svg?text=flakes',
               },
               {
                  id: 'C',
                  text: 'Live insects',
                  image: '/placeholder.svg?text=insects',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Pellets are the most common form of fish feed in aquaculture. They are easy to store, distribute, and can be formulated to meet specific nutritional needs of different fish species.',
         },
         {
            id: 5,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'true-false',
            question: 'Fish in aquaculture farms only eat at night.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               "Farmed fish don't only eat at night. Feeding schedules in aquaculture are based on the specific needs of the fish species and can occur at various times throughout the day.",
         },
         // Medium Level
         {
            id: 6,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'multiple-choice',
            question: 'Which of these is a common ingredient in fish feed?',
            options: [
               {
                  id: 'A',
                  text: 'Fishmeal',
                  image: '/placeholder.svg?text=fishmeal',
               },
               {
                  id: 'B',
                  text: 'Chocolate',
                  image: '/placeholder.svg?text=chocolate',
               },
               {
                  id: 'C',
                  text: 'Cheese',
                  image: '/placeholder.svg?text=cheese',
               },
            ],
            correctAnswer: 'A',
            explanation:
               "Fishmeal is a common ingredient in fish feed. It's rich in protein and essential nutrients that support fish growth and health.",
         },
         {
            id: 7,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'true-false',
            question:
               'All fish species in aquaculture farms receive the same type of feed.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'Different fish species have different nutritional requirements. In aquaculture, feed is often formulated specifically for each species to optimize growth and health.',
         },
         {
            id: 8,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'image-association',
            question:
               'Match these feed ingredients to their primary nutrient contribution.',
            options: [
               {
                  id: 'A',
                  text: 'Fishmeal',
                  image: '/placeholder.svg?text=fishmeal',
               },
               {
                  id: 'B',
                  text: 'Fish oil',
                  image: '/placeholder.svg?text=fish_oil',
               },
               {
                  id: 'C',
                  text: 'Protein',
                  image: '/placeholder.svg?text=protein',
               },
               {
                  id: 'D',
                  text: 'Omega-3 fatty acids',
                  image: '/placeholder.svg?text=omega3',
               },
            ],
            correctAnswer: 'D',
            explanation:
               'In fish feed, fishmeal is primarily a source of protein, while fish oil is rich in omega-3 fatty acids. Both are crucial for fish growth and health in aquaculture.',
         },
         {
            id: 9,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'What equipment is commonly used to distribute feed in large-scale fish farms?',
            options: [
               {
                  id: 'A',
                  text: 'Automatic feeders',
                  image: '/placeholder.svg?text=automatic_feeder',
               },
               {
                  id: 'B',
                  text: 'Spoons',
                  image: '/placeholder.svg?text=spoon',
               },
               {
                  id: 'C',
                  text: 'Buckets',
                  image: '/placeholder.svg?text=bucket',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Automatic feeders are commonly used in large-scale fish farms. They ensure precise and timely distribution of feed, improving efficiency and reducing labor costs.',
         },
         {
            id: 10,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'true-false',
            question:
               'The cost of feed represents a minor portion of operational costs in aquaculture.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'This is false. Feed costs often represent 50-70% of operational costs in aquaculture. Efficient feed management is crucial for the economic viability of fish farms.',
         },
         // Difficult Level
         {
            id: 11,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Which alternative protein source is being explored for sustainable aquaculture feed?',
            options: [
               {
                  id: 'A',
                  text: 'Insect meal',
                  image: '/placeholder.svg?text=insect_meal',
               },
               {
                  id: 'B',
                  text: 'Beef protein',
                  image: '/placeholder.svg?text=beef_protein',
               },
               {
                  id: 'C',
                  text: 'Synthetic amino acids',
                  image: '/placeholder.svg?text=synthetic_amino_acids',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Insect meal, particularly from black soldier fly larvae, is being explored as a sustainable alternative protein source for aquaculture feed globally.',
         },
         {
            id: 12,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'true-false',
            question:
               'Precision feeding in aquaculture can help reduce environmental impact.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'True. Precision feeding technologies help reduce feed waste and environmental impact by ensuring fish receive the right amount of feed at the right time.',
         },
         {
            id: 13,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'image-association',
            question:
               'Match these feed management strategies to their primary benefits in aquaculture.',
            options: [
               {
                  id: 'A',
                  text: 'Precision feeding',
                  image: '/placeholder.svg?text=precision_feeding',
               },
               {
                  id: 'B',
                  text: 'Use of probiotics',
                  image: '/placeholder.svg?text=probiotics',
               },
               {
                  id: 'C',
                  text: 'Reduced feed waste',
                  image: '/placeholder.svg?text=reduced_waste',
               },
               {
                  id: 'D',
                  text: 'Improved fish health',
                  image: '/placeholder.svg?text=fish_health',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Precision feeding technologies help reduce feed waste and environmental impact, while the use of probiotics in feed can improve fish health and disease resistance.',
         },
         {
            id: 14,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'What advanced technology is being adopted in modern aquaculture for feed management?',
            options: [
               {
                  id: 'A',
                  text: 'AI-powered feeding systems',
                  image: '/placeholder.svg?text=ai_feeding',
               },
               {
                  id: 'B',
                  text: 'Manual feeding',
                  image: '/placeholder.svg?text=manual_feeding',
               },
               {
                  id: 'C',
                  text: 'Seasonal feeding',
                  image: '/placeholder.svg?text=seasonal_feeding',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'AI-powered feeding systems are being adopted in modern aquaculture. These systems can optimize feed distribution based on factors like fish behavior, water conditions, and growth rates.',
         },
         {
            id: 15,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'true-false',
            question:
               'The Fish-In Fish-Out (FIFO) ratio is a measure of aquaculture sustainability.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'True. The FIFO ratio measures the amount of wild fish used in feed to produce farmed fish. A lower ratio indicates more sustainable aquaculture practices.',
         },
      ],
      'Aquaculture and Environment': [
         // Easy Level
         {
            id: 1,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'multiple-choice',
            question: 'What do farmed fish typically eat?',
            options: [
               {
                  id: 'A',
                  text: 'Pellets',
                  image: '/placeholder.svg?text=pellets',
               },
               { id: 'B', text: 'Pizza', image: '/placeholder.svg?text=pizza' },
               {
                  id: 'C',
                  text: 'Seaweed',
                  image: '/placeholder.svg?text=seaweed',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Farmed fish are typically fed specially formulated pellets that contain all the necessary nutrients for their growth and health.',
         },
         {
            id: 2,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'true-false',
            question: 'Farmed fish feed themselves in aquaculture ponds.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               "In aquaculture, fish are fed by farmers according to specific feeding schedules and nutritional requirements. They don't feed themselves as they would in the wild.",
         },
         {
            id: 3,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'image-association',
            question: 'Match the food to the correct animal.',
            options: [
               { id: 'A', text: 'Fish', image: '/placeholder.svg?text=fish' },
               { id: 'B', text: 'Sheep', image: '/placeholder.svg?text=sheep' },
               {
                  id: 'C',
                  text: 'Pellets',
                  image: '/placeholder.svg?text=pellets',
               },
               { id: 'D', text: 'Grass', image: '/placeholder.svg?text=grass' },
            ],
            correctAnswer: 'A',
            explanation:
               'In aquaculture, fish are fed pellets, while sheep, being herbivores, eat grass. Each animal has its specific diet suited to its nutritional needs.',
         },
         {
            id: 4,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               'What is the most common form of fish feed in aquaculture?',
            options: [
               {
                  id: 'A',
                  text: 'Pellets',
                  image: '/placeholder.svg?text=pellets',
               },
               {
                  id: 'B',
                  text: 'Flakes',
                  image: '/placeholder.svg?text=flakes',
               },
               {
                  id: 'C',
                  text: 'Live insects',
                  image: '/placeholder.svg?text=insects',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Pellets are the most common form of fish feed in aquaculture. They are easy to store, distribute, and can be formulated to meet specific nutritional needs of different fish species.',
         },
         {
            id: 5,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'true-false',
            question: 'Fish in aquaculture farms only eat at night.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               "Farmed fish don't only eat at night. Feeding schedules in aquaculture are based on the specific needs of the fish species and can occur at various times throughout the day.",
         },
         // Medium Level
         {
            id: 6,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'multiple-choice',
            question: 'Which of these is a common ingredient in fish feed?',
            options: [
               {
                  id: 'A',
                  text: 'Fishmeal',
                  image: '/placeholder.svg?text=fishmeal',
               },
               {
                  id: 'B',
                  text: 'Chocolate',
                  image: '/placeholder.svg?text=chocolate',
               },
               {
                  id: 'C',
                  text: 'Cheese',
                  image: '/placeholder.svg?text=cheese',
               },
            ],
            correctAnswer: 'A',
            explanation:
               "Fishmeal is a common ingredient in fish feed. It's rich in protein and essential nutrients that support fish growth and health.",
         },
         {
            id: 7,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'true-false',
            question:
               'All fish species in aquaculture farms receive the same type of feed.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'Different fish species have different nutritional requirements. In aquaculture, feed is often formulated specifically for each species to optimize growth and health.',
         },
         {
            id: 8,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'image-association',
            question:
               'Match these feed ingredients to their primary nutrient contribution.',
            options: [
               {
                  id: 'A',
                  text: 'Fishmeal',
                  image: '/placeholder.svg?text=fishmeal',
               },
               {
                  id: 'B',
                  text: 'Fish oil',
                  image: '/placeholder.svg?text=fish_oil',
               },
               {
                  id: 'C',
                  text: 'Protein',
                  image: '/placeholder.svg?text=protein',
               },
               {
                  id: 'D',
                  text: 'Omega-3 fatty acids',
                  image: '/placeholder.svg?text=omega3',
               },
            ],
            correctAnswer: 'B',
            explanation:
               'In fish feed, fishmeal is primarily a source of protein, while fish oil is rich in omega-3 fatty acids. Both are crucial for fish growth and health in aquaculture.',
         },
         {
            id: 9,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'What equipment is commonly used to distribute feed in large-scale fish farms?',
            options: [
               {
                  id: 'A',
                  text: 'Automatic feeders',
                  image: '/placeholder.svg?text=automatic_feeder',
               },
               {
                  id: 'B',
                  text: 'Spoons',
                  image: '/placeholder.svg?text=spoon',
               },
               {
                  id: 'C',
                  text: 'Buckets',
                  image: '/placeholder.svg?text=bucket',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Automatic feeders are commonly used in large-scale fish farms. They ensure precise and timely distribution of feed, improving efficiency and reducing labor costs.',
         },
         {
            id: 10,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'true-false',
            question:
               'The cost of feed represents a minor portion of operational costs in aquaculture.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'This is false. Feed costs often represent 50-70% of operational costs in aquaculture. Efficient feed management is crucial for the economic viability of fish farms.',
         },
         // Difficult Level
         {
            id: 11,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Which alternative protein source is being explored for sustainable aquaculture feed?',
            options: [
               {
                  id: 'A',
                  text: 'Insect meal',
                  image: '/placeholder.svg?text=insect_meal',
               },
               {
                  id: 'B',
                  text: 'Beef protein',
                  image: '/placeholder.svg?text=beef_protein',
               },
               {
                  id: 'C',
                  text: 'Synthetic amino acids',
                  image: '/placeholder.svg?text=synthetic_amino_acids',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Insect meal, particularly from black soldier fly larvae, is being explored as a sustainable alternative protein source for aquaculture feed globally.',
         },
         {
            id: 12,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'true-false',
            question:
               'Precision feeding in aquaculture can help reduce environmental impact.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'True. Precision feeding technologies help reduce feed waste and environmental impact by ensuring fish receive the right amount of feed at the right time.',
         },
         {
            id: 13,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'image-association',
            question:
               'Match these feed management strategies to their primary benefits in aquaculture.',
            options: [
               {
                  id: 'A',
                  text: 'Precision feeding',
                  image: '/placeholder.svg?text=precision_feeding',
               },
               {
                  id: 'B',
                  text: 'Use of probiotics',
                  image: '/placeholder.svg?text=probiotics',
               },
               {
                  id: 'C',
                  text: 'Reduced feed waste',
                  image: '/placeholder.svg?text=reduced_waste',
               },
               {
                  id: 'D',
                  text: 'Improved fish health',
                  image: '/placeholder.svg?text=fish_health',
               },
            ],
            correctAnswer: 'D',
            explanation:
               'Precision feeding technologies help reduce feed waste and environmental impact, while the use of probiotics in feed can improve fish health and disease resistance.',
         },
         {
            id: 14,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'What advanced technology is being adopted in modern aquaculture for feed management?',
            options: [
               {
                  id: 'A',
                  text: 'AI-powered feeding systems',
                  image: '/placeholder.svg?text=ai_feeding',
               },
               {
                  id: 'B',
                  text: 'Manual feeding',
                  image: '/placeholder.svg?text=manual_feeding',
               },
               {
                  id: 'C',
                  text: 'Seasonal feeding',
                  image: '/placeholder.svg?text=seasonal_feeding',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'AI-powered feeding systems are being adopted in modern aquaculture. These systems can optimize feed distribution based on factors like fish behavior, water conditions, and growth rates.',
         },
         {
            id: 15,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'true-false',
            question:
               'The Fish-In Fish-Out (FIFO) ratio is a measure of aquaculture sustainability.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'True. The FIFO ratio measures the amount of wild fish used in feed to produce farmed fish. A lower ratio indicates more sustainable aquaculture practices.',
         },
      ],
   },
   AVANCÉ: {
      'Aquatic Animals': [],
      'Feed for Farmed Fish': [
         // Easy Level
         {
            id: 1,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               'Which of these is a common ingredient in fish feed used in Moroccan aquaculture?',
            options: [
               {
                  id: 'A',
                  text: 'Fishmeal',
                  image: '/placeholder.svg?text=fishmeal',
               },
               {
                  id: 'B',
                  text: 'Chocolate',
                  image: '/placeholder.svg?text=chocolate',
               },
               { id: 'C', text: 'Rice', image: '/placeholder.svg?text=rice' },
            ],
            correctAnswer: 'A',
            explanation:
               "Fishmeal is a common ingredient in fish feed used in Moroccan aquaculture. It's rich in protein and essential nutrients that support fish growth and health.",
         },
         {
            id: 2,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'true-false',
            question:
               'In Moroccan aquaculture, all fish species receive the same type of feed.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'Different fish species have different nutritional requirements. In Moroccan aquaculture, feed is formulated specifically for each species to optimize growth and health.',
         },
         {
            id: 3,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'image-association',
            question:
               'Match these feed ingredients to their primary nutrient contribution in Moroccan aquaculture.',
            options: [
               {
                  id: 'A',
                  text: 'Fishmeal',
                  image: '/placeholder.svg?text=fishmeal',
               },
               {
                  id: 'B',
                  text: 'Fish oil',
                  image: '/placeholder.svg?text=fish_oil',
               },
               {
                  id: 'C',
                  text: 'Protein',
                  image: '/placeholder.svg?text=protein',
               },
               {
                  id: 'D',
                  text: 'Omega-3 fatty acids',
                  image: '/placeholder.svg?text=omega3',
               },
            ],
            correctAnswer: 'A-C,B-D',
            explanation:
               'In fish feed used in Morocco, fishmeal is primarily a source of protein, while fish oil is rich in omega-3 fatty acids. Both are crucial for fish growth and health in aquaculture.',
         },
         {
            id: 4,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               'What equipment is commonly used to distribute feed in large-scale Moroccan fish farms?',
            options: [
               {
                  id: 'A',
                  text: 'Automatic feeders',
                  image: '/placeholder.svg?text=automatic_feeder',
               },
               {
                  id: 'B',
                  text: 'Spoons',
                  image: '/placeholder.svg?text=spoon',
               },
               {
                  id: 'C',
                  text: 'Drones',
                  image: '/placeholder.svg?text=drone',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Automatic feeders are commonly used in large-scale Moroccan fish farms. They ensure precise and timely distribution of feed, improving efficiency and reducing labor costs.',
         },
         {
            id: 5,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'true-false',
            question:
               'The cost of feed represents a significant portion of operational costs in Moroccan aquaculture.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'This is true. Feed costs often represent 50-70% of operational costs in aquaculture, including in Morocco. Efficient feed management is crucial for the economic viability of fish farms.',
         },
         // Medium Level
         {
            id: 6,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Which local ingredient is being explored as a sustainable protein source for fish feed in Morocco?',
            options: [
               {
                  id: 'A',
                  text: 'Argan meal',
                  image: '/placeholder.svg?text=argan_meal',
               },
               {
                  id: 'B',
                  text: 'Olive pomace',
                  image: '/placeholder.svg?text=olive_pomace',
               },
               {
                  id: 'C',
                  text: 'Date palm waste',
                  image: '/placeholder.svg?text=date_palm_waste',
               },
            ],
            correctAnswer: 'B',
            explanation:
               "Olive pomace, a by-product of olive oil production, is being explored as a sustainable local ingredient for fish feed in Morocco. It's rich in nutrients and helps reduce waste from the olive industry.",
         },
         {
            id: 7,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'true-false',
            question: 'Morocco imports all of its fish feed for aquaculture.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'While Morocco does import some fish feed, efforts are being made to increase local production. Some feed is produced domestically to reduce dependency on imports and support the local economy.',
         },
         {
            id: 8,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'image-association',
            question:
               'Match these Moroccan aquaculture species to their preferred feed type.',
            options: [
               {
                  id: 'A',
                  text: 'Sea bass',
                  image: '/placeholder.svg?text=sea_bass',
               },
               {
                  id: 'B',
                  text: 'Tilapia',
                  image: '/placeholder.svg?text=tilapia',
               },
               {
                  id: 'C',
                  text: 'High protein feed',
                  image: '/placeholder.svg?text=high_protein',
               },
               {
                  id: 'D',
                  text: 'Plant-based feed',
                  image: '/placeholder.svg?text=plant_based',
               },
            ],
            correctAnswer: 'A-C,B-D',
            explanation:
               'In Moroccan aquaculture, sea bass typically requires high protein feed, while tilapia can thrive on more plant-based diets. This reflects the different nutritional needs of these species.',
         },
         {
            id: 9,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'What challenge does Morocco face in developing its aquaculture feed industry?',
            options: [
               {
                  id: 'A',
                  text: 'Lack of water resources',
                  image: '/placeholder.svg?text=water_scarcity',
               },
               {
                  id: 'B',
                  text: 'Limited research facilities',
                  image: '/placeholder.svg?text=research_lab',
               },
               {
                  id: 'C',
                  text: 'Oversupply of raw materials',
                  image: '/placeholder.svg?text=raw_materials',
               },
            ],
            correctAnswer: 'B',
            explanation:
               'Limited research facilities pose a challenge for Morocco in developing its aquaculture feed industry. More research is needed to optimize feed formulations for local species and conditions.',
         },
         {
            id: 10,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'true-false',
            question:
               'Moroccan aquaculture farms are required to keep detailed records of their feed usage.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'True. Moroccan aquaculture farms are required to maintain detailed records of their feed usage. This helps in monitoring feed efficiency, environmental impact, and compliance with regulations.',
         },
         // Difficult Level
         {
            id: 11,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Which advanced feed management strategy is being implemented in some Moroccan aquaculture farms?',
            options: [
               {
                  id: 'A',
                  text: 'Biofloc technology',
                  image: '/placeholder.svg?text=biofloc',
               },
               {
                  id: 'B',
                  text: 'Genetic feed optimization',
                  image: '/placeholder.svg?text=genetic_optimization',
               },
               {
                  id: 'C',
                  text: 'Nanotechnology in feed',
                  image: '/placeholder.svg?text=nanotechnology',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Biofloc technology is being implemented in some Moroccan aquaculture farms. This system promotes the growth of microorganisms that can be consumed by fish, reducing the need for external feed and improving water quality.',
         },
         {
            id: 12,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'true-false',
            question:
               'Morocco has established a national feed standard for aquaculture.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'True. Morocco has established national feed standards for aquaculture to ensure quality, safety, and sustainability in the industry. These standards align with international best practices.',
         },
         {
            id: 13,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'image-association',
            question:
               'Match these feed additives to their functions in Moroccan aquaculture.',
            options: [
               {
                  id: 'A',
                  text: 'Probiotics',
                  image: '/placeholder.svg?text=probiotics',
               },
               {
                  id: 'B',
                  text: 'Antioxidants',
                  image: '/placeholder.svg?text=antioxidants',
               },
               {
                  id: 'C',
                  text: 'Improve gut health',
                  image: '/placeholder.svg?text=gut_health',
               },
               {
                  id: 'D',
                  text: 'Extend feed shelf life',
                  image: '/placeholder.svg?text=shelf_life',
               },
            ],
            correctAnswer: 'A-C,B-D',
            explanation:
               'In Moroccan aquaculture, probiotics are used to improve fish gut health and overall immunity, while antioxidants are added to feeds to extend their shelf life and preserve nutritional quality.',
         },
         {
            id: 14,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'What innovative approach is Morocco exploring to reduce the environmental impact of fish feed?',
            options: [
               {
                  id: 'A',
                  text: 'Circular economy model',
                  image: '/placeholder.svg?text=circular_economy',
               },
               {
                  id: 'B',
                  text: 'Deep-sea farming',
                  image: '/placeholder.svg?text=deep_sea_farming',
               },
               {
                  id: 'C',
                  text: 'Genetic modification of fish',
                  image: '/placeholder.svg?text=genetic_modification',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Morocco is exploring a circular economy model in aquaculture. This approach aims to minimize waste and maximize resource efficiency by using by-products from other industries as feed ingredients and recycling aquaculture waste.',
         },
         {
            id: 15,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'true-false',
            question:
               'The use of growth hormones in aquaculture feed is permitted in Morocco.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'False. The use of growth hormones in aquaculture feed is not permitted in Morocco. This aligns with international standards and ensures the safety and quality of aquaculture products.',
         },
      ],
   },
   EXCELLENT: {
      'Aquatic Animals': [],
      'Feed for Farmed Fish': [
         // Easy Level
         {
            id: 1,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               'Which alternative protein source is being explored for sustainable aquaculture feed in Morocco?',
            options: [
               {
                  id: 'A',
                  text: 'Insect meal',
                  image: '/placeholder.svg?text=insect_meal',
               },
               {
                  id: 'B',
                  text: 'Beef protein',
                  image: '/placeholder.svg?text=beef_protein',
               },
               {
                  id: 'C',
                  text: 'Synthetic amino acids',
                  image: '/placeholder.svg?text=synthetic_amino_acids',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'Insect meal, particularly from black soldier fly larvae, is being explored as a sustainable alternative protein source for aquaculture feed in Morocco andglobally.',
         },
         {
            id: 2,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'true-false',
            question:
               'Morocco has implemented specific regulations for aquaculture feed quality and safety.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'True. Morocco has implemented regulations to ensure the quality and safety of aquaculture feed, aligning with international standards and supporting the growth of sustainable aquaculture.',
         },
         {
            id: 3,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'image-association',
            question:
               'Match these feed management strategies to their primary benefits in Moroccan aquaculture.',
            options: [
               {
                  id: 'A',
                  text: 'Precision feeding',
                  image: '/placeholder.svg?text=precision_feeding',
               },
               {
                  id: 'B',
                  text: 'Use of probiotics',
                  image: '/placeholder.svg?text=probiotics',
               },
               {
                  id: 'C',
                  text: 'Reduced feed waste',
                  image: '/placeholder.svg?text=reduced_waste',
               },
               {
                  id: 'D',
                  text: 'Improved fish health',
                  image: '/placeholder.svg?text=fish_health',
               },
            ],
            correctAnswer: 'A-C,B-D',
            explanation:
               'Precision feeding technologies help reduce feed waste and environmental impact, while the use of probiotics in feed can improve fish health and disease resistance in Moroccan aquaculture.',
         },
         {
            id: 4,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               'What advanced technology is being adopted in Moroccan aquaculture for feed management?',
            options: [
               {
                  id: 'A',
                  text: 'AI-powered feeding systems',
                  image: '/placeholder.svg?text=ai_feeding',
               },
               {
                  id: 'B',
                  text: 'Manual feeding',
                  image: '/placeholder.svg?text=manual_feeding',
               },
               {
                  id: 'C',
                  text: 'Seasonal feeding',
                  image: '/placeholder.svg?text=seasonal_feeding',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'AI-powered feeding systems are being adopted in modern Moroccan aquaculture. These systems can optimize feed distribution based on factors like fish behavior, water conditions, and growth rates.',
         },
         {
            id: 5,
            theme: 'Feed for Farmed Fish',
            level: 'Easy',
            type: 'true-false',
            question:
               "The development of local feed production capacity is a priority for Morocco's aquaculture sector.",
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               "True. Developing local feed production capacity is a priority for Morocco's aquaculture sector. It aims to reduce dependency on imported feed, lower costs, and ensure a stable supply of high-quality feed.",
         },
         // Medium Level
         {
            id: 6,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Which Moroccan research institution is leading studies on sustainable aquaculture feed?',
            options: [
               {
                  id: 'A',
                  text: 'National Institute of Fisheries Research (INRH)',
                  image: '/placeholder.svg?text=INRH',
               },
               {
                  id: 'B',
                  text: 'Hassan II Agronomic and Veterinary Institute',
                  image: '/placeholder.svg?text=Hassan_II',
               },
               {
                  id: 'C',
                  text: 'Moroccan Institute for Agricultural Research (INRA)',
                  image: '/placeholder.svg?text=INRA',
               },
            ],
            correctAnswer: 'A',
            explanation:
               'The National Institute of Fisheries Research (INRH) is leading studies on sustainable aquaculture feed in Morocco. They conduct research on feed formulation, alternative ingredients, and feeding strategies.',
         },
         {
            id: 7,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'true-false',
            question:
               "Morocco's aquaculture sector has achieved complete self-sufficiency in feed production.",
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'False. While Morocco is working towards increasing local feed production, the aquaculture sector has not yet achieved complete self-sufficiency. Some feed ingredients and specialized feeds are still imported.',
         },
         {
            id: 8,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'image-association',
            question:
               'Match these feed ingredients to their roles in Moroccan aquaculture nutrition.',
            options: [
               {
                  id: 'A',
                  text: 'Algae extract',
                  image: '/placeholder.svg?text=algae_extract',
               },
               {
                  id: 'B',
                  text: 'Krill meal',
                  image: '/placeholder.svg?text=krill_meal',
               },
               {
                  id: 'C',
                  text: 'Pigmentation',
                  image: '/placeholder.svg?text=pigmentation',
               },
               {
                  id: 'D',
                  text: 'Omega-3 boost',
                  image: '/placeholder.svg?text=omega3_boost',
               },
            ],
            correctAnswer: 'A-C,B-D',
            explanation:
               'In Moroccan aquaculture, algae extracts are often used for fish pigmentation, especially in species like sea bream, while krill meal is used to boost omega-3 fatty acid content in fish feed.',
         },
         {
            id: 9,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'What sustainability certification is being promoted for aquaculture feed in Morocco?',
            options: [
               {
                  id: 'A',
                  text: 'Marine Stewardship Council (MSC)',
                  image: '/placeholder.svg?text=MSC',
               },
               {
                  id: 'B',
                  text: 'Aquaculture Stewardship Council (ASC)',
                  image: '/placeholder.svg?text=ASC',
               },
               {
                  id: 'C',
                  text: 'Global G.A.P.',
                  image: '/placeholder.svg?text=Global_GAP',
               },
            ],
            correctAnswer: 'B',
            explanation:
               'The Aquaculture Stewardship Council (ASC) certification is being promoted for aquaculture feed in Morocco. This certification ensures that feed is sourced and produced responsibly, considering environmental and social factors.',
         },
         {
            id: 10,
            theme: 'Feed for Farmed Fish',
            level: 'Medium',
            type: 'true-false',
            question:
               'Morocco has banned the use of antibiotics in aquaculture feed.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'B',
            explanation:
               'False. While Morocco regulates the use of antibiotics in aquaculture, they are not completely banned. Their use is restricted and monitored to prevent antimicrobial resistance and ensure food safety.',
         },
         // Difficult Level
         {
            id: 11,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Which innovative feed technology is being tested in Moroccan marine aquaculture?',
            options: [
               {
                  id: 'A',
                  text: 'Acoustic feeding triggers',
                  image: '/placeholder.svg?text=acoustic_triggers',
               },
               {
                  id: 'B',
                  text: 'Drone-based feed distribution',
                  image: '/placeholder.svg?text=drone_feeding',
               },
               {
                  id: 'C',
                  text: 'Submerged feeding stations',
                  image: '/placeholder.svg?text=submerged_stations',
               },
            ],
            correctAnswer: 'C',
            explanation:
               'Submerged feeding stations are being tested in Moroccan marine aquaculture. These stations allow for precise feeding at different depths, reducing feed waste and improving distribution in offshore farms.',
         },
         {
            id: 12,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'true-false',
            question:
               'Morocco has implemented a traceability system for aquaculture feed ingredients.',
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               'True. Morocco has implemented a traceability system for aquaculture feed ingredients. This system helps ensure the quality and safety of feed, and supports sustainable sourcing practices.',
         },
         {
            id: 13,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'image-association',
            question:
               'Match these advanced feed concepts to their applications in Moroccan aquaculture.',
            options: [
               {
                  id: 'A',
                  text: 'Nutrigenomics',
                  image: '/placeholder.svg?text=nutrigenomics',
               },
               {
                  id: 'B',
                  text: 'Nanotechnology',
                  image: '/placeholder.svg?text=nanotechnology',
               },
               {
                  id: 'C',
                  text: 'Personalized fish diets',
                  image: '/placeholder.svg?text=personalized_diets',
               },
               {
                  id: 'D',
                  text: 'Enhanced nutrient delivery',
                  image: '/placeholder.svg?text=nutrient_delivery',
               },
            ],
            correctAnswer: 'A-C,B-D',
            explanation:
               'In advanced Moroccan aquaculture, nutrigenomics is being used to develop personalized fish diets based on genetic factors, while nanotechnology is explored for enhanced nutrient delivery in feeds.',
         },
         {
            id: 14,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'What innovative approach is Morocco taking to address the fish oil shortage in aquaculture feed?',
            options: [
               {
                  id: 'A',
                  text: 'Genetic modification of marine microalgae',
                  image: '/placeholder.svg?text=gm_microalgae',
               },
               {
                  id: 'B',
                  text: 'Synthetic fish oil production',
                  image: '/placeholder.svg?text=synthetic_oil',
               },
               {
                  id: 'C',
                  text: 'Land-based plant oil blends',
                  image: '/placeholder.svg?text=plant_oil_blends',
               },
            ],
            correctAnswer: 'C',
            explanation:
               'Morocco is exploring the use of land-based plant oil blends as a sustainable alternative to fish oilin aquaculture feed. This approach aims to reduce dependency on marine resources while maintaining the nutritional quality of feed.',
         },
         {
            id: 15,
            theme: 'Feed for Farmed Fish',
            level: 'Difficult',
            type: 'true-false',
            question:
               "Morocco's aquaculture feed research includes studies on the impact of climate change on feed efficiency.",
            options: [
               { id: 'A', text: 'True' },
               { id: 'B', text: 'False' },
            ],
            correctAnswer: 'A',
            explanation:
               "True. Morocco's aquaculture feed research includes studies on how climate change affects feed efficiency. This research aims to develop adaptive feeding strategies for changing environmental conditions.",
         },
      ],
   },
};

export const themes = [
   'Aquatic Animals',
   'Feed for Farmed Fish',
   'Aquaculture Professions',
   'Aquaculture and Environment',
] as const;

export function getRandomQuestions(
   userLevel: string,
   theme: string,
   difficulty: 'Easy' | 'Medium' | 'Difficult',
   count: number
): QuizQuestion[] {
   if (!quizQuestions[userLevel] || !quizQuestions[userLevel][theme]) {
      console.error(
         `No questions found for level: ${userLevel}, theme: ${theme}`
      );
      return [];
   }

   const questions = quizQuestions[userLevel][theme].filter(
      (q) => q.level === difficulty
   );

   if (!questions || questions.length === 0) {
      console.error(
         `No questions found for level: ${userLevel}, theme: ${theme}, difficulty: ${difficulty}`
      );
      return [];
   }

   const shuffled = [...questions].sort(() => Math.random() - 0.5);
   return shuffled.slice(0, Math.min(count, questions.length));
}
