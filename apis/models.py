from django.db import models
from django.template.defaultfilters import slugify

class Category(models.Model):
    name = models.CharField(max_length=128, unique=True)
    slug = models.SlugField(unique=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

class Movie(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    movie_name = models.CharField(max_length=128, default='')
    director = models.CharField(max_length=128, default='')
    leading_actor = models.CharField(max_length=128, default='')
    country_of_production = models.CharField(max_length=50, default='')
    language = models.CharField(max_length=50, default='')
    release_data = models.CharField(max_length=50, default='')
    length = models.CharField(max_length=50, default='')
    introduction = models.TextField(default='')
    rating = models.FloatField(default=0)
    image = models.CharField(max_length=128, default='')

    def __str__(self):
        return self.movie_name
