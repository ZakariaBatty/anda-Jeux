import type { QuizQuestion } from '@/types/quiz';

export const quizQuestions: Record<string, Record<string, QuizQuestion[]>> = {
   DÉBUTANT: {
      'Les animaux aquatiques': [
         // Easy Level
         {
            id: 1,
            theme: 'Les animaux aquatiques',
            level: 'Easy',
            type: 'multiple-choice',
            question: "Lequel de ces animaux vit dans l'eau ?",
            options: [
               {
                  id: 'A',
                  text: 'Poisson',
                  image: '/Logo.svg',
               },
               {
                  id: 'B',
                  text: 'Chat',
                  image: '/Logo.svg?text=Chat',
               },
               {
                  id: 'C',
                  text: 'Oiseau',
                  image: '/Logo.svg?text=Oiseau',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 2,
            theme: 'Les animaux aquatiques',
            level: 'Easy',
            type: 'true-false',
            question: "Les poissons respirent sous l'eau.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 3,
            theme: 'Les animaux aquatiques',
            level: 'Easy',
            type: 'image-association',
            question: 'Relie le poisson à sa maison',
            options: [
               {
                  id: 'A',
                  text: 'Image désert',
                  image: '/Logo.svg?text=désert',
               },
               {
                  id: 'B',
                  text: 'Image mer',
                  image: '/Logo.svg?text=mer',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 4,
            theme: 'Les animaux aquatiques',
            level: 'Easy',
            type: 'multiple-choice',
            question: 'Quel animal marin a des tentacules ?',
            options: [
               {
                  id: 'A',
                  text: 'Pieuvre',
                  image: '/Logo.svg?text=Pieuvre',
               },
               {
                  id: 'B',
                  text: 'Requin',
                  image: '/Logo.svg?text=Requin',
               },
               {
                  id: 'C',
                  text: 'Dauphin',
                  image: '/Logo.svg?text=Dauphin',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 5,
            theme: 'Les animaux aquatiques',
            level: 'Easy',
            type: 'true-false',
            question: "Les daurades peuvent vivre hors de l'eau.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         // Medium Level
         {
            id: 6,
            theme: 'Les animaux aquatiques',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Quel animal peut-on élever dans une ferme aquacole au Maroc ?',
            options: [
               {
                  id: 'A',
                  text: 'Crevette',
                  image: '/Logo.svg?text=Crevette',
               },
               {
                  id: 'B',
                  text: 'Chameau',
                  image: '/Logo.svg?text=Chameau',
               },
               {
                  id: 'C',
                  text: 'Poulet',
                  image: '/Logo.svg?text=Poulet',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 7,
            theme: 'Les animaux aquatiques',
            level: 'Medium',
            type: 'true-false',
            question: 'Les huîtres fabriquent des perles',
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 8,
            theme: 'Les animaux aquatiques',
            level: 'Medium',
            type: 'image-association',
            question: 'Relie ces animaux à leur groupe',
            options: [
               {
                  id: 'A',
                  text: 'Crevette (image)',
                  image: '/Logo.svg?text=crevette',
               },
               {
                  id: 'B',
                  text: 'Coquillages (image)',
                  image: '/Logo.svg?text=coquillages',
               },
               {
                  id: 'C',
                  text: 'Moule (image)',
                  image: '/Logo.svg?text=moule',
               },
               {
                  id: 'D',
                  text: 'Crustacés (image)',
                  image: '/Logo.svg?text=Crustaces',
               },
            ],
            correctAnswer: 'A-D,B-C',
            explanation: '',
         },
         {
            id: 9,
            theme: 'Les animaux aquatiques',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Quelle espèce de coquillage est élevée dans la région de Dakhla-Oued Eddahab',
            options: [
               {
                  id: 'A',
                  text: 'Ormeau',
                  image: '/Logo.svg?text=ormeau',
               },
               {
                  id: 'B',
                  text: 'Pétoncle',
                  image: '/Logo.svg?text=pétoncle',
               },
               {
                  id: 'C',
                  text: 'Huitres',
                  image: '/Logo.svg?text=huitres',
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },
         {
            id: 10,
            theme: 'Les animaux aquatiques',
            level: 'Medium',
            type: 'true-false',
            question:
               "Les huitres peuvent filtrer jusqu'à 200 litres d'eau par jour",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         // Difficult Level
         {
            id: 11,
            theme: 'Les animaux aquatiques',
            level: 'Difficult',
            type: 'multiple-choice',
            question: 'Lequel de ces poissons est souvent élevé au Maroc ?',
            options: [
               {
                  id: 'A',
                  text: 'Poisson-Clown',
                  image: '/Logo.svg?text=poisson-clown',
               },
               {
                  id: 'B',
                  text: 'Daurade',
                  image: '/Logo.svg?text=daurade',
               },
               {
                  id: 'C',
                  text: 'Piranha',
                  image: '/Logo.svg?text=piranha',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 12,
            theme: 'Les animaux aquatiques',
            level: 'Difficult',
            type: 'true-false',
            question:
               'Les algues sont aussi cultivées en aquaculture au Maroc.',
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 13,
            theme: 'Les animaux aquatiques',
            level: 'Difficult',
            type: 'image-association',
            question: "Relie ces espèces à leur habitat d'élevage au Maroc.",
            options: [
               {
                  id: 'A',
                  text: 'Bar',
                  image: '/Logo.svg?text=bar',
               },
               {
                  id: 'B',
                  text: 'Tilapia',
                  image: '/Logo.svg?text=tilapia',
               },
               {
                  id: 'C',
                  text: 'Bassin à Terre',
                  image: '/Logo.svg?text=bassin',
               },
               {
                  id: 'D',
                  text: 'Cage en mer',
                  image: '/Logo.svg?text=cage',
               },
            ],
            correctAnswer: 'A-D,B-C',
            explanation: '',
         },
         {
            id: 14,
            theme: 'Les animaux aquatiques',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Quelle espèce de crevette est élevée dans des fermes aquacoles terrestres au Maroc ?',
            options: [
               {
                  id: 'A',
                  text: "Crevette géante d'eau douce",
                  image: '/Logo.svg?text=crevette-géante',
               },
               {
                  id: 'B',
                  text: 'Crevette royale',
                  image: '/Logo.svg?text=crevette-royale',
               },
               {
                  id: 'C',
                  text: 'Crevette à pattes blanches',
                  image: '/Logo.svg?text=Crevette-blanche',
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },
         {
            id: 15,
            theme: 'Les animaux aquatiques',
            level: 'Difficult',
            type: 'true-false',
            question:
               'La région de Dakhla-Oued Eddahab produit plus de 70% des huîtres marocaines.',
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
      ],
      "L'alimentation des poissons d'élevage": [
         // Easy Level
         {
            id: 16,
            theme: "L'alimentation des poissons d'élevage",
            level: 'Easy',
            type: 'multiple-choice',
            question: "Que mangent les poissons d'élevage ?",
            options: [
               {
                  id: 'A',
                  text: 'Granulés',
                  image: '/Logo.svg?text=granulés',
               },
               {
                  id: 'B',
                  text: 'Pizza',
                  image: '/Logo.svg?text=pizza',
               },
               {
                  id: 'C',
                  text: 'Banane',
                  image: '/Logo.svg?text=banane',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 17,
            theme: "L'alimentation des poissons d'élevage",
            level: 'Easy',
            type: 'true-false',
            question: "Les poissons d'élevage se nourrissent tout seuls.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 18,
            theme: "L'alimentation des poissons d'élevage",
            level: 'Easy',
            type: 'image-association',
            question: "Relie l'aliment au bon animal",
            options: [
               {
                  id: 'A',
                  text: 'Image granulés',
                  image: '/Logo.svg?text=granulés',
               },
               {
                  id: 'B',
                  text: 'Image herbe',
                  image: '/Logo.svg?text=herbe',
               },
               {
                  id: 'C',
                  text: 'Image mouton',
                  image: '/Logo.svg?text=mouton',
               },
               {
                  id: 'D',
                  text: 'Image poisson',
                  image: '/Logo.svg?text=poisson',
               },
            ],
            correctAnswer: 'A-D,B-C',
            explanation: '',
         },
         {
            id: 19,
            theme: "L'alimentation des poissons d'élevage",
            level: 'Easy',
            type: 'multiple-choice',
            question:
               "Quelle est la forme la plus courante de l'aliment pour poissons ?",
            options: [
               {
                  id: 'A',
                  text: 'granulés',
                  image: '/Logo.svg?text=granulés',
               },
               {
                  id: 'B',
                  text: 'feuilles',
                  image: '/Logo.svg?text=feuilles',
               },
               {
                  id: 'C',
                  text: 'cubes',
                  image: '/Logo.svg?text=cubes',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 20,
            theme: "L'alimentation des poissons d'élevage",
            level: 'Easy',
            type: 'true-false',
            question: "Les poissons d'élevage mangent uniquement la nuit.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         // Medium Level
         {
            id: 21,
            theme: "L'alimentation des poissons d'élevage",
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Lequel de ces ingrédients peut-on trouver dans la nourriture pour poissons ?',
            options: [
               {
                  id: 'A',
                  text: 'chocolat',
                  image: '/Logo.svg?text=chocolat',
               },
               {
                  id: 'B',
                  text: 'Farine de poisson',
                  image: '/Logo.svg?text=farine-de-poisson',
               },
               {
                  id: 'C',
                  text: 'fromage',
                  image: '/Logo.svg?text=fromage',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 22,
            theme: "L'alimentation des poissons d'élevage",
            level: 'Medium',
            type: 'true-false',
            question: "Certains poissons d'élevage mangent des algues.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 24,
            theme: "L'alimentation des poissons d'élevage",
            level: 'Medium',
            type: 'true-false',
            question:
               "Les huîtres d'élevage au Maroc sont nourries avec des algues cultivées spécialement.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'B',
            explanation:
               "Les huîtres se nourrissent naturellement en filtrant l'eau de mer",
         },
         // Difficult Level
         {
            id: 25,
            theme: "L'alimentation des poissons d'élevage",
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Quel équipement utilise-t-on pour nourrir les poissons dans de grandes cages en mer ?',
            options: [
               {
                  id: 'A',
                  text: 'distributeur automatique',
                  image: '/Logo.svg?text=distributeur-automatique',
               },
               {
                  id: 'B',
                  text: 'cuillère',
                  image: '/Logo.svg?text=cuillère',
               },
               {
                  id: 'C',
                  text: 'filet',
                  image: '/Logo.svg?text=filet',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 26,
            theme: "L'alimentation des poissons d'élevage",
            level: 'Difficult',
            type: 'true-false',
            question:
               'Les poissons carnivores et herbivores reçoivent la même nourriture en aquaculture.',
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 28,
            theme: "L'alimentation des poissons d'élevage",
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               "Quel ingrédient est de plus en plus utilisé pour remplacer la farine de poisson dans l'alimentation aquacole ?",
            options: [
               {
                  id: 'A',
                  text: "Farine d'insectes",
                  image: '/Logo.svg?text=farine-insectes',
               },
               {
                  id: 'B',
                  text: 'Farine de blé',
                  image: '/Logo.svg?text=Farine-blé',
               },
               {
                  id: 'C',
                  text: "Farine d'algues",
                  image: '/Logo.svg?text=Farine-algues',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 29,
            theme: "L'alimentation des poissons d'élevage",
            level: 'Difficult',
            type: 'true-false',
            question:
               "Au Maroc, l'alimentation représente plus de 50% des coûts de production en pisciculture marine",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
      ],
      "Les métiers de l'aquaculture": [
         // Easy Level
         {
            id: 30,
            theme: "Les métiers de l'aquaculture",
            level: 'Easy',
            type: 'multiple-choice',
            question: "Qui s'occupe des poissons dans une ferme aquacole ?",
            options: [
               {
                  id: 'A',
                  text: 'Policier',
                  image: '/Logo.svg?text=policier',
               },
               {
                  id: 'B',
                  text: 'Boulanger',
                  image: '/Logo.svg?text=boulanger',
               },
               {
                  id: 'C',
                  text: 'Aquaculteur',
                  image: '/Logo.svg?text=aquaculteur',
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },
         {
            id: 31,
            theme: "Les métiers de l'aquaculture",
            level: 'Easy',
            type: 'true-false',
            question:
               'Les plongeurs travaillent parfois dans les fermes aquacoles.',
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 33,
            theme: "Les métiers de l'aquaculture",
            level: 'Easy',
            type: 'multiple-choice',
            question: "Qui surveille la santé des poissons d'élevage ?",
            options: [
               {
                  id: 'A',
                  text: 'vétérinaire',
                  image: '/Logo.svg?text=vétérinaire',
               },
               {
                  id: 'B',
                  text: 'cuisinier',
                  image: '/Logo.svg?text=cuisinier',
               },
               {
                  id: 'C',
                  text: 'jardinier',
                  image: '/Logo.svg?text=jardinier',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },

         // Medium Level
         {
            id: 34,
            theme: "Les métiers de l'aquaculture",
            level: 'Medium',
            type: 'multiple-choice',
            question:
               "Quel professionnel vérifie la qualité de l'eau dans les fermes aquacoles ?",
            options: [
               {
                  id: 'A',
                  text: 'Biologiste marin',
                  image: '/Logo.svg?text=Biologiste marin',
               },
               {
                  id: 'B',
                  text: 'Mécanicien',
                  image: '/Logo.svg?text=mécanicien',
               },
               {
                  id: 'C',
                  text: 'Cuisinier',
                  image: '/Logo.svg?text=cuisinier',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 35,
            theme: "Les métiers de l'aquaculture",
            level: 'Medium',
            type: 'true-false',
            question:
               'Les ingénieurs participent à la conception des fermes aquacoles',
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 37,
            theme: "Les métiers de l'aquaculture",
            level: 'Medium',
            type: 'multiple-choice',
            question:
               "Quel métier s'occupe de la commercialisation des produits aquacoles au Maroc ?",
            options: [
               {
                  id: 'A',
                  text: 'Commercial',
                  image: '/Logo.svg?text=commercial',
               },
               {
                  id: 'B',
                  text: 'Plongeur',
                  image: '/Logo.svg?text=plongeur',
               },
               {
                  id: 'C',
                  text: 'Vétérinaire',
                  image: '/Logo.svg?text=vétérinaire',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 38,
            theme: "Les métiers de l'aquaculture",
            level: 'Medium',
            type: 'true-false',
            question:
               "Au Maroc, les jeunes entrepreneurs sont encouragés à investir dans l'aquaculture.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         // Difficult Level
         {
            id: 39,
            theme: "Les métiers de l'aquaculture",
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               "Quel métier s'occupe de la qualité de l'eau dans les bassins ?",
            options: [
               {
                  id: 'A',
                  text: 'hydrobiologiste',
                  image: '/Logo.svg?text=hydrobiologiste',
               },
               {
                  id: 'B',
                  text: 'pilote',
                  image: '/Logo.svg?text=pilote',
               },
               {
                  id: 'C',
                  text: 'facteur',
                  image: '/Logo.svg?text=facteur',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 40,
            theme: "Les métiers de l'aquaculture",
            level: 'Difficult',
            type: 'true-false',
            question:
               "Les économistes jouent un rôle dans le développement de l'aquaculture au Maroc.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 42,
            theme: "Les métiers de l'aquaculture",
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Quel professionnel est chargé de la gestion durable des fermes aquacoles au Maroc ?',
            options: [
               {
                  id: 'A',
                  text: 'Ecologue',
                  image: '/Logo.svg?text=Ecologue',
               },
               {
                  id: 'B',
                  text: 'Comptable',
                  image: '/Logo.svg?text=Comptable',
               },
               {
                  id: 'C',
                  text: 'Cuisinier',
                  image: '/Logo.svg?text=Cuisinier',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 43,
            theme: "Les métiers de l'aquaculture",
            level: 'Difficult',
            type: 'true-false',
            question:
               "L'ANDA (Agence Nationale pour le Développement de l'Aquaculture) forme des experts en aquaculture au Maroc.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
      ],
      "L'aquaculture et l'environnement": [
         // Easy Level
         {
            id: 44,
            theme: "L'aquaculture et l'environnement",
            level: 'Easy',
            type: 'multiple-choice',
            question: 'Où élève-t-on les poissons en aquaculture au Maroc ?',
            options: [
               {
                  id: 'A',
                  text: 'Mer',
                  image: '/Logo.svg?text=mer',
               },
               {
                  id: 'B',
                  text: 'Désert',
                  image: '/Logo.svg?text=désert',
               },
               {
                  id: 'C',
                  text: 'Forêt',
                  image: '/Logo.svg?text=forêt',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 45,
            theme: "L'aquaculture et l'environnement",
            level: 'Easy',
            type: 'true-false',
            question: "L'aquaculture aide à protéger les poissons sauvages.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 46,
            theme: "L'aquaculture et l'environnement",
            level: 'Easy',
            type: 'multiple-choice',
            question:
               "Quelle source d'énergie est utilisée dans certaines fermes aquacoles au Maroc ?",
            options: [
               {
                  id: 'A',
                  text: 'Soleil',
                  image: '/Logo.svg?text=soleil',
               },
               {
                  id: 'B',
                  text: 'Feu',
                  image: '/Logo.svg?text=feu',
               },
               {
                  id: 'C',
                  text: 'Vent',
                  image: '/Logo.svg?text=vent',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 47,
            theme: "L'aquaculture et l'environnement",
            level: 'Easy',
            type: 'true-false',
            question:
               'Les fermes aquacoles au Maroc peuvent être installées sur terre.',
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         // Medium Level
         {
            id: 48,
            theme: "L'aquaculture et l'environnement",
            level: 'Medium',
            type: 'multiple-choice',
            question:
               "Quel équipement utilise-t-on pour nettoyer l'eau des bassins ?",
            options: [
               {
                  id: 'A',
                  text: 'Filtre',
                  image: '/Logo.svg?text=filtre',
               },
               {
                  id: 'B',
                  text: 'Arrosoir',
                  image: '/Logo.svg?text=arrosoir',
               },
               {
                  id: 'C',
                  text: 'Aspirateur',
                  image: '/Logo.svg?text=aspirateur',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 49,
            theme: "L'aquaculture et l'environnement",
            level: 'Medium',
            type: 'true-false',
            question:
               "Les fermes aquacoles au Maroc peuvent utiliser l'énergie solaire.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 50,
            theme: "L'aquaculture et l'environnement",
            level: 'Medium',
            type: 'multiple-choice',
            question:
               "Quelle espèce d'algue est cultivée au Maroc pour son rôle environnemental ?",
            options: [
               {
                  id: 'A',
                  text: 'Algue verte',
                  image: '/Logo.svg?text=algue verte',
               },
               {
                  id: 'B',
                  text: 'Algue rouge',
                  image: '/Logo.svg?text=algue rouge',
               },
               {
                  id: 'C',
                  text: 'Algue brune',
                  image: '/Logo.svg?text=algue brune',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 51,
            theme: "L'aquaculture et l'environnement",
            level: 'Medium',
            type: 'true-false',
            question:
               "L'aquaculture au Maroc contribue à réduire la pression sur les stocks de poissons sauvages",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         // Difficult Level
         {
            id: 52,
            theme: "L'aquaculture et l'environnement",
            level: 'Difficult',
            type: 'true-false',
            question:
               "L'aquaculture peut contribuer à la restauration des écosystèmes marins au Maroc.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 54,
            theme: "L'aquaculture et l'environnement",
            level: 'Difficult',
            type: 'true-false',
            question:
               "Le Maroc a mis en place des plans d'aménagement aquacole pour assurer un développement durable du secteur.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
      ],
      "L'importance économique et sociale de l'aquaculture au Maroc": [
         // Easy Level
         {
            id: 55,
            theme: "L'importance économique et sociale de l'aquaculture au Maroc",
            level: 'Easy',
            type: 'multiple-choice',
            question: 'Que produit-on dans les fermes aquacoles au Maroc ?',
            options: [
               {
                  id: 'A',
                  text: 'Poisson',
                  image: '/Logo.svg?text=poisson',
               },
               {
                  id: 'B',
                  text: 'Voiture',
                  image: '/Logo.svg?text=voiture',
               },
               {
                  id: 'C',
                  text: 'Téléphone',
                  image: '/Logo.svg?text=téléphone',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 56,
            theme: "L'importance économique et sociale de l'aquaculture au Maroc",
            level: 'Easy',
            type: 'true-false',
            question: "L'aquaculture crée des emplois au Maroc.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 58,
            theme: "L'importance économique et sociale de l'aquaculture au Maroc",
            level: 'Easy',
            type: 'multiple-choice',
            question:
               "Quelle région du Maroc est connue pour sa production d'huîtres ?",
            options: [
               {
                  id: 'A',
                  text: 'Dakhla-Oued Eddahab',
                  image: '/Logo.svg?text=Dakhla-Oued Eddahab',
               },
               {
                  id: 'B',
                  text: 'Marrakech Safi',
                  image: '/Logo.svg?text=Marrakech Safi',
               },
               {
                  id: 'C',
                  text: 'Fès Meknes',
                  image: '/Logo.svg?text=Fès Meknes',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 60,
            theme: "L'importance économique et sociale de l'aquaculture au Maroc",
            level: 'Easy',
            type: 'true-false',
            question:
               "Les produits de l'aquaculture marocaine sont uniquement vendus au Maroc.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         // Medium Level
         {
            id: 61,
            theme: "L'importance économique et sociale de l'aquaculture au Maroc",
            level: 'Medium',
            type: 'multiple-choice',
            question:
               "Question avec images : Quel type de structure est utilisé pour l'élevage de poissons en mer au Maroc ?",
            options: [
               {
                  id: 'A',
                  text: 'Cage flottante',
                  image: '/Logo.svg?text=cage flottante',
               },
               {
                  id: 'B',
                  text: 'Aquarium',
                  image: '/Logo.svg?text=aquarium',
               },
               {
                  id: 'C',
                  text: 'Etang',
                  image: '/Logo.svg?text=étang',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 62,
            theme: "L'importance économique et sociale de l'aquaculture au Maroc",
            level: 'Medium',
            type: 'true-false',
            question:
               "L'aquaculture aide à réduire la dépendance du Maroc aux importations de produits de la mer.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 64,
            theme: "L'importance économique et sociale de l'aquaculture au Maroc",
            level: 'Medium',
            type: 'multiple-choice',
            question:
               "Quelle agence gouvernementale est chargée de développer l'aquaculture au Maroc ?",
            options: [
               {
                  id: 'A',
                  text: 'ANDA',
                  image: '/Logo.svg?text=ANDA',
               },
               {
                  id: 'B',
                  text: 'FIFA',
                  image: '/Logo.svg?text=FIFA',
               },
               {
                  id: 'C',
                  text: 'NASA',
                  image: '/Logo.svg?text=NASA',
               },
            ],
            correctAnswer: 'B',
            explanation:
               "ANDA (Agence Nationale pour le Développement de l'Aquaculture)",
         },
         {
            id: 65,
            theme: "L'importance économique et sociale de l'aquaculture au Maroc",
            level: 'Medium',
            type: 'true-false',
            question:
               "L'aquaculture au Maroc contribue à réduire la pression sur les stocks de poissons sauvages",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         // Difficult Level
         {
            id: 64,
            theme: "L'importance économique et sociale de l'aquaculture au Maroc",
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               "Question avec images : Quel pourcentage de la côte marocaine est couvert par des plans d'aménagement aquacole ?",
            options: [
               {
                  id: 'A',
                  text: '25%',
                  image: '/Logo.svg?text=25%',
               },
               {
                  id: 'B',
                  text: '50%',
                  image: '/Logo.svg?text=50%',
               },
               {
                  id: 'C',
                  text: '77%',
                  image: '/Logo.svg?text=70%',
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },
         {
            id: 67,
            theme: "L'importance économique et sociale de l'aquaculture au Maroc",
            level: 'Difficult',
            type: 'true-false',
            question:
               "L'aquaculture au Maroc contribue à la sécurité alimentaire du pays.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 69,
            theme: "L'importance économique et sociale de l'aquaculture au Maroc",
            level: 'Difficult',
            type: 'true-false',
            question:
               "Le Maroc a mis en place une loi spécifique pour l'aquaculture marine en 2022.",
            options: [
               { id: 'A', text: 'Oui' },
               { id: 'B', text: 'Non' },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
      ],
   },
   AVANCÉ: {
      'Découverte de lAquaculture': [
         // Easy Level
         {
            id: 70,
            theme: "Découverte de l'Aquaculture",
            level: 'Easy',
            type: 'multiple-choice',
            question: "Qu'est-ce que l'aquaculture ?",
            options: [
               {
                  id: 'A',
                  text: "L’élevage de poissons et d'autres espèces aquatiques",
                  image: "/Logo.svg?text=L’élevage de poissons et d'autres espèces aquatiques",
               },
               {
                  id: 'B',
                  text: 'La pêche traditionnelle',
                  image: '/Logo.svg?text=La pêche traditionnelle',
               },
               {
                  id: 'C',
                  text: 'La culture de céréales',
                  image: '/Logo.svg?text=La culture de céréales',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 71,
            theme: "Découverte de l'Aquaculture",
            level: 'Easy',
            type: 'multiple-choice',
            question: 'Quel est le principal objectif de l’aquaculture ?',
            options: [
               {
                  id: 'A',
                  text: 'Protéger les espèces sauvages',
                  image: '/Logo.svg?text=Protéger les espèces sauvages',
               },
               {
                  id: 'B',
                  text: 'Récolter des algues pour les cosmétiques',
                  image: '/Logo.svg?text=Récolter des algues pour les cosmétiques',
               },
               {
                  id: 'C',
                  text: 'Fournir des ressources alimentaires durables',
                  image: '/Logo.svg?text=Fournir des ressources alimentaires durables',
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },

         // Medium Level
         {
            id: 73,
            theme: "Découverte de l'Aquaculture",
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Quel est l’un des principaux avantages de l’aquaculture ?',
            options: [
               {
                  id: 'A',
                  text: 'Réduction de la pression sur les stocks de poissons sauvages',
                  image: '/Logo.svg?text=Réduction de la pression sur les stocks de poissons sauvages',
               },
               {
                  id: 'B',
                  text: 'Augmentation des prix du poisson',
                  image: '/Logo.svg?text=Augmentation des prix du poisson',
               },
               {
                  id: 'C',
                  text: 'Consommation de plus d’eau',
                  image: '/Logo.svg?text=Consommation de plus d’eau',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 74,
            theme: "Découverte de l'Aquaculture",
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Comment l’aquaculture contribue-t-elle à la sécurité alimentaire ?',
            options: [
               {
                  id: 'A',
                  text: 'En augmentant les réserves de poissons sauvages',
                  image: '/Logo.svg?text=En augmentant les réserves de poissons sauvages',
               },
               {
                  id: 'B',
                  text: 'En produisant plus de poissons à consommer localement et à l’export',
                  image: '/Logo.svg?text=En produisant plus de poissons à consommer localement et à l’export',
               },
               {
                  id: 'C',
                  text: 'En réduisant la consommation de viande',
                  image: '/Logo.svg?text=En réduisant la consommation de viande',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 75,
            theme: "Découverte de l'Aquaculture",
            level: 'Medium',
            type: 'multiple-choice',
            question: "Quels types de produits sont issus de l'aquaculture ?",
            options: [
               {
                  id: 'A',
                  text: 'Fruits de mer, poissons et algues',
                  image: '/Logo.svg?text=Fruits de mer, poissons et algues',
               },
               {
                  id: 'B',
                  text: 'Fruits exotiques',
                  image: '/Logo.svg?text=Fruits exotiques',
               },
               {
                  id: 'C',
                  text: 'Céréales',
                  image: '/Logo.svg?text=Céréales',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         // Difficult Level
         {
            id: 76,
            theme: "Découverte de l'Aquaculture",
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               "Quelles espèces sont élevées dans l'aquaculture marine marocaine ?",
            options: [
               {
                  id: 'A',
                  text: 'Dorade royale, bar et huîtres',
                  image: '/Logo.svg?text=Dorade royale, bar et huîtres',
               },
               {
                  id: 'B',
                  text: 'Poisson-clown et raies',
                  image: '/Logo.svg?text=Poisson-clown et raies',
               },
               {
                  id: 'C',
                  text: "Crabes et crevettes d'eau douce",
                  image: "/Logo.svg?text=Crabes et crevettes d'eau douce",
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 77,
            theme: "Découverte de l'Aquaculture",
            level: 'Difficult',
            type: 'multiple-choice',
            question: 'Qu’est-ce que la polyculture en aquaculture ?',
            options: [
               {
                  id: 'A',
                  text: 'L’élevage de plusieurs espèces dans le même espace pour optimiser l’usage des ressources',
                  image: '/Logo.svg?text=L’élevage de plusieurs espèces dans le même espace pour optimiser l’usage des ressources',
               },
               {
                  id: 'B',
                  text: 'La plantation de cultures alimentaires sous-marines',
                  image: '/Logo.svg?text=La plantation de cultures alimentaires sous-marines',
               },
               {
                  id: 'C',
                  text: 'La production d’une seule espèce à grande échelle',
                  image: '/Logo.svg?text=La production d’une seule espèce à grande échelle',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 78,
            theme: "Découverte de l'Aquaculture",
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               "Quel est l'impact environnemental positif de l'aquaculture bien gérée ?",
            options: [
               {
                  id: 'A',
                  text: 'Réduction de la pression sur les écosystèmes marins',
                  image: '/Logo.svg?text=Réduction de la pression sur les écosystèmes marins',
               },
               {
                  id: 'B',
                  text: 'Minimisation des émissions de CO2',
                  image: '/Logo.svg?text=Minimisation des émissions de CO2',
               },
               {
                  id: 'C',
                  text: 'Consommation accrue de ressources naturelles',
                  image: '/Logo.svg?text=Consommation accrue de ressources naturelles',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
      ],
      'Les Regions dAquaculture au Maroc': [
         // Easy Level
         {
            id: 79,
            theme: 'Les Régions d’Aquaculture au Maroc',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               'Dans quelle région marocaine trouve-t-on beaucoup de fermes aquacoles',
            options: [
               {
                  id: 'A',
                  text: 'Dakhla-Oued Eddahab',
                  image: '/Logo.svg?text=Dakhla-Oued Eddahab',
               },
               {
                  id: 'B',
                  text: 'Marrakech-Safi',
                  image: '/Logo.svg?text=Marrakech-Safi',
               },
               {
                  id: 'C',
                  text: 'Fès-Meknès',
                  image: '/Logo.svg?text=Fès-Meknès',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 80,
            theme: 'Les Régions d’Aquaculture au Maroc',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               "Quel type d'espèces est souvent élevé dans la région de Souss-Massa ?",
            options: [
               {
                  id: 'A',
                  text: 'Les mollusques comme les moules',
                  image: '/Logo.svg?text=Les mollusques comme les moules',
               },
               {
                  id: 'B',
                  text: 'Les poissons d’eau douce',
                  image: '/Logo.svg?text=Les poissons d’eau douce',
               },
               {
                  id: 'C',
                  text: 'Les fruits de mer exotiques',
                  image: '/Logo.svg?text=Les fruits de mer exotiques',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },

         // Medium Level
         {
            id: 82,
            theme: 'Les Régions d’Aquaculture au Maroc',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Quelle région est réputée pour la culture des huîtres au Maroc ?',
            options: [
               {
                  id: 'A',
                  text: 'Dakhla-Oued Eddahab',
                  image: '/Logo.svg?text=Dakhla-Oued Eddahab',
               },
               {
                  id: 'B',
                  text: 'Laayoune-Sakia El Hamra',
                  image: '/Logo.svg?text=Laayoune-Sakia El Hamra',
               },
               {
                  id: 'C',
                  text: 'L’Oriental',
                  image: '/Logo.svg?text=L’Oriental',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 83,
            theme: 'Les Régions d’Aquaculture au Maroc',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Quel est le climat favorable aux fermes aquacoles dans la région de Souss-Massa ?',
            options: [
               {
                  id: 'A',
                  text: 'Climat chaud et sec',
                  image: '/Logo.svg?text=Climat chaud et sec',
               },
               {
                  id: 'B',
                  text: 'Climat tempéré et humide',
                  image: '/Logo.svg?text=Climat tempéré et humide',
               },
               {
                  id: 'C',
                  text: 'Climat froid et neigeux',
                  image: '/Logo.svg?text=Climat froid et neigeux',
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },

         // Difficult Level
         {
            id: 85,
            theme: 'Les Régions d’Aquaculture au Maroc',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Quels avantages spécifiques les lagunes marocaines offrent-elles pour l’aquaculture ?',
            options: [
               {
                  id: 'A',
                  text: 'Un environnement protégé avec une bonne circulation de l’eau',
                  image: '/Logo.svg?text=Un environnement protégé avec une bonne circulation de l’eau',
               },
               {
                  id: 'B',
                  text: 'Une protection totale contre les prédateurs',
                  image: '/Logo.svg?text=Une protection totale contre les prédateurs',
               },
               {
                  id: 'C',
                  text: 'Des ressources illimitées en eau douce',
                  image: '/Logo.svg?text=Des ressources illimitées en eau douce',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 86,
            theme: 'Les Régions d’Aquaculture au Maroc',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Quelle région marocaine développe des projets de culture d’algues ?',
            options: [
               {
                  id: 'A',
                  text: 'Région de Casablanca-Settat',
                  image: '/Logo.svg?text=Région de Casablanca-Settat',
               },
               {
                  id: 'B',
                  text: 'Région de Dakhla-Oued Eddahab',
                  image: '/Logo.svg?text=Région de Dakhla-Oued Eddahab',
               },
               {
                  id: 'C',
                  text: 'Région de l’Oriental',
                  image: '/Logo.svg?text=Région de l’Oriental',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
      ],
      'Alimentation et Croissance des Espèces Aquacoles': [
         // Easy Level
         {
            id: 88,
            theme: 'Alimentation et Croissance des Espèces Aquacoles',
            level: 'Easy',
            type: 'multiple-choice',
            question: "Que mangent les poissons d'élevage ?",
            options: [
               {
                  id: 'A',
                  text: 'Granulés de protéines spéciales',
                  image: '/Logo.svg?text=Granulés de protéines spéciales',
               },
               {
                  id: 'B',
                  text: 'Graines de blé',
                  image: '/Logo.svg?text=Graines de blé',
               },
               {
                  id: 'C',
                  text: 'Céréales',
                  image: '/Logo.svg?text=Céréales',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 89,
            theme: 'Alimentation et Croissance des Espèces Aquacoles',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               "Les poissons d'élevage mangent-ils la même nourriture que les poissons sauvages ?",
            options: [
               {
                  id: 'A',
                  text: 'Oui, exactement la même',
                  image: '/Logo.svg?text=Oui, exactement la même',
               },
               {
                  id: 'B',
                  text: 'Non, ils ont des régimes spécifiques d’aquaculture',
                  image: '/Logo.svg?text=Non, ils ont des régimes spécifiques d’aquaculture',
               },
               {
                  id: 'C',
                  text: 'Ils mangent seulement des algues',
                  image: '/Logo.svg?text=Ils mangent seulement des algues',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },

         // Medium Level
         {
            id: 91,
            theme: 'Alimentation et Croissance des Espèces Aquacoles',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Pourquoi ajoute-t-on des protéines dans la nourriture des poissons ?',
            options: [
               {
                  id: 'A',
                  text: 'Pour favoriser leur croissance rapide',
                  image: '/Logo.svg?text=Pour favoriser leur croissance rapide',
               },
               {
                  id: 'B',
                  text: 'Pour réduire la pollution de l’eau',
                  image: '/Logo.svg?text=Pour réduire la pollution de l’eau',
               },
               {
                  id: 'C',
                  text: 'Pour les protéger des prédateurs',
                  image: '/Logo.svg?text=Pour les protéger des prédateurs',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 92,
            theme: 'Les Régions d’Aquaculture au Maroc',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Comment s’assure-t-on que les poissons d’aquaculture sont bien nourris ?',
            options: [
               {
                  id: 'A',
                  text: "En utilisant des systèmes d'alimentation automatiques",
                  image: "/Logo.svg?text=En utilisant des systèmes d'alimentation automatiques",
               },
               {
                  id: 'B',
                  text: 'En les laissant chercher eux-mêmes leur nourriture',
                  image: '/Logo.svg?text=En les laissant chercher eux-mêmes leur nourriture',
               },
               {
                  id: 'C',
                  text: 'En leur donnant à manger une fois par mois',
                  image: '/Logo.svg?text=En leur donnant à manger une fois par mois',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },

         // Difficult Level
         {
            id: 94,
            theme: 'Alimentation et Croissance des Espèces Aquacoles',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Quelles sont les composantes nutritives essentielles dans l’alimentation des poissons ?',
            options: [
               {
                  id: 'A',
                  text: 'Protéines, lipides, et vitamines',
                  image: '/Logo.svg?text=Protéines, lipides, et vitamines',
               },
               {
                  id: 'B',
                  text: 'Sucre et sel',
                  image: '/Logo.svg?text=Sucre et sel',
               },
               {
                  id: 'C',
                  text: 'Fleurs et épices',
                  image: '/Logo.svg?text=Fleurs et épices',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 95,
            theme: 'Alimentation et Croissance des Espèces Aquacoles',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Pourquoi est-il important de surveiller l’alimentation en aquaculture ?',
            options: [
               {
                  id: 'A',
                  text: 'Pour garantir une croissance optimale et limiter les déchets',
                  image: '/Logo.svg?text=Pour garantir une croissance optimale et limiter les déchets',
               },
               {
                  id: 'B',
                  text: 'Pour augmenter les coûts',
                  image: '/Logo.svg?text=our augmenter les coûts',
               },
               {
                  id: 'C',
                  text: 'Pour maintenir l’eau propre',
                  image: '/Logo.svg?text=Pour maintenir l’eau propre',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
      ],
      duplicate_1: [
         // Easy Level
         {
            id: 72,
            theme: "Découverte de l'Aquaculture",
            level: 'Easy',
            type: 'multiple-choice',
            question: 'Pourquoi l’aquaculture est-elle importante ?',
            options: [
               {
                  id: 'A',
                  text: 'Elle aide à préserver les ressources naturelles',
                  image: '/Logo.svg?text=Elle aide à préserver les ressources naturelles',
               },
               {
                  id: 'B',
                  text: 'Elle augmente les coûts de production',
                  image: '/Logo.svg?text=Elle augmente les coûts de production',
               },
               {
                  id: 'C',
                  text: 'Elle remplace l’agriculture',
                  image: '/Logo.svg?text=Elle remplace l’agriculture',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 81,
            theme: 'Les Régions d’Aquaculture au Maroc',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               'La région de Casablanca-Settat est connue pour la culture de ',
            options: [
               {
                  id: 'A',
                  text: 'Poisson-chat',
                  image: '/Logo.svg?text=Poisson-chat',
               },
               {
                  id: 'B',
                  text: 'Bar et dorade royale',
                  image: '/Logo.svg?text=Bar et dorade royale',
               },
               {
                  id: 'C',
                  text: 'Thon rouge',
                  image: '/Logo.svg?text=Thon rouge',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         // Medium Level
         {
            id: 84,
            theme: 'Les Régions d’Aquaculture au Maroc',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Quels facteurs font de Dakhla-Oued Eddahab une région privilégiée pour l’aquaculture ?',
            options: [
               {
                  id: 'A',
                  text: 'Eau de mer de haute qualité et climat favorable',
                  image: '/Logo.svg?text=dolphin',
               },
               {
                  id: 'B',
                  text: 'Eau douce et nombreux lacs',
                  image: '/Logo.svg?text=salmon',
               },
               {
                  id: 'C',
                  text: 'Sols fertiles',
                  image: '/Logo.svg?text=whale',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },

         // Difficult Level
         {
            id: 96,
            theme: 'Alimentation et Croissance des Espèces Aquacoles',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Comment les aliments pour poissons influencent-ils l’environnement ?',
            options: [
               {
                  id: 'A',
                  text: 'Une alimentation équilibrée réduit les déchets et la pollution de l’eau',
                  image: '/Logo.svg?text=ne alimentation équilibrée réduit les déchets et la pollution de l’eau',
               },
               {
                  id: 'B',
                  text: 'Les poissons ne rejettent aucun déchet',
                  image: '/Logo.svg?text=Les poissons ne rejettent aucun déchet',
               },
               {
                  id: 'C',
                  text: 'Ils n’ont aucun impact environnemental',
                  image: '/Logo.svg?text=Ils n’ont aucun impact environnemental',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
      ],
      duplicate_2: [
         // Easy Level
         {
            id: 90,
            theme: 'Alimentation et Croissance des Espèces Aquacoles',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               'Les poissons herbivores en aquaculture consomment souvent :',
            options: [
               {
                  id: 'A',
                  text: 'Des algues et des plantes aquatiques',
                  image: '/Logo.svg?text=es algues et des plantes aquatiques',
               },
               {
                  id: 'B',
                  text: 'De la viande',
                  image: '/Logo.svg?text=De la viande',
               },
               {
                  id: 'C',
                  text: 'Des fruits',
                  image: '/Logo.svg?text=Des fruits',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         // Medium Level
         {
            id: 93,
            theme: 'Alimentation et Croissance des Espèces Aquacoles',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Quel est le rôle des algues dans certains systèmes aquacoles ?',
            options: [
               {
                  id: 'A',
                  text: 'Fournir de l’oxygène et filtrer les nutriments',
                  image: '/Logo.svg?text=Fournir de l’oxygène et filtrer les nutriments',
               },
               {
                  id: 'B',
                  text: 'Protéger les poissons des prédateurs',
                  image: '/Logo.svg?text=Protéger les poissons des prédateurs',
               },
               {
                  id: 'C',
                  text: 'Servir de barrière physique',
                  image: '/Logo.svg?text=Servir de barrière physique',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         // Difficult Level
         {
            id: 119,
            theme: 'Aquaculture marine',
            level: 'Difficult',
            type: 'multiple-choice',
            question: 'Le Thon Rouge peut il être élevé en mer ?',
            options: [
               {
                  id: 'A',
                  text: 'Oui',
                  image: '/Logo.svg?text=Oui',
               },
               {
                  id: 'B',
                  text: 'Non',
                  image: '/Logo.svg?text=Non',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
      ],
   },
   EXCELLENT: {
      'Aquaculture marine': [
         // Easy Level
         {
            id: 97,
            theme: 'Aquaculture marine',
            level: 'Easy',
            type: 'multiple-choice',
            question: 'L’aquaculture marine c’est ?',
            options: [
               {
                  id: 'A',
                  text: 'L’élevage des organismes marins',
                  image: '/Logo.svg?text=L’élevage des organismes marins ',
               },
               {
                  id: 'B',
                  text: 'L’élevage des poissons d’eau douce',
                  image: '/Logo.svg?text=L’élevage des poissons d’eau douce',
               },
               {
                  id: 'C',
                  text: 'La culture de céréales',
                  image: '/Logo.svg?text=La culture de céréales',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         // Medium Level
         {
            id: 105,
            theme: 'Aquaculture marine',
            level: 'Medium',
            type: 'multiple-choice',
            question: 'La pénéiculture s’exerce  ?',
            options: [
               {
                  id: 'A',
                  text: 'En mer ouverte',
                  image: '/Logo.svg?text=En mer ouverte',
               },
               {
                  id: 'B',
                  text: 'A terre',
                  image: '/Logo.svg?text=A terre',
               },
               {
                  id: 'C',
                  text: 'Embouchure d’oued',
                  image: '/Logo.svg?text=Embouchure d’oued',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 106,
            theme: 'Aquaculture marine',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Par quelle technique se fait l’élevage du loup et dorade ?',
            options: [
               {
                  id: 'A',
                  text: 'Cages flottantes en mer',
                  image: '/Logo.svg?text=Cages flottantes en mer',
               },
               {
                  id: 'B',
                  text: 'Etangs dans les lagunes',
                  image: '/Logo.svg?text=Etangs dans les lagunes',
               },
               {
                  id: 'C',
                  text: 'Bassins de grossissement en PVC',
                  image: '/Logo.svg?text=Bassins de grossissement en PVC',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         // Difficult Level
         {
            id: 115,
            theme: 'Aquaculture marine',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'En Méditerranée quelle est la meilleure période pour l’alevinage des cages  ?',
            options: [
               {
                  id: 'A',
                  text: 'Eté',
                  image: '/Logo.svg?text=Eté',
               },
               {
                  id: 'B',
                  text: 'Automne',
                  image: '/Logo.svg?text=Automne',
               },
               {
                  id: 'C',
                  text: 'Hiver',
                  image: '/Logo.svg?text=Hiver',
               },
               {
                  id: 'D',
                  text: 'Printemps',
                  image: '/Logo.svg?text=Printemps',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
      ],
      duplicate_1: [
         // Easy Level
         {
            id: 98,
            theme: 'Aquaculture marine',
            level: 'Easy',
            type: 'multiple-choice',
            question: 'La pisciculture c’est ?',
            options: [
               {
                  id: 'A',
                  text: 'L’élevage en eau douce',
                  image: '/Logo.svg?text=L’élevage en eau douce',
               },
               {
                  id: 'B',
                  text: 'L’élevage des poissons',
                  image: '/Logo.svg?text=L’élevage des poissons',
               },
               {
                  id: 'C',
                  text: 'L’aquaculture continentale',
                  image: '/Logo.svg?text=whale',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 99,
            theme: 'Aquaculture marine',
            level: 'Easy',
            type: 'multiple-choice',
            question: 'L’élevage des coquillages c’est ?',
            options: [
               {
                  id: 'A',
                  text: 'La coquiculture',
                  image: '/Logo.svg?text=La coquiculture',
               },
               {
                  id: 'B',
                  text: 'La conchyliculture',
                  image: '/Logo.svg?text=La conchyliculture',
               },
               {
                  id: 'C',
                  text: 'La culture d’huitres',
                  image: '/Logo.svg?text=La culture d’huitres',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         // Medium Level
         {
            id: 107,
            theme: 'Aquaculture marine',
            level: 'Medium',
            type: 'multiple-choice',
            question: 'La culture des micro-algues sert à ?',
            options: [
               {
                  id: 'A',
                  text: 'Extraction d’huiles',
                  image: '/Logo.svg?text=Extraction d’huiles',
               },
               {
                  id: 'B',
                  text: 'L’alimentation humaine et animale',
                  image: '/Logo.svg?text=L’alimentation humaine et animale',
               },
               {
                  id: 'C',
                  text: 'La production de l’agar agar',
                  image: '/Logo.svg?text=La production de l’agar agar',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 108,
            theme: 'Aquaculture marine',
            level: 'Medium',
            type: 'multiple-choice',
            question: 'L’élevage des poissons s’exerce seulement en mer ?',
            options: [
               {
                  id: 'A',
                  text: 'Oui',
                  image: '/Logo.svg?text=Oui',
               },
               {
                  id: 'B',
                  text: 'Non',
                  image: '/Logo.svg?text=Non',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },

         // Difficult Level
         {
            id: 117,
            theme: 'Aquaculture marine',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'La culture des huitres se fait seulement en poche sur tables ?',
            options: [
               {
                  id: 'A',
                  text: 'Oui',
                  image: '/Logo.svg?text=Oui',
               },
               {
                  id: 'B',
                  text: 'Non',
                  image: '/Logo.svg?text=Non',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 118,
            theme: 'Aquaculture marine',
            level: 'Difficult',
            type: 'multiple-choice',
            question: 'La mytiliculture sur bouchots dépend de ?',
            options: [
               {
                  id: 'A',
                  text: 'La profondeur',
                  image: '/Logo.svg?text=La profondeur',
               },
               {
                  id: 'B',
                  text: 'Le marnage',
                  image: '/Logo.svg?text=Le marnage',
               },
               {
                  id: 'C',
                  text: 'La nature du bois',
                  image: '/Logo.svg?text=La nature du bois',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
      ],
      duplicate_2: [
         // Easy Level
         {
            id: 100,
            theme: 'Aquaculture marine',
            level: 'Easy',
            type: 'multiple-choice',
            question: 'La mariculture c’est ?',
            options: [
               {
                  id: 'A',
                  text: 'L’aquaculture d’espèces marines',
                  image: '/Logo.svg?text=L’aquaculture d’espèces marines',
               },
               {
                  id: 'B',
                  text: 'La culture des algues',
                  image: '/Logo.svg?text=Laculture des algues',
               },
               {
                  id: 'C',
                  text: 'L’aquaculture en milieu contrôlé',
                  image: '/Logo.svg?text=L’aquaculture en milieu contrôlé',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         // Medium Level
         {
            id: 110,
            theme: 'Aquaculture marine',
            level: 'Medium',
            type: 'multiple-choice',
            question: 'C’est quoi la peneiculture ',
            options: [
               {
                  id: 'A',
                  text: "L'élevage de poissons en eau douce.",
                  image: "/Logo.svg?text=L'élevage de poissons en eau douce.",
               },
               {
                  id: 'B',
                  text: "L'élevage des crevettes.",
                  image: "/Logo.svg?text=L'élevage des crevettes.",
               },
               {
                  id: 'C',
                  text: "La culture de plantes aquatiques pour l'alimentation.",
                  image: "/Logo.svg?text=La culture de plantes aquatiques pour l'alimentation.",
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 111,
            theme: 'Aquaculture marine',
            level: 'Medium',
            type: 'multiple-choice',
            question: "Qu'est-ce que l'holothuriculture ?",
            options: [
               {
                  id: 'A',
                  text: "L'élevage des huîtres pour la production de perles.",
                  image: "/Logo.svg?text=L'élevage des huîtres pour la production de perles.",
               },
               {
                  id: 'B',
                  text: "L'élevage des concombres de mer.",
                  image: "/Logo.svg?text=L'élevage des concombres de mer.",
               },
               {
                  id: 'C',
                  text: "La culture des algues marines pour l'industrie alimentaire.",
                  image: "/Logo.svg?text=La culture des algues marines pour l'industrie alimentaire.",
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         // Difficult Level
         {
            id: 119,
            theme: 'Aquaculture marine',
            level: 'Difficult',
            type: 'multiple-choice',
            question: 'Le Thon Rouge peut il être élevé en mer ?',
            options: [
               {
                  id: 'A',
                  text: 'Oui',
                  image: '/Logo.svg?text=Oui',
               },
               {
                  id: 'B',
                  text: 'Non',
                  image: '/Logo.svg?text=Non',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
      ],
      duplicate_3: [
         // Easy Level
         {
            id: 101,
            theme: 'Aquaculture marine',
            level: 'Easy',
            type: 'multiple-choice',
            question: 'Les coquillages se nourrissent de ?',
            options: [
               {
                  id: 'A',
                  text: 'De sel',
                  image: '/Logo.svg?text=De sel',
               },
               {
                  id: 'B',
                  text: 'Phyto et zooplancton',
                  image: '/Logo.svg?text=Phyto et zooplancton',
               },
               {
                  id: 'C',
                  text: 'D’aliments composés',
                  image: '/Logo.svg?text=D’aliments composés',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         {
            id: 104,
            theme: 'Aquaculture marine',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               'Comment peut ont faire l’élevage des poissons en pleine mer ?',
            options: [
               {
                  id: 'A',
                  text: 'Dans des bassins en PVC',
                  image: '/Logo.svg?text=Dans des bassins en PVC',
               },
               {
                  id: 'B',
                  text: 'Dans des bassins en béton',
                  image: '/Logo.svg?text=Dans des bassins en béton',
               },
               {
                  id: 'C',
                  text: 'Dans des cages flottantes',
                  image: '/Logo.svg?text=Dans des cages flottantes',
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },
         // Medium Level
         {
            id: 112,
            theme: 'Aquaculture marine',
            level: 'Medium',
            type: 'multiple-choice',
            question: 'C’est quoi la mytiliculture',
            options: [
               {
                  id: 'A',
                  text: "L'élevage des huîtres pour la production de perles.",
                  image: "/Logo.svg?text=L'élevage des huîtres pour la production de perles.",
               },
               {
                  id: 'B',
                  text: "L'élevage des palourdes.",
                  image: "/Logo.svg?text=L'élevage des palourdes.",
               },
               {
                  id: 'C',
                  text: 'L’élevage des moules.',
                  image: '/Logo.svg?text=L’élevage des moules.',
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },

         // Difficult Level
         {
            id: 113,
            theme: 'Aquaculture marine',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Qu’elle est la technique communément utilisée pour l’élevage des palourdes',
            options: [
               {
                  id: 'A',
                  text: "L'élevage dans des cages flottantes en mer.",
                  image: "/Logo.svg?text=L'élevage dans des cages flottantes en mer.",
               },
               {
                  id: 'B',
                  text: 'L’élevage dans les lanternes sur filières en offshore.',
                  image: '/Logo.svg?text=L’élevage dans les lanternes sur filières en offshore.',
               },
               {
                  id: 'C',
                  text: "L'élevage sur sol en Estran.",
                  image: "/Logo.svg?text=L'élevage sur sol en Estran.",
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },
         {
            id: 122,
            theme: 'Aquaculture marine',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Pour les espèces à haute valeur commerciale la technique la plus efficace pour contrôler les conditions d’élevage et économiser la consommation d’eau est :',
            options: [
               {
                  id: 'A',
                  text: 'Les cages flottantes en mer ouverte',
                  image: '/Logo.svg?text=Les cages flottantes en mer ouverte',
               },
               {
                  id: 'B',
                  text: 'Le système de recirculation en circuit fermé à terre (RAS)',
                  image: '/Logo.svg?text=Le système de recirculation en circuit fermé à terre (RAS)',
               },
               {
                  id: 'C',
                  text: 'Les étangs dans les lagunes',
                  image: '/Logo.svg?text=Les étangs dans les lagunes',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
      ],
      duplicate_4: [
         // Easy Level
         {
            id: 102,
            theme: 'Aquaculture marine',
            level: 'Easy',
            type: 'multiple-choice',
            question: 'L’aliment de poisson est principalement composé de ?',
            options: [
               {
                  id: 'A',
                  text: 'Céréales et farines animales',
                  image: '/Logo.svg?text=Céréales et farines animales',
               },
               {
                  id: 'B',
                  text: 'Produits chimiques',
                  image: '/Logo.svg?text=Produits chimiques',
               },
               {
                  id: 'C',
                  text: 'Farine et huile de poissons',
                  image: '/Logo.svg?text=Farine et huile de poissons',
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },
         {
            id: 103,
            theme: 'Aquaculture marine',
            level: 'Easy',
            type: 'multiple-choice',
            question:
               'Qu’elle est la durée du cycle de grossissement des huitres creuses ?',
            options: [
               {
                  id: 'A',
                  text: 'Entre 2 et 6 mois',
                  image: '/Logo.svg?text=Entre 2 et 6 mois',
               },
               {
                  id: 'B',
                  text: 'Entre 12 et 18 mois',
                  image: '/Logo.svg?text=Entre 12 et 18 mois',
               },
               {
                  id: 'C',
                  text: 'Entre 2 et 4ans',
                  image: '/Logo.svg?text=Entre 2 et 4ans',
               },
            ],
            correctAnswer: 'B',
            explanation: '',
         },
         // Medium Level
         {
            id: 109,
            theme: 'Aquaculture marine',
            level: 'Medium',
            type: 'multiple-choice',
            question: 'L’aquaponie c’est ?',
            options: [
               {
                  id: 'A',
                  text: "Une méthode de culture qui combine l'élevage de poissons et la culture de plantes en symbiose.",
                  image: "/Logo.svg?text=Une méthode de culture qui combine l'élevage de poissons et la culture de plantes en symbiose.",
               },
               {
                  id: 'B',
                  text: 'Une technique de culture en terre utilisant des engrais chimiques.',
                  image: '/Logo.svg?text=Une technique de culture en terre utilisant des engrais chimiques.',
               },
               {
                  id: 'C',
                  text: 'Une méthode de culture de plantes sans eau.',
                  image: '/Logo.svg?text=Une méthode de culture de plantes sans eau.',
               },
            ],
            correctAnswer: 'A',
            explanation: '',
         },
         {
            id: 114,
            theme: 'Aquaculture marine',
            level: 'Medium',
            type: 'multiple-choice',
            question:
               'Qu’elle est la région qui produit les grandes quantités d’huitres au Maroc',
            options: [
               {
                  id: 'A',
                  text: 'Casablanca Settat',
                  image: '/Logo.svg?text=Casablanca Settat',
               },
               {
                  id: 'B',
                  text: 'Souss Massa',
                  image: '/Logo.svg?text=Souss Massa',
               },
               {
                  id: 'C',
                  text: 'Dakhla oued Eddahab',
                  image: '/Logo.svg?text=Dakhla oued Eddahab',
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },
         // Difficult Level
         {
            id: 120,
            theme: 'Aquaculture marine',
            level: 'Difficult',
            type: 'multiple-choice',
            question: 'Les coquilles des huitres peuvent être transformé en ?',
            options: [
               {
                  id: 'A',
                  text: 'Ciment',
                  image: '/Logo.svg?text=Ciment',
               },
               {
                  id: 'B',
                  text: 'Aliment',
                  image: '/Logo.svg?text=Aliment',
               },
               {
                  id: 'C',
                  text: 'Engrais',
                  image: '/Logo.svg?text=Engrais',
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },
         {
            id: 121,
            theme: 'Aquaculture marine',
            level: 'Difficult',
            type: 'multiple-choice',
            question:
               'Le pays le plus producteur, importateur et exportateur des produits aquacoles  est ?',
            options: [
               {
                  id: 'A',
                  text: 'La Norvège',
                  image: '/Logo.svg?text=La Norvège',
               },
               {
                  id: 'B',
                  text: 'L’Espagne',
                  image: '/Logo.svg?text=L’Espagne',
               },
               {
                  id: 'C',
                  text: 'La Chine',
                  image: '/Logo.svg?text=La Chine',
               },
            ],
            correctAnswer: 'C',
            explanation: '',
         },
      ],
   },
};

export const themesByLevel = {
   DÉBUTANT: [
      'Les animaux aquatiques',
      "L'alimentation des poissons d'élevage",
      "Les métiers de l'aquaculture",
      "L'aquaculture et l'environnement",
      "L'importance économique et sociale de l'aquaculture au Maroc",
   ],
   AVANCÉ: [
      'Découverte de lAquaculture',
      'Les Regions dAquaculture au Maroc',
      'Alimentation et Croissance des Espèces Aquacoles',
   ],
   EXCELLENT: [
      'Aquaculture marine',
      'duplicate_1',
      'duplicate_2',
      'duplicate_3',
      'duplicate_4',
   ],
} as const;

export function getRandomQuestions(
   userLevel: string,
   theme: string,
   difficulty: 'Easy' | 'Medium' | 'Difficult',
   count: number
): QuizQuestion[] {
   console.log(userLevel, theme, difficulty, count);
   console.log(quizQuestions[userLevel], quizQuestions[userLevel][theme]);
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
