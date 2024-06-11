# from django.shortcuts import render
from django.views.generic import ListView
from ..models.product_models import Product

# Create your views here.

class ProductsListView(ListView):
    model = Product
    template_name = 'products/products.html'
    # template_name = 'test/products.html'
    context_object_name = 'products'

    def get_queryset(self):
        queryset = Product.objects.all().prefetch_related('productvariant_set', 'productspecification_set','productimage_set')
        # breakpoint()
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # breakpoint()
        return context