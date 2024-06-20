from django.views.generic.detail import DetailView
from django.shortcuts import get_object_or_404
from ..models.product_models import Product
class ProductView(DetailView):
    model = Product
    template_name = 'product/product.html'
    # template_name = 'test/product.html'
    context_object_name = 'product'

    # def get_object(self, queryset=None):
    #     # slug = Product.objects.get(self.kwargs.get('id'))
    #     slug = 'slugsldkd'
    #     return slug

    def get_queryset(self):
        queryset = Product.objects.prefetch_related('productvariant_set', 'productspecification_set','productimage_set')
        # queryset = super().get_queryset()
        # breakpoint()
        return queryset

    def get_object(self):
        queryset = self.get_queryset()
        return get_object_or_404(queryset, pk=self.kwargs['pk'])

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # context['greeting'] = 'Welcome to product page'
        # breakpoint()
        return context
