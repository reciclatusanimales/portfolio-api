from django.contrib import admin
from .models import Project, Category, Blog, Job, Stack
from django_summernote.admin import SummernoteModelAdmin

class StackAdmin(admin.ModelAdmin):
    list_display = ['name', 'order', 'featured']

class ProjectAdmin(SummernoteModelAdmin):
    list_display = ['title', 'subtitle', 'url', 'order', 'stack_list', 'featured']
    summernote_fields = ['description']

    def get_queryset(self, request):
        return super().get_queryset(request).prefetch_related('stack')
    
    def stack_list(self, obj):
        return ", ".join(o.name for o in obj.stack.all())

class BlogAdmin(SummernoteModelAdmin):
    summernote_fields = ['content']

admin.site.register(Project, ProjectAdmin)
admin.site.register(Stack, StackAdmin)
admin.site.register(Category)
admin.site.register(Blog, BlogAdmin)
admin.site.register(Job)