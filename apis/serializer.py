from rest_framework import serializers
from apis.models import Movie
from django.contrib.auth.models import User

class MovieSerializer(serializers.Serializer):
    movie_name = serializers.CharField(max_length=128)
    director = serializers.CharField(max_length=128)
    leading_actor = serializers.CharField(max_length=128)
    country_of_production = serializers.CharField(max_length=128)
    language = serializers.CharField(max_length=128)
    release_data = serializers.CharField(max_length=128)
    length = serializers.CharField(max_length=128)
    introduction = serializers.CharField(max_length=128)
    rating = serializers.FloatField(default=0)
    image = serializers.CharField()

class ReviewSerializer(serializers.Serializer):
    movie_name = serializers.CharField(max_length=128, default='')
    rating = serializers.FloatField(default=0)
    likes = serializers.IntegerField(default=0)
    content = serializers.CharField(max_length=128)
