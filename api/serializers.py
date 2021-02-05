from rest_framework import serializers
from .models import Project, Category, Blog, Job
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)

class ProjectSerializer(TaggitSerializer, serializers.ModelSerializer):
    stack = TagListSerializerField()

    class Meta:
        model = Project
        fields = ('pk','title', 'subtitle', 'description', 'content', 'image', 'github','url','featured', 'stack')

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