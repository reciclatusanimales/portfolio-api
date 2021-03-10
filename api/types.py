from graphene_django import DjangoObjectType
import graphene
from .models import Project, Stack

class ProjectType(DjangoObjectType):
    image_url = graphene.String()

    def resolve_image_url(self, info):
        return info.context.build_absolute_uri(self.image.url)

    class Meta:
        model = Project

class StackType(DjangoObjectType):
    class Meta:
        model = Stack

    def resolve_image(self, info, **kwargs):
        return info.context.build_absolute_uri(self.image.url)