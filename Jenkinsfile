
pipeline {
  agent any
  environment {
    DOCKER_COMPOSE_VERSION = '1.29.2'
  }
  stages {
    stage('Install Dependencies') {
        agent {
            docker {
                image 'node:16-alpine'
            }
        }
        steps {
                dir('client') {
                sh 'npm install'
            }
        }
    }
    stage('Run Jest Tests') {
        agent {
            docker {
                image 'node:16-alpine'
            }
        }
        steps {
            sh 'cd client && npm run test'
        }
    }
    stage('Build Docker Images') {
      steps {
        script {
          docker.build('client', './client')
          docker.build('server', './server')
        }
      }
    }
    stage('Run Docker Containers with Docker Compose') {
      steps {
        sh 'curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o docker-compose'
        sh 'chmod +x docker-compose'
        sh './docker-compose up -d'
      }
    }
    stage('Stop Docker Containers with Docker Compose') {
      steps {
        sh './docker-compose down'
      }
    }
  }
  post {
    always {
      sh 'docker images -q | xargs docker rmi -f || true'
    }
  }
}




// pipeline {
//     agent any
//     stages {
//         stage('Checkout') {
//             steps {
//                 git branch: 'main', url: 'https://github.com/BS-PMC-2023/BS-PMC-2023-Team25.git'
//             }
//         }
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//                 sh 'npm run build'
//             }
//         }
//         stage('Test') {
//             steps {
//                 sh 'npm test'
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 sh 'npm run deploy'
//             }
//         }
//     }
// }

// pipeline {
//     agent any 
//     stages {
//         stage('Stage 1') {
//             steps {
//                 echo 'Hello world!' 
//             }
//         }
//     }
// }
