from django.urls import path
from ecommerce.views import *

app_name = 'ecommerce'

urlpatterns = [
    path('products/', products.ProductsListView.as_view(), name='products'),
    path('product/<int:pk>/', product.ProductView.as_view(), name='product'),
    path('cart/', cart.CartView.as_view(), name='cart'),
    path('checkout/', checkout.CheckoutView.as_view(), name='checkout'),
    path('order-complete/', order_complete.OrderCompleteView.as_view(), name='order_complete'),
]
