from rest_framework import serializers
from .models import Project, Blog, Job

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('pk','title', 'subtitle', 'description', 'image', 'github','url','featured')

class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = ('pk','title', 'description', 'category', 'image', 'content','slug','created_at')

class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Job
        fields = ('pk','company', 'position', 'date')