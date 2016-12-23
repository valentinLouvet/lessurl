from django.shortcuts import render, get_object_or_404, redirect
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import ReducedUrl
from .serializer import ReducedUrlSerializer
from .urlencoder import *




@api_view(['GET', 'POST'])
def reducedUrl_list(request):
    """
        List all ReducedUrls, or create a new ReducedUrl.
    """

    if request.method == 'GET':
        reducedUrl = ReducedUrl.objects.all()
        serializer = ReducedUrlSerializer(reducedUrl, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ReducedUrlSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def reducedUrl_detail(request, code):
    """
    Retrieve, update or delete a ReducedUrl instance.
    """
    try:
        reducedUrl = ReducedUrl.objects.get(shortUrl=code)
    except ReducedUrl.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        reducedUrl.nb_request += 1
        reducedUrl.save()
        serializer = ReducedUrlSerializer(reducedUrl)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ReducedUrlSerializer(reducedUrl, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        reducedUrl.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# Create your views here.
