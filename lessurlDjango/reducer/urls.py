from django.conf.urls import url
from reducer import views
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import include
from rest_framework_jwt.views import obtain_jwt_token




urlpatterns = [
    url(r'^reducer/$', views.ReducedUrlList.as_view()),
    url(r'^reducer/(?P<code>\w+)/$', views.ReducedUrlDetail.as_view()),
    url(r'^users/$', views.UserList.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^users/register', views.create_auth),
    url(r'^stats', views.UserReducedUrls.as_view()),
    url(r'^login/', obtain_jwt_token),

]