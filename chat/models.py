from django.db import models

class Message(models.Model):
    text = models.TextField()
    sender = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender}: {self.text[:30]}"
