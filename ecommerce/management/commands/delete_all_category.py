# data_management/management/commands/delete_all_data.py
from django.core.management.base import BaseCommand
from ecommerce.models.product_models import Category

class Command(BaseCommand):
    help = 'Delete all data from the Category model'
    def handle(self, *args, **kwargs):
        Category.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('All category data deleted successfully'))