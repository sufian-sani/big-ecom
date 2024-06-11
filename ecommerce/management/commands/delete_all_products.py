# data_management/management/commands/delete_all_data.py
from django.core.management.base import BaseCommand
from ecommerce.models.product_models import Product

class Command(BaseCommand):
    help = 'Delete all data from the Product model'
    def handle(self, *args, **kwargs):
        Product.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('All product data deleted successfully'))