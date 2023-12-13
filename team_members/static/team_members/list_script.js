document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchBox");
    const memberList = document.querySelectorAll(".team-member");

    searchInput.addEventListener("keyup", function(e) {
        const searchTerm = e.target.value.toLowerCase();
        memberList.forEach(function(member) {
            const memberName = member.textContent.toLowerCase();
            if (memberName.includes(searchTerm)) {
                member.style.display = '';
            } else {
                member.style.display = 'none';
            }
        });
    });
});

function confirmDelete(memberId) {
    if(confirm("Are you sure you want to delete this team member?")) {
        window.location.href = `/delete/${memberId}/`;
    }
}
