pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        NETLIFY_SITE_ID = ''
        NETLIFY_AUTH_TOKEN = credentials('')
    }

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                bat 'set CI=true && npm test'
            }
        }
        stage('Deploy') {
            steps {
                bat "npx -y netlify-cli deploy --site %NETLIFY_SITE_ID% --auth %NETLIFY_AUTH_TOKEN% --prod --dir build"
            }
        }
    }
}
