from django.urls import path
from . import views
from .views import TeamMemberListView, TeamMemberCreateView, TeamMemberUpdateView

urlpatterns = [
    path('', TeamMemberListView.as_view(), name='team_member_list'),
    path('new/', TeamMemberCreateView.as_view(), name='team_member_new'),
    path('edit/<int:pk>/', TeamMemberUpdateView.as_view(), name='team_member_edit'),
    path('delete/<int:member_id>/', views.delete_team_member, name='team_member_delete'),
]
