from django.contrib import messages
from django.shortcuts import redirect, render
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import TeamMember
from .forms import TeamMemberForm

class TeamMemberListView(ListView):
    model = TeamMember
    template_name = 'team_members/list.html'

class TeamMemberCreateView(CreateView):
    model = TeamMember
    form_class = TeamMemberForm
    template_name = 'team_members/add_edit.html'
    success_url = reverse_lazy('team_member_list')

class TeamMemberUpdateView(UpdateView):
    model = TeamMember
    form_class = TeamMemberForm
    template_name = 'team_members/add_edit.html'
    success_url = reverse_lazy('team_member_list')

def delete_team_member(request, member_id):
    member = TeamMember.objects.get(id=member_id)
    member.delete()
    messages.success(request, 'Team member deleted successfully.')
    return redirect(reverse_lazy('team_member_list'))
