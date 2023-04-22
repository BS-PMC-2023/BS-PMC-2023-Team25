pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://<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>@github.com/BS-PMC-2023/BS-PMC-2023-Team25.git',
                        credentialsId: 'github-access-token'
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

