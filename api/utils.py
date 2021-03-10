from django.http import JsonResponse

def api_response(json_object, status=200):
    return JsonResponse(json_object, safe=False, json_dumps_params={'ensure_ascii': False}, status=status)

