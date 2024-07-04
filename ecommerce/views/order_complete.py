from django.views.generic import TemplateView

class OrderCompleteView(TemplateView):
    template_name = "order-complete/order.html"