import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'movie_maniacs.settings')

import django
django.setup()
from apis.models import Movie, Category, UserProfile, Review
from django.contrib.auth.models import User

def populate():
    comedy_list = [
        {
            'movie_name': 'The Suicide Squad',
            'director': 'James Gunn',
            'leading_actor': 'Margot Robbie & Idris Elba & John Cena',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2021',
            'length': '2h 12min',
            'rating': 3.0,
            'image': '../../media/the-suicide-squad.jpeg',
            'introduction': 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.'
        },
        {
            'movie_name': 'La vita e bella',
            'director': 'Roberto Benigni',
            'leading_actor': 'Roberto Benigni & Nicoletta Braschi',
            'country_of_production': 'Italy',
            'language': 'English',
            'release_date': '1997',
            'length': '1h 56min',
            'rating': 3.6,
            'image': '../../media/la-vita-e-bella.jpeg',
            'introduction': 'In 1930s Italy, a carefree Jewish waiter named Guido starts a fairy tale life by courting and marrying a lovely woman from a nearby city. Guido and his wife have a son and live happily together until the occupation of Italy by German forces. In an attempt to hold his family together and help his son survive the horrors of a Jewish Concentration Camp, Guido imagines that the Holocaust is a game and that the grand prize for winning is a tank.'
        },
        {
            'movie_name': 'Yes Minister Party Games',
            'director': 'Peter Whitmore',
            'leading_actor': 'Pail Eddington & Nigel Hawthorne',
            'country_of_production': 'United Kingdom',
            'release_date': '1984',
            'language': 'English',
            'length': '1h 1min',
            'rating': 4.2,
            'image': '../../media/yes-minister-party-games.jpeg',
            'introduction': 'Sitcom about a British government minister and the advisers who surround him. The seasonal festivities at the Department of Administrative Affairs are overshadowed by rumours of a cabinet reshuffle. But a leadership election and the Eurosausage affair could lead to great things for Jim Hacker.'
        },
        {
            'movie_name': 'Cruella',
            'director': 'Craig Gillespie',
            'leading_actor': 'Emma Stone & Joel Fry',
            'country_of_production': 'United States',
            'release_date': '2021',
            'language': 'English',
            'length': '2h 14min',
            'rating': 2.9,
            'image': '../../media/cruella.jpeg',
            'introduction': 'A live-action prequel feature film following a young Cruella de Vil.'
        },
        {
            'movie_name': 'Lady Bird',
            'director': 'Greta Gerwig',
            'leading_actor': 'Saoirse Ronan & Laurie Metcalf',
            'country_of_production': 'United States',
            'release_date': '2017',
            'language': 'English',
            'length': '1h 34min',
            'rating': 2.9,
            'image': '../../media/lady-bird.jpeg',
            'introduction': 'In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California.'
        }
    ]

    thriller_list = [
        {
            'movie_name': 'Old',
            'director': 'M. Night Shyamalan',
            'leading_actor': 'Gael Garc??a Bernal & Vicky Krieps & Rufus Sewell',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2021',
            'length': '1h 48min',
            'rating': 2.5,
            'image': '../../media/old.jpeg',
            'introduction': "A vacationing family discovers that the secluded beach where they're relaxing for a few hours is somehow causing them to age rapidly, reducing their entire lives into a single day."
        },
        {
            'movie_name': 'The Dark Knigth',
            'director': 'Christopher Nolan',
            'leading_actor': 'Christian Bale & Heath Ledger',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2008',
            'length': '2h 32min',
            'rating': 4.0,
            'image': '../../media/the-dark-knigth.jpeg',
            'introduction': "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
        },
        {
            'movie_name': 'The Silence of the Lambs',
            'director': 'Jonathan Demme',
            'leading_actor': 'Jodie Foster & Anthony Hopkins',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2008',
            'length': '1h 58min',
            'rating': 3.6,
            'image': '../../media/the-silence-of-the-lambs.jpeg',
            'introduction': "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
        },
        {
            'movie_name': 'Jolt',
            'director': 'Tanya Wexler',
            'leading_actor': 'Kate Beckinsale & Jai Courtney',
            'country_of_production': 'United States',
            'release_date': '2021',
            'language': 'English',
            'length': '1h 31min',
            'rating': 2.5,
            'image': '../../media/jolt.jpeg',
            'introduction': 'A bouncer with a slightly murderous anger-management problem that she controls with the help of an electrode-lined vest she uses to shock herself back to normalcy whenever she gets homicidal.'
        },
        {
            'movie_name': 'Pig',
            'director': 'Michael Sarnoski',
            'leading_actor': 'Nicolas Cage & Alex Wolff',
            'country_of_production': 'United States',
            'release_date': '2021',
            'language': 'English',
            'length': '1h 32min',
            'rating': 3.0,
            'image': '../../media/pig.jpeg',
            'introduction': 'A truffle hunter who lives alone in the Oregonian wilderness must return to his past in Portland in search of his beloved foraging pig after she is kidnapped.'
        }
    ]

    romance_list = [
        {
            'movie_name': 'Twilight',
            'director': 'Catherine Hardwicke',
            'leading_actor': 'Kristen Stewart & Robert Pattinson & Billy Burke',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2008',
            'length': '2h 2min',
            'rating': 3.2,
            'image': '../../media/twilight.jpeg',
            'introduction': "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire."
        },
        {
            'movie_name': 'Titanic',
            'director': 'James Cameron',
            'leading_actor': 'Leonardo DiCaprio & Kate Winslet',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '1997',
            'length': '3h 47min',
            'rating': 3.1,
            'image': '../../media/titanic.jpeg',
            'introduction': "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
        },
        {
            'movie_name': 'Avatar',
            'director': 'James Cameron',
            'leading_actor': 'Sam Worthington & Zoe Saldana',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2009',
            'length': '2h 42min',
            'rating': 3.2,
            'image': '../../media/avatar.jpeg',
            'introduction': "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
        },
        {
            'movie_name': 'Lalaland',
            'director': 'Damien Chazelle',
            'leading_actor': 'Ryan Gosling & Emma Stone',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2016',
            'length': '2h 8min',
            'rating': 3.5,
            'image': '../../media/lalaland.jpeg',
            'introduction': "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
        },
        {
            'movie_name': 'The shape of water',
            'director': 'Guillermo del Toro',
            'leading_actor': 'Sally Hawkins & Octavia Spencer',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2017',
            'length': '2h 3min',
            'rating': 2.9,
            'image': '../../media/the-shape-of-water.jpeg',
            'introduction': "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
        }
    ]

    horror_list = [
        {
            'movie_name': 'Blood Red Sky',
            'director': 'Peter Thorwarth',
            'leading_actor': 'Peri Baumeister & Carl Anton Koch & Alexander Scheer',
            'country_of_production': 'Germany & United States',
            'language': 'German English Arabic',
            'release_date': '2021',
            'length': '2h 1min',
            'rating': 2.9,
            'image': '../../media/blood-red-sky.jpeg',
            'introduction': "A woman with a mysterious illness is forced into action when a group of terrorists attempt to hijack a transatlantic overnight flight."
        },
        {
            'movie_name': 'A Quiet Place Part 2',
            'director': 'John Krasinski',
            'leading_actor': 'Emily Blunt & Milicent Simminds',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2021',
            'length': '1h 37min',
            'rating': 3.1,
            'image': '../../media/a-quiet-place-part-2.jpeg',
            'introduction': "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path."
        },
        {
            'movie_name': 'It',
            'director': 'Andy Muschietti',
            'leading_actor': 'Bill Skarsgard & Jaeden Martell',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2017',
            'length': '2h 15min',
            'rating': 3.3,
            'image': '../../media/it.jpeg',
            'introduction': "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town."
        },
        {
            'movie_name': 'The Hunt',
            'director': 'Craig Zobel',
            'leading_actor': 'Betty Gilpin & Hilary Swank',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2020',
            'length': '1h 30min',
            'rating': 2.5,
            'image': '../../media/the-hunt.jpeg',
            'introduction': "Twelve strangers wake up in a clearing. They don't know where they are, or how they got there. They don't know they've been chosen - for a very specific purpose - The Hunt."
        },
        {
            'movie_name': 'Escape Room',
            'director': 'Adam Robitel',
            'leading_actor': 'Taylor Russell & Logan Miller',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2019',
            'length': '1h 39min',
            'rating': 2.4,
            'image': '../../media/escape-room.jpeg',
            'introduction': "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town."
        }
    ]

    action_list = [
        {
            'movie_name': 'Tenet',
            'director': 'Christopher Nolan',
            'leading_actor': 'John David Washington & Robert Pattinson & Elizabeth Debicki',
            'country_of_production': 'United States United Kingdom',
            'language': 'English Russian Ukrainian Estonian Norwegian Hindi',
            'release_date': '2020',
            'length': '2h 30min',
            'rating': 3.4,
            'image': '../../media/tenet.jpeg',
            'introduction': 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.'
        },
        {
            'movie_name': 'Black Widow',
            'director': 'Cate Shortland',
            'leading_actor': 'Scarlett Johansson & Florence Pugh & David Harbour',
            'country_of_production': 'United States',
            'language': 'English Russian Norwegian Hungarian Macedonian Finnish',
            'release_date': '2021',
            'length': '2h 14min',
            'rating': 2.9,
            'image': '../../media/black-widow.jpeg',
            'introduction': 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.'
        },
        {
            'movie_name': 'The Tomorrow War',
            'director': 'Chris Mckay',
            'leading_actor': 'Chris Pratt & Yvonne Strahovski',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2021',
            'length': '2h 18min',
            'rating': 2.6,
            'image': '../../media/the-tomorrow-war.jpeg',
            'introduction': 'A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.'
        },
        {
            'movie_name': 'Nobody',
            'director': 'Ilya Naishuller',
            'leading_actor': 'Bob Odenkirk & Connie Nielsen',
            'country_of_production': 'United States',
            'language': 'English ',
            'release_date': '2021',
            'length': '1h 32min',
            'rating': 3.4,
            'image': '../../media/nobody.jpeg',
            'introduction': 'A bystander who intervenes to help a woman being harassed by a group of men becomes the target of a vengeful drug lord.'
        },
        {
            'movie_name': 'Dune',
            'director': 'David Lynch',
            'leading_actor': 'Kyle MacLachlan & Virginia Madsen',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '1984',
            'length': '2h 17min',
            'rating': 2.5,
            'image': '../../media/dune.jpeg',
            'introduction': 'A Dukes son leads desert warriors against the galactic emperor and his fathers evil nemesis when they assassinate his father and free their desert world from the emperors rule.'
        }
    ]

    crime_list = [
        {
            'movie_name': 'F9',
            'director': 'Justin Lin',
            'leading_actor': 'Vin Diesel & Michelle Rodriguez & Jordana Brewster',
            'country_of_production': 'United States Thailand Canada',
            'language': 'English',
            'release_date': '2021',
            'length': '2h 23min',
            'rating': 2.3,
            'image': '../../media/f9.jpeg',
            'introduction': "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother."
        },
        {
            'movie_name': 'Pulp Fiction',
            'director': 'Quentin Tarantino',
            'leading_actor': 'John Travolta & Uma Thurman',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '1994',
            'length': '2h 34min',
            'rating': 3.9,
            'image': '../../media/pulp-fiction.jpeg',
            'introduction': "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
        },
        {
            'movie_name': 'Joker',
            'director': 'Todd Phillips',
            'leading_actor': 'Joaquin Phoenix & Robert De Niro',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2019',
            'length': '2h 2min',
            'rating': 3.4,
            'image': '../../media/joker.jpeg',
            'introduction': "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."
        },
        {
            'movie_name': 'Zola',
            'director': 'Janicza Bravo',
            'leading_actor': 'Taylor Paige & Riley Keough',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '2020',
            'length': '1h 26min',
            'rating': 2.6,
            'image': '../../media/zola.jpeg',
            'introduction': "A stripper named Zola embarks on a wild road trip to Florida."
        },
        {
            'movie_name': 'Heat',
            'director': 'Michael Mann',
            'leading_actor': 'Ai Pacino & Robert De Niro',
            'country_of_production': 'United States',
            'language': 'English',
            'release_date': '1995',
            'length': '2h 50min',
            'rating': 3.6,
            'image': '../../media/heat.jpeg',
            'introduction': "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist."
        }
    ]

    cats = {
        'Comedy ': {'movie': comedy_list},
        'Thriller': {'movie': thriller_list},
        'Romance': {'movie': romance_list},
        'Horror': {'movie': horror_list},
        'Action': {'movie': action_list},
        'Crime': {'movie': crime_list}
    }

    review_list = [
        {
            'movie': 'The Suicide Squad',
            'content': 'The most derivative but finely tuned of superhero movies to come out in ages.',
            'rating': 3.2,
            'likes': 10,
            'user': {
                'username': 'user1',
                'password': 'user1',
                'email': 'user1@gmail.com'
            }
        },
        {
            'movie': 'Cruella',
            'content': 'Too much brainstorming.',
            'rating': 3.2,
            'likes': 39,
            'user': {
                'username': 'user3',
                'password': 'user3',
                'email': 'user3@gmail.com'
            }
        },
        {
            'movie': 'Lady Bird',
            'content': 'Love her personality here, and wish to see more about her.',
            'rating': 2.6,
            'likes': 16,
            'user': {
                'username': 'user4',
                'password': 'user4',
                'email': 'user4@gmail.com'
            }
        },
        {
            'movie': 'Lady Bird',
            'content': 'The actress was soooo cool, she deserves an oskar',
            'rating': 3.6,
            'likes': 6,
            'user': {
                'username': 'user5',
                'password': 'user5',
                'email': 'user5@gmail.com'
            }
        },
        {
            'movie': 'Old',
            'content': 'pretty good!',
            'rating': 3.6,
            'likes': 3,
            'user': {
                'username': 'user6',
                'password': 'user6',
                'email': 'user6@gmail.com'
            }
        },
        {
            'movie': 'The Dark Knigth',
            'content': 'I will watch this for a couple of times in the next week, it was sooo good!',
            'rating': 4.2,
            'likes': 56,
            'user': {
                'username': 'user7',
                'password': 'user7',
                'email': 'user7@gmail.com'
            }
        },
        {
            'movie': 'The Silence of the Lambs',
            'content': 'Old movie, but never out of fashion.',
            'rating': 3.6,
            'likes': 22,
            'user': {
                'username': 'user8',
                'password': 'user8',
                'email': 'user8@gmail.com'
            }
        },
        {
            'movie': 'Jolt',
            'content': 'Not that good.',
            'rating': 2.6,
            'likes': 7,
            'user': {
                'username': 'user9',
                'password': 'user9',
                'email': 'user9@gmail.com'
            }
        },
        {
            'movie': 'Pig',
            'content': 'I love the colour of the movie, it was dark tune.',
            'rating': 2.6,
            'likes': 18,
            'user': {
                'username': 'user10',
                'password': 'user10',
                'email': 'user10@gmail.com'
            }
        },
        {
            'movie': 'Twilight',
            'content': 'Not as good as the first few.',
            'rating': 2.6,
            'likes': 56,
            'user': {
                'username': 'user11',
                'password': 'user11',
                'email': 'user11@gmail.com'
            }
        },
        {
            'movie': 'Titanic',
            'content': 'Best movie forever.',
            'rating': 4.5,
            'likes': 108,
            'user': {
                'username': 'user12',
                'password': 'user12',
                'email': 'user12@gmail.com'
            }
        },
        {
            'movie': 'Avatar',
            'content': 'The technology they used here was awesome!!!Love it.',
            'rating': 4.7,
            'likes': 139,
            'user': {
                'username': 'user13',
                'password': 'user13',
                'email': 'user13@gmail.com'
            }
        },
        {
            'movie': 'Lalaland',
            'content': 'This movie taught me a lot, we should follow our dreams.',
            'rating': 3.6,
            'likes': 116,
            'user': {
                'username': 'user14',
                'password': 'user14',
                'email': 'user14@gmail.com'
            }
        },
        {
            'movie': 'The shape of water',
            'content': 'Not that good as the comment.',
            'rating': 2.6,
            'likes': 33,
            'user': {
                'username': 'user15',
                'password': 'user15',
                'email': 'user15@gmail.com'
            }
        },
        {
            'movie': 'Blood Red Sky',
            'content': 'Love the background music.',
            'rating': 2.6,
            'likes': 12,
            'user': {
                'username': 'user16',
                'password': 'user16',
                'email': 'user16@gmail.com'
            }
        },
        {
            'movie': 'A Quiet Place Part 2',
            'content': 'Tooooo short.',
            'rating': 3.0,
            'likes': 25,
            'user': {
                'username': 'user17',
                'password': 'user17',
                'email': 'user17@gmail.com'
            }
        },
        {
            'movie': 'It',
            'content': 'It was a good movie, and i hate the bad guy there.',
            'rating': 3.1,
            'likes': 156,
            'user': {
                'username': 'user18',
                'password': 'user18',
                'email': 'user18@gmail.com'
            }
        },
        {
            'movie': 'The Hunt',
            'content': 'It was good, and the cast was great.',
            'rating': 3.6,
            'likes': 22,
            'user': {
                'username': 'user19',
                'password': 'user19',
                'email': 'user19@gmail.com'
            }
        },
        {
            'movie': 'Escape Room',
            'content': 'It was thrilling. I really want to play it after watching it.',
            'rating': 3.2,
            'likes': 36,
            'user': {
                'username': 'user20',
                'password': 'user20',
                'email': 'user20@gmail.com'
            }
        },
        {
            'movie': 'Tenet',
            'content': 'Best movie from Nolan.',
            'rating': 4.5,
            'likes': 128,
            'user': {
                'username': 'user21',
                'password': 'user21',
                'email': 'user21@gmail.com'
            }
        },
        {
            'movie': 'Black Widow',
            'content': 'I think this movie is suitable for watching in the cinema, but the cinema is on lockdown now.',
            'rating': 2.7,
            'likes': 139,
            'user': {
                'username': 'user22',
                'password': 'user22',
                'email': 'user22@gmail.com'
            }
        },
        {
            'movie': 'The Tomorrow War',
            'content': 'The special effects were great, but the story was mediocre.',
            'rating': 2.6,
            'likes': 116,
            'user': {
                'username': 'user23',
                'password': 'user23',
                'email': 'user23@gmail.com'
            }
        },
        {
            'movie': 'Nobody',
            'content': 'I think the interpretation of the character is very good.',
            'rating': 3.1,
            'likes': 23,
            'user': {
                'username': 'user24',
                'password': 'user24',
                'email': 'user24@gmail.com'
            }
        },
        {
            'movie': 'Dune',
            'content': 'Good.',
            'rating': 3.6,
            'likes': 22,
            'user': {
                'username': 'user25',
                'password': 'user25',
                'email': 'user25@gmail.com'
            }
        },
        {
            'movie': 'F9',
            'content': 'Not that good.',
            'rating': 2.0,
            'likes': 20,
            'user': {
                'username': 'user26',
                'password': 'user26',
                'email': 'user26@gmail.com'
            }
        },
        {
            'movie': 'Pulp Fiction',
            'content': 'I saw this movie when I was a kid. It was a classic.',
            'rating': 3.9,
            'likes': 256,
            'user': {
                'username': 'user27',
                'password': 'user27',
                'email': 'user27@gmail.com'
            }
        },
        {
            'movie': 'Joker',
            'content': 'The idea of the film is very thought-provoking, let us have more thinking about the society.',
            'rating': 3.6,
            'likes': 232,
            'user': {
                'username': 'user28',
                'password': 'user28',
                'email': 'user28@gmail.com'
            }
        },
        {
            'movie': 'Zola',
            'content': 'Just soso.',
            'rating': 2.6,
            'likes': 26,
            'user': {
                'username': 'user29',
                'password': 'user29',
                'email': 'user29@gmail.com'
            }
        },
        {
            'movie': 'Heat',
            'content': 'I like the directors way of expression.',
            'rating': 3.2,
            'likes': 36,
            'user': {
                'username': 'user30',
                'password': 'user30',
                'email': 'user30@gmail.com'
            }
        }
    ]

    for cat, cat_data in cats.items():
        c = add_cat(cat)
        for m in cat_data['movie']:
            add_movie(c, m)

    for review in review_list:
        username = review['user']['username']
        email = review['user']['email']
        password = review['user']['password']
        u = add_user(username, email, password)
        add_review(u, review['movie'], review['rating'], review['likes'], review['content'])

def add_cat(name):
    c = Category.objects.get_or_create(name=name)[0]
    c.save()
    return c

def add_movie(cat, movie_info):
    m = Movie.objects.get_or_create(category=cat, movie_name=movie_info['movie_name'])[0]
    m.director = movie_info['director']
    m.leading_actor = movie_info['leading_actor']
    m.country_of_production = movie_info['country_of_production']
    m.language = movie_info['language']
    m.release_date = movie_info['release_date']
    m.length = movie_info['length']
    m.introduction = movie_info['introduction']
    m.rating = movie_info['rating']
    m.image = movie_info['image']
    m.save()
    return m

def add_user(username, email, password):
    u = User.objects.create_user(username=username, email=email, password=password)
    u.save()
    return u

def add_review(user, movie_name, rating, likes, content):
    r = Review.objects.create(user=user, movie_name=movie_name, rating=rating, likes=likes, content=content)
    r.save()
    return r

if __name__ == '__main__':
    populate()