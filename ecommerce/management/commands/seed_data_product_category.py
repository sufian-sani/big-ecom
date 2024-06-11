import random
from django.core.management.base import BaseCommand
from ecommerce.models.product_models import Product, Category

class Command(BaseCommand):
    help = 'Generates fake data for testing'

    def handle(self, *args, **kwargs):
        # Generate categories
        categories = ['Electronics', 'Fashion', 'Clothing', 'Sports', 'Home Appliances']
        for category_name in categories:
            Category.objects.create(name=category_name)

        # Generate products
        for _ in range(20):  # Generate 20 fake products
            name = f'Product {random.randint(1, 100)}'
            price = round(random.uniform(10, 500), 2)
            description = f'This is a description for {name}'
            product = Product.objects.create(name=name, price=price, description=description)

            # Assign random categories to the product
            for _ in range(random.randint(1, 2)):  # Assign 1 to 3 random categories to each product
                category = random.choice(Category.objects.all())
                product.categories.add(category)
        self.stdout.write(self.style.SUCCESS('product seeded successfully'))