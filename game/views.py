from django.http import HttpResponse

def index(request):
    line1 = '<h1 style="text-align:center">codeforces</h1>'
    line3 = '<hr>'
    line2 = '<img src = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-f5291b3258502f25a845ee5950cc19f3_180x120.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647762710&t=0df21d6c0cc4d3afd16fd19dd025387b" width = 800>'
    return HttpResponse(line1+line3+line2)
def begin(request):
    line1 = '<h1 style = "text-align:center">游戏界面</h1>'
    line2 = '<img src = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.wangt.cc%2Fdownload%2Fpic_router.php%3Fpath%3Dhttps%3A%2F%2Ftva1.sinaimg.cn%2Flarge%2F007S8ZIlgy1giflxxdpm6j318a0qcdle.jpg&refer=http%3A%2F%2Fpic.wangt.cc&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647764013&t=b7f68d227d7309c715443d04ab6633ee" width = 2000>'
    return HttpResponse(line1+line2)
