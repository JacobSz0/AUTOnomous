# Generated by Django 4.0.3 on 2022-12-12 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='autovo',
            name='color',
        ),
        migrations.AddField(
            model_name='autovo',
            name='vin',
            field=models.CharField(default=123, max_length=17, unique=True),
            preserve_default=False,
        ),
    ]
