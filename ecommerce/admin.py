from django.contrib import admin
from .models.product_models import Color, Size, Category, Product, ProductVariant, ProductImage, ProductSpecification, ProductFeature
# Register your models here.



admin.site.register(Color)
admin.site.register(Size)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(ProductVariant)
admin.site.register(ProductImage)
admin.site.register(ProductSpecification)
admin.site.register(ProductFeature)