from rest_framework import serializers
from .models import Project, Category, Blog, Job, Stack


class StackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stack
        fields = '__all__'
        ordering = ['order']

class ProjectSerializer(serializers.ModelSerializer):
    stack = StackSerializer(many=True, read_only=True)
    
    class Meta:
        model = Project
        fields = ('pk','title', 'subtitle', 'description', 'content', 'image', 'github','url','featured', 'stack', 'order')
        ordering = ['order']

    def to_representation(self, instance):
        response = super(ProjectSerializer, self).to_representation(instance)
        if instance.image:
            response['imageName'] = str(instance.image)
        return response

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