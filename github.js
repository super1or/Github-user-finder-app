class GitHub {
    constructor() {
        this.client_id = 'b5e19a4f81aedd576f7e',
        this.client_secret = '4c35b54d9cf32b85b0d275c285bdd07509f0286d';    
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}

