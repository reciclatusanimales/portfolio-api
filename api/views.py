from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Project, Blog, Job, Stack
from .serializers import *

from django.http import JsonResponse
import json
from .utils import api_response
import requests
import time
from .constants import contact_template_slug, email_sender_url, email_sender_api_key
import urllib3
http = urllib3.PoolManager()

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
def stacks_list(request):
    """
        List stacks.
    """
    print(request)
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        stacks = Stack.objects.filter(featured=True).order_by('order')
        page = request.GET.get('page', 1)
        paginator = Paginator(stacks, 20)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = StackSerializer(data,context={'request': request} ,many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()
        # print(serializer.data)
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


def send_email(request):
    json_response = {'success': False}

    data = json.loads(request.body.decode("utf-8"))

    if('subject' not in data): 
        json_response['msg'] = 'El campo \'subject\' no puede estar vacío' 
        return api_response(json_response)
    elif('email' not in data): 
        json_response['msg'] = 'El campo \'email\' no puede estar vacío' 
        return api_response(json_response)
    elif('content' not in data): 
        json_response['msg'] = 'El campo \'content\' no puede estar vacío' 
        return api_response(json_response)

    name = data['name']
    email = data['email']
    subject = data['subject']
    content = data['content']

    attempt_num = 0
    while attempt_num < 1:       
        body = {'name': name, 'from': email, 'subject': subject, 'content': content, 'template_slug': contact_template_slug, 'type': 'contact'}
        headers = {'Content-Type': 'application/json', 'api-key': email_sender_api_key}
        response = http.request(
            'POST',
            email_sender_url,
            body=json.dumps(body),
            headers=headers
        )
        if response.status == 200:
            data = json.loads(response.data.decode('utf-8'))
            return JsonResponse(data)
        else:
            attempt_num += 1
            time.sleep(5) 
    
    json_response["msg"] = "Hubo un problema con la solicitud."
    
    return JsonResponse(json_response)
