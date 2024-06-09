from django.views.generic.detail import DetailView
from ..models.product_models import *
class ProductView(DetailView):
    model = Product
    template_name = 'product/product.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # context['greeting'] = 'Welcome to product page'
        # breakpoint()
        return context