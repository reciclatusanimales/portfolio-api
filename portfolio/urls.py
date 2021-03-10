from django.contrib import admin
from django.urls import path, include

from api import views
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from django.views.decorators.csrf import csrf_exempt

from graphene_django.views import GraphQLView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('summernote/', include('django_summernote.urls')),

    url(r'^api/projects/$', views.projects_list),
    url(r'^api/projects/(?P<pk>[0-9]+)$', views.projects_detail),
    
    url(r'^api/stacks/$', views.stacks_list),

    url(r'^api/blogs/$', views.blogs_list),
    url(r'^api/blogs/(?P<pk>[0-9]+)$', views.blogs_detail),
    
    url(r'^api/jobs/$', views.jobs_list),
    url(r'^api/jobs/(?P<pk>[0-9]+)$', views.jobs_detail),

    path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=True))),

    path('send-email', csrf_exempt(views.send_email), name="send_email")
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)