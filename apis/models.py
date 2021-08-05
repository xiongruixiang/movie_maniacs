from django.db import models
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class Category(models.Model):
    name = models.CharField(max_length=128, unique=True)
    slug = models.SlugField(unique=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)

    movie_name = models.CharField(max_length=128, default='')
    rating = models.FloatField(default=0)
    content = models.CharField(max_length=128, default='')
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username

class Movie(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    review = models.ForeignKey(Review, on_delete=models.DO_NOTHING, null=True)

    movie_name = models.CharField(max_length=128, default='')
    director = models.CharField(max_length=128, default='')
    leading_actor = models.CharField(max_length=128, default='')
    country_of_production = models.CharField(max_length=50, default='')
    language = models.CharField(max_length=50, default='')
    release_date = models.CharField(max_length=50, default='')
    length = models.CharField(max_length=50, default='')
    introduction = models.TextField(default='')
    rating = models.FloatField(default=0)
    image = models.CharField(max_length=128, default='')

    slug = models.SlugField(unique=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.movie_name)
        super(Movie, self).save(*args, **kwargs)

    def __str__(self):
        return self.movie_name
