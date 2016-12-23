from django.conf.urls import url
from reducer import views

urlpatterns = [
    url(r'^reducer/$', views.reducedUrl_list),
    url(r'^reducer/(?P<code>\w+)/$', views.reducedUrl_detail),
]