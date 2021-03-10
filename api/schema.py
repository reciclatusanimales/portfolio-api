import graphene
from .types import ProjectType, StackType
from .models import Project, Stack

class Query(graphene.ObjectType):
    all_projects = graphene.List(ProjectType)
    get_project = graphene.Field(ProjectType, id=graphene.Int())

    all_stacks = graphene.List(StackType)
    
    def resolve_all_projects(self, info):
        return Project.objects.all()

    def resolve_get_project(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            return Project.objects.get(pk=id)
        return None
    
    def resolve_all_stacks(self, info):
        return Stack.objects.all()

schema = graphene.Schema(query=Query)