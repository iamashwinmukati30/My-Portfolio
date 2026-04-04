from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from .models import Contact
from .serializers import ContactSerializer


@api_view(['POST'])
def contact_api(request):

    # 🛑 Spam protection
    if request.data.get('honeypot'):
        return Response({"message": "Spam detected"}, status=400)

    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        data = serializer.validated_data

        try:
           send_mail(
    subject=f"📩 {data['subject']} | Portfolio Contact",
    message=f"""
You have received a new message from your portfolio:

👤 Name: {data['name']}
📧 Email: {data['email']}

📝 Message:
{data['message']}
""",
    from_email='mukatiashwin30@gmail.com',
    recipient_list=['mukatiashwin30@gmail.com'],
    fail_silently=False,
)
        except Exception as e:
            return Response({"message": str(e)}, status=500)

        return Response({
            "message": "Message sent successfully! I will get back to you soon."
        })

    return Response({
        "message": "Failed to send message."
    }, status=400)