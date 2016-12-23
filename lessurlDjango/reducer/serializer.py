from rest_framework import serializers
from .models import ReducedUrl


class ReducedUrlSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    longUrl = serializers.CharField(max_length=1000)
    shortUrl = serializers.CharField(max_length=100, required=False)
    nb_request = serializers.IntegerField()

    def create(self, validated_data):
        """
        Create and return a new `ReducedUrl` instance, given the validated data.
        """
        return ReducedUrl.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.longUrl = validated_data.get('longUrl', instance.longUrl)
        instance.shortUrl = validated_data.get('shortUrl', instance.shortUrl)
        instance.save()
        return instance



