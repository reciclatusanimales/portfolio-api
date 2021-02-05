from rest_framework import serializers
from .models import Project, Category, Blog, Job

class ProjectSerializer(serializers.ModelSerializer):
    stack = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ('pk','title', 'subtitle', 'description', 'content', 'image', 'github','url','featured', 'stack')

    def get_stack(self, obj):
        return [{ 'id':tag.id, 'slug': tag.slug, 'name': tag.name } for tag in obj.stack.all()]

    

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