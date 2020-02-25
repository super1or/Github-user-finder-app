class Ui {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Display profile
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid rounded mx-auto" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_black" class="btn btn-primary btn-block mb-3 mt-3">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary mb-2">Public Repos: ${user.pablic_repos}</span>
                    <span class="badge badge-secondary mb-2">Public Gists: ${user.pablic_gists}</span>
                    <span class="badge badge-success mb-2">Followers: ${user.followers}</span>
                    <span class="badge badge-info mb-2">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Memver Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    // Show alert message
    showAlert(message, className) {
        // Clear any remaining alerts
        this.clearAlert();
        // Add a div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert Alert
        container.insertBefore(div, search);

        // Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
    
    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();            
        }
    }


    // Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}