from graphene_django import DjangoObjectType
import graphene
from .models import Project, Stack

class ProjectType(DjangoObjectType):
    image_url = graphene.String()
    thumbnail_url = graphene.String()

    def resolve_image_url(self, info):
        if self.image:
            return info.context.build_absolute_uri(self.image.url)
        return ""

    def resolve_thumbnail_url(self, info):
        if self.thumbnail:
            return info.context.build_absolute_uri(self.thumbnail.url)
        return ""

    class Meta:
        model = Project

class StackType(DjangoObjectType):
    class Meta:
        model = Stack

    def resolve_image(self, info, **kwargs):
        return info.context.build_absolute_uri(self.image.url)