import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'movie_maniacs.settings')

import django
django.setup()
from apis.models import Movie, Category, UserProfile

def populate():

    comedy_list = [
        {
            'movie_name': 'The Suicide Squad',
            'director': 'James Gunn',
            'leading_actor': 'Margot Robbie & Idris Elba & John Cena',
            'country_of_production': 'United States',
            'language': 'English',
            'release_data': '2021',
            'length': '2h 12min',
            'rating': 8.0,
            'image': '../../media/the-suicide-squad.jpeg',
            'introduction': 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.'
        }
    ]

    thriller_list = [
        {
            'movie_name': 'Old',
            'director': 'M. Night Shyamalan',
            'leading_actor': 'Gael García Bernal & Vicky Krieps & Rufus Sewell',
            'country_of_production': 'United States',
            'language': 'English',
            'release_data': '2021',
            'length': '1h 48min',
            'rating': 6.0,
            'image': '../../media/old.jpeg',
            'introduction': "A vacationing family discovers that the secluded beach where they're relaxing for a few hours is somehow causing them to age rapidly, reducing their entire lives into a single day."
        }
    ]

    romance_list = [
        {
            'movie_name': 'Twilight',
            'director': 'Catherine Hardwicke',
            'leading_actor': 'Kristen Stewart & Robert Pattinson & Billy Burke',
            'country_of_production': 'United States',
            'language': 'English',
            'release_data': '2008',
            'length': '2h 2min',
            'rating': 5.2,
            'image': '../../media/twilight.jpeg',
            'introduction': "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire."
        }
    ]

    horror_list = [
        {
            'movie_name': 'Blood Red Sky',
            'director': 'Peter Thorwarth',
            'leading_actor': 'Peri Baumeister & Carl Anton Koch & Alexander Scheer',
            'country_of_production': 'Germany & United State',
            'language': 'German English Arabic',
            'release_data': '2021',
            'length': '2h 1min',
            'rating': 6.1,
            'image': '../../media/blood-red-sky.jpeg',
            'introduction': "A woman with a mysterious illness is forced into action when a group of terrorists attempt to hijack a transatlantic overnight flight."
        }
    ]

    action_list = [
        {
            'movie_name': 'Tenet',
            'director': 'Christopher Nolan',
            'leading_actor': 'John David Washington & Robert Pattinson & Elizabeth Debicki',
            'country_of_production': 'United States United Kingdom',
            'language': 'English Russian Ukrainian Estonian Norwegian Hindi',
            'release_data': '2020',
            'length': '2h 30min',
            'rating': 7.4,
            'image': '../../media/tenet.jpeg',
            'introduction': 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.'
        },
        {
            'movie_name': 'Black Widow',
            'director': 'Cate Shortland',
            'leading_actor': 'Scarlett Johansson & Florence Pugh & David Harbour',
            'country_of_production': 'United States',
            'language': 'English Russian Norwegian Hungarian Macedonian Finnish',
            'release_data': '2021',
            'length': '2h 14min',
            'rating': 6.9,
            'image': '../../media/black-widow.jpeg',
            'introduction': 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.'
        }
    ]

    crime_list = [
        {
            'movie_name': 'F9',
            'director': 'Justin Lin',
            'leading_actor': 'Vin Diesel & Michelle Rodriguez & Jordana Brewster',
            'country_of_production': 'United States Thailand Canada',
            'language': 'English',
            'release_data': '2021',
            'length': '2h 23min',
            'rating': 5.3,
            'image': '../../media/f9.jpeg',
            'introduction': "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother."
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

    for cat, cat_data in cats.items():
        c = add_cat(cat)
        for m in cat_data['movie']:
            add_movie(c, m)

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
    m.release_data = movie_info['release_data']
    m.length = movie_info['length']
    m.introduction = movie_info['introduction']
    m.rating = movie_info['rating']
    m.image = movie_info['image']
    m.save()
    return m


if __name__ == '__main__':
    populate()