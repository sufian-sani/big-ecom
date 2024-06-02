from django.urls import path, include
from .views import *

app_name = 'ecommerce'

urlpatterns = [
    path('products', ProductsListView.as_view(), name='products'),
    path('product', ProductView.as_view(), name='product')
]
