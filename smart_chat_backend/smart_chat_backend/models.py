# from dataclasses import dataclass
# from datetime import date
#
# from django.contrib.auth.models import AbstractUser
# from django.db import models


# class ImageCategory(models.TextChoices):
#     ANIMAL = "ANIMAL"
#     FLOWER = "FLOWER"
#     PEOPLE = "PEOPLE"
#     OTHER = "OTHER"
#
#
# class Image(models.Model):
#     title = models.CharField(max_length=255)
#     description = models.CharField(max_length=1000)
#     category = models.CharField(max_length=255, choices=ImageCategory.choices, null=True)
#     image = models.ImageField(upload_to='gallery/')
#     credit = models.CharField(max_length=255)
#     date_taken = models.DateField()
#     file_name = models.CharField(max_length=255, null=True)
#
#     def update_metadata(self):
#         self.image.file.blob.metadata = {
#             "Category": self.category,
#             "Credit": self.credit,
#             "Date Taken": str(self.date_taken.isoformat())
#         }
#         self.image.file.blob.patch()
#
#     def __str__(self) -> str:
#         return self.title
