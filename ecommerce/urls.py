from django.urls import path, include
from .views import ProductsListView

app_name = 'ecommerce'

urlpatterns = [
    path('products', ProductsListView.as_view(), name='products')
]
