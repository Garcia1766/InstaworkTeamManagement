from django.db import models

# Create your models here.

class TeamMember(models.Model):
    ROLE_CHOICES = [
        ('Admin', 'Admin'),
        ('Regular', 'Regular'),
    ]

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='Regular')

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
