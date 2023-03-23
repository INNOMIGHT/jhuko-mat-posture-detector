from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
import os

@api_view(('GET',))
# @renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def runner(request):
    message = "Program ran and gave the results."
    os.system('pip install -r ../requirements.txt')
    response_given = os.system('python ./posture_image.py')
    return Response(response_given, status=200)