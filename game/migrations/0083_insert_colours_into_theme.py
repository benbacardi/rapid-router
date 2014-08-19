# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0082_traffic_light_episode_random_level'),
    ]

    operations = [
        migrations.AddField(
            model_name='theme',
            name='background',
            field=models.CharField(default=b'#eff8ff', max_length=7),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='theme',
            name='border',
            field=models.CharField(default=b'#bce369', max_length=7),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='theme',
            name='selected',
            field=models.CharField(default=b'#70961f', max_length=7),
            preserve_default=True,
        ),
    ]
