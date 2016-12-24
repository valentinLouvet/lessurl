from rest_framework import serializers
from .models import ReducedUrl
from django.contrib.auth.models import User


class ReducedUrlSerializer(serializers.ModelSerializer):
    shortUrl = serializers.CharField(max_length=100, required=False)
    nb_request = serializers.IntegerField(required=False)
    owner = serializers.CharField(source='owner.username',required=False)
    class Meta:
        model = ReducedUrl
        fields = ('id', 'longUrl', 'shortUrl', 'nb_request', 'owner')


class UserSerializer(serializers.ModelSerializer):
    reducedUrls = serializers.PrimaryKeyRelatedField(many=True, queryset=ReducedUrl.objects.all(), default=[])

    class Meta:
        model = User
        fields = ('id', 'username', 'reducedUrls')



