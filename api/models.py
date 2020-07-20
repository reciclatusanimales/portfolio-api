from django.db import models
from django.utils.text import slugify
from taggit.managers import TaggableManager

# Projects
class Project(models.Model):
    title = models.CharField(max_length=255, unique=True)
    subtitle = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    url = models.URLField()
    featured = models.BooleanField(default=True)    
    stack = TaggableManager(blank=True)

    def __str__(self):
        return self.title

# Jobs
class Job(models.Model):
    company = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    position = models.CharField(max_length=255, blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    stack = TaggableManager(blank=True)

    def __str__(self):
        return self.company

# Categories
class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name

# Blogs
class Blog(models.Model):
    category = models.ForeignKey('Category', null=True, on_delete=models.SET_NULL)
    title = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='blogs/', blank=True, null=True)
    slug = models.SlugField(max_length=50, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug and self.title:
            self.slug = slugify(self.title)
        super(Blog, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
