from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Project, Blog, Job
from .serializers import *

@api_view(['GET'])
def projects_list(request):
    """
        List projects.
    """
    print(request)
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        projects = Project.objects.all().order_by('order')
        page = request.GET.get('page', 1)
        paginator = Paginator(projects, 20)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = ProjectSerializer(data,context={'request': request} ,many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()
        # print(serializer.data)
        return Response(serializer.data)



@api_view(['GET'])
def projects_detail(request, pk):
    """
        Retrieve a project by id/pk.
    """
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProjectSerializer(project,context={'request': request})
        return Response(serializer.data)


@api_view(['GET'])
def blogs_detail(request, pk):
    """
        Retrieve a blog by id/pk.
    """
    try:
        project = Blog.objects.get(pk=pk)
    except Blog.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BlogSerializer(project,context={'request': request})
        return Response(serializer.data)


@api_view(['GET'])
def blogs_list(request):
    """
        List blogs.
    """
    print(request)
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        blogs = Blog.objects.all().order_by('id')
        page = request.GET.get('page', 1)
        paginator = Paginator(blogs, 10)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = BlogSerializer(data,context={'request': request} ,many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()
        # print(serializer.data)
        return Response(serializer.data)


@api_view(['GET'])
def jobs_list(request):
    """
        List jobs
    """
    print(request)
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        jobs = Job.objects.all().order_by('id')
        page = request.GET.get('page', 1)
        paginator = Paginator(jobs, 10)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = JobSerializer(data,context={'request': request} ,many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()
        # print(serializer.data)
        return Response(serializer.data)


@api_view(['GET'])
def jobs_detail(request, pk):
    """
        Retrieve a job by id/pk.
    """
    try:
        job = Job.objects.get(pk=pk)
    except Job.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProjectSerializer(job,context={'request': request})
        return Response(serializer.data)