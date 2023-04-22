pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://<Jenkins_token>@github.com/BS-PMC-2023/BS-PMC-2023-Team25.git',
                        credentialsId: 'Git_key'
                    ]]
                ])
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        always {
            junit '**/test-results.xml'
            archiveArtifacts 'build/**'
        }
    }
}

