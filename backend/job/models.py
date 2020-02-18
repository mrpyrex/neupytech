from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Job(models.Model):
    title = models.CharField(max_length=250)
    image = models.URLField()
    summary = models.TextField()

    def __str__(self):
        return self.title


class Profile(models.Model):
    author = models.OneToOneField(User, on_delete=models.CASCADE)
    job_title = models.CharField(max_length=250)
    image = models.URLField()
    bio = models.TextField()

    def __str__(self):
        return f'{self.author.username} Profile'
