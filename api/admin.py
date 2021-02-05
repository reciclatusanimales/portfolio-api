from django.contrib import admin
from .models import Project, Category, Blog, Job, Stack
from django_summernote.admin import SummernoteModelAdmin


class ProjectAdmin(SummernoteModelAdmin):
    summernote_fields = ['description']

class BlogAdmin(SummernoteModelAdmin):
    summernote_fields = ['content']

admin.site.register(Project, ProjectAdmin)
admin.site.register(Stack)
admin.site.register(Category)
admin.site.register(Blog, BlogAdmin)
admin.site.register(Job)