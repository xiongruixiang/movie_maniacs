#
# Unit Tests
# By Team: Hello World
#
# In order to run these tests, please run $ python manage.py test
#

from django.test import TestCase
from apis.models import Category, Review, User, Movie

class CategoryTestCase(TestCase):
    def setUp(self):
        Category.objects.create(name='Animation-Disney')

    def test_get_all_category(self):
        animation = Category.objects.get(name='Animation-Disney')
        self.assertEqual(animation.get_category_slug_name(), 'animation-disney')

class UserTestCase(TestCase):
    def setUp(self):
        username = 'Unit Test'
        password = '123456'
        email = 'unittest@gmail.com'
        User.objects.create_user(username=username, email=email, password=password)

    def test_get_username(self):
        test_user = User.objects.get(username='Unit Test')
        self.assertEqual(test_user.__str__(), 'Unit Test')

class ReviewTestCase(TestCase):
    def setUp(self):
        username = 'Unit Test'
        password = '123456'
        email = 'unittest@gmail.com'
        u = User.objects.create_user(username=username, email=email, password=password)

        movie_name = 'Frozen'
        rating = 4.5
        content = 'The music is too exciting.'
        likes = 56
        Review.objects.create(user=u, movie_name=movie_name, rating=rating, likes=likes, content=content)

    def test_get_review_content(self):
        movie_name = 'Frozen'
        test_review = Review.objects.get(movie_name=movie_name)
        self.assertEqual(test_review.get_review_content(), 'The music is too exciting.')

class MovieTestCase(TestCase):
    def setUp(self):
        category = Category.objects.create(name='Animation-Disney')
        category.save()

        movie_name = 'Frozen'
        director = 'Chris Buck & Jennifer Lee'
        leading_actor = 'Kristen Bell(voice) & Idina Menzel(voice) & Jonathan Groff(voice)'
        country_of_production = 'United States Norway'
        language = 'English Norwegian'
        release_date = '2013'
        length = '1h 42min'
        introduction = 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.'
        rating = 4.3
        image = '../../media/frozen.jpeg'

        m = Movie.objects.get_or_create(category=category, movie_name=movie_name)[0]
        m.director = director
        m.leading_actor = leading_actor
        m.country_of_production = country_of_production
        m.language = language
        m.release_date = release_date
        m.length = length
        m.introduction = introduction
        m.rating = rating
        m.image = image
        m.save()

    def test_get_rating(self):
        test_movie = Movie.objects.get(movie_name='Frozen')
        self.assertEqual(test_movie.get_rating(), 4.3)
        self.assertEqual(test_movie.get_category(), 'Animation-Disney')
