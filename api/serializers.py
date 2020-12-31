from rest_framework import serializers
from .models import Project, Category, Blog, Job

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('pk','title', 'subtitle', 'description', 'image', 'github','url','featured')

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Blog
        fields = ('pk','title', 'description', 'category', 'image', 'content','slug','created_at')

class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Job
        fields = ('pk','company', 'position', 'date')