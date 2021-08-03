import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'movie_maniacs.settings')

import django
django.setup()
from apis.models import Movie, Category

def populate():

    animation_list = [
        {
            'movie_name': 'Coco',
            'director': 'Lee Unkrich & Adrian Molina',
            'leading_actor': 'Anthony Gonzalez(voice) Gael García Bernal(voice) Benjamin Bratt(voice)',
            'country_of_production': 'United States & Mexico',
            'language': 'English Spanish',
            'release_data': '2017',
            'length': '1h 45min',
            'rating': 8.4,
            'image': '../../media/coco.jpeg',
            'introduction': "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer."
        },
        {
            'movie_name': 'Megamind',
            'director': 'Tom McGrath',
            'leading_actor': 'Will Ferrell(voice) Jonah Hill (voice) Brad Pitt(voice)',
            'country_of_production': 'United States',
            'language': 'English',
            'release_data': '2010',
            'length': '1h 35min',
            'rating': 7.2,
            'image': '../../media/coco.jpeg',
            'introduction': 'Evil genius Megamind finally defeats his do-gooder nemesis, Metro Man, but is left without a purpose in a superhero-free world.'
        },
        {
            'movie_name': 'Zootopia',
            'director': 'Byron Howard & Rich Moore & Jared Bush',
            'leading_actor': 'Ginnifer Goodwin(voice) Jason Bateman(voice) Idris Elba(voice)',
            'country_of_production': 'United States',
            'language': 'English',
            'release_data': '2016',
            'length': '1h 48min',
            'rating': 8.0,
            'image': '../../media/coco.jpeg',
            'introduction': 'In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.'
        },
        {
            'movie_name': 'The Lion King',
            'director': 'Jon Favreau',
            'leading_actor': 'Donald Glover(voice) Beyoncé(voice) Seth Rogen(voice)',
            'country_of_production': 'United States',
            'language': 'English Xhosa Zulu French Spanish Hindi',
            'release_data': '2019',
            'length': '1h 58min',
            'rating': 6.8,
            'image': '../../media/coco.jpeg',
            'introduction': 'After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.'
        },
    ]

    action_list = [
        {
            'movie_name': 'Black Widow',
            'director': 'Cate Shortland',
            'leading_actor': 'Scarlett Johansson & Florence Pugh & David Harbour',
            'country_of_production': 'United States',
            'language': 'English Russian Norwegian Hungarian Macedonian Finnish',
            'release_data': '2021',
            'length': '2h 14min',
            'rating': 6.9,
            'image': '../../media/coco.jpeg',
            'introduction': 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.'
        },
        {
            'movie_name': 'F9',
            'director': 'Justin Lin',
            'leading_actor': 'Vin Diesel & Michelle Rodriguez & Jordana Brewster',
            'country_of_production': 'United States Thailand Canada',
            'language': 'English',
            'release_data': '2021',
            'length': '2h 23min',
            'rating': 5.3,
            'image': '../../media/coco.jpeg',
            'introduction': "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother."
        },
        {
            'movie_name': 'Tenet',
            'director': 'Christopher Nolan',
            'leading_actor': 'John David Washington & Robert Pattinson & Elizabeth Debicki',
            'country_of_production': 'United States United Kingdom',
            'language': 'English Russian Ukrainian Estonian Norwegian Hindi',
            'release_data': '2020',
            'length': '2h 30min',
            'rating': 7.4,
            'image': '../../media/coco.jpeg',
            'introduction': 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.'
        }
    ]

    cats = {
        'Animation': {'movie': animation_list},
        'Action': {'movie': action_list}
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