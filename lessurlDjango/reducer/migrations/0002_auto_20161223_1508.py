# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-23 15:08
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reducer', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reducedurl',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reducedUrl', to=settings.AUTH_USER_MODEL),
        ),
    ]
