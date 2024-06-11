# management/commands/seed_images.py
import os
import random
from django.core.management.base import BaseCommand
from django.core.files import File
from ecommerce.models.product_models import Product, ProductImage

class Command(BaseCommand):
    help = 'Seeds the database with images for products'

    def handle(self, *args, **kwargs):
        image_folder = 'ecommerce/shop/'
        products = Product.objects.all()
        for product in products:
            # Pick a random number of images to associate with the product
            num_images = random.randint(1, 5)  # Adjust as needed
            for _ in range(num_images):
                # Pick a random image file from the image folder
                image_file = random.choice(os.listdir(image_folder))
                # Create Image object and associate it with the product
                image_obj = ProductImage(product=product)
                # Open the image file and save it to the ImageField
                with open(os.path.join(image_folder, image_file), 'rb') as f:
                    image_obj.image.save(image_file, File(f))
                image_obj.save()
        self.stdout.write(self.style.SUCCESS('Images seeded successfully'))
