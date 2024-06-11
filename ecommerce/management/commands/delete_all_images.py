# data_management/management/commands/delete_all_data.py
from django.core.management.base import BaseCommand
from ecommerce.models.product_models import ProductImage

class Command(BaseCommand):
    help = 'Delete all data from the Product image model'
    def handle(self, *args, **kwargs):
        ProductImage.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('All product images data deleted successfully'))