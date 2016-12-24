from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import permissions
from rest_framework import generics
from django.http import Http404


from rest_framework_jwt.authentication import JSONWebTokenAuthentication

import logging
logger = logging.getLogger(__name__)



from django.contrib.auth.models import User, AnonymousUser


from .models import ReducedUrl
from .serializer import ReducedUrlSerializer, UserSerializer



class ReducedUrlList(APIView):
    """
    List all ReducedUrls, or create a new ReducedUrl.
    """
    permission_classes = (permissions.AllowAny,)

    def perform_create(self, serializer):
        logger.error("test")
        serializer.save(owner=self.request.user)

    def get(self, request, format=None):
        reducedUrl = ReducedUrl.objects.all()
        serializer = ReducedUrlSerializer(reducedUrl, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ReducedUrlSerializer(data=request.data)

        if serializer.is_valid():
            logger.error(request.user)
            logger.error(type(request.user))
            if request.auth:
                serializer.save(owner=request.user)
            else:
                logger.error("test if")
                serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReducedUrlDetail(APIView):
    """
    Retrieve, update or delete a ReducedUrl instance.
    """
    permission_classes = (permissions.AllowAny,)

    def get_object(self, code):
        try:
            return ReducedUrl.objects.get(shortUrl=code)
        except ReducedUrl.DoesNotExist:
            raise Http404

    def get(self, request, code, format=None):
        reducedUrl = self.get_object(code)
        reducedUrl.nb_request += 1
        reducedUrl.save()
        serializer = ReducedUrlSerializer(reducedUrl)
        return Response(serializer.data)

    def put(self, request, code, format=None):
        reducedUrl = self.get_object(code)
        serializer = ReducedUrlSerializer(reducedUrl, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, code, format=None):
        reducedUrl = self.get_object(code)
        reducedUrl.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UserReducedUrls(APIView):
    """Retrieve all reducedUrls linked to the authenticated user"""

    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        reducedUrl = request.user.reducedUrls
        serializer = ReducedUrlSerializer(reducedUrl, many=True)
        return Response(serializer.data)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer




@api_view(['POST'])
def create_auth(request):
    serialized = UserSerializer(data=request.data)
    if serialized.is_valid():
        User.objects.create_user(
            request.data['username'],
            request.data['email'],
            request.data['password'],
        )
        return Response(serialized.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)