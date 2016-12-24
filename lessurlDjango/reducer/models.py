from django.db import models
from .urlencoder import *


class ReducedUrl(models.Model):
    longUrl = models.CharField(max_length=1000)
    shortUrl = models.CharField(max_length=100)
    nb_request = models.IntegerField(default=0)
    owner = models.ForeignKey('auth.User', related_name='reducedUrls', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.longUrl

    def save(self, *args, **kwargs):
        super(ReducedUrl, self).save(*args, **kwargs)
        if self.shortUrl == "" :
            self.generer()


    def generer(self):
        self.shortUrl = encode_url(self.id)
        self.save()



