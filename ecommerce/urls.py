from django.urls import path
from ecommerce.views import *

app_name = 'ecommerce'

urlpatterns = [
    path('products', products.ProductsListView.as_view(), name='products'),
    path('product', product.ProductView.as_view(), name='product')
]
