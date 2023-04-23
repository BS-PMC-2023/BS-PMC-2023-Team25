pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/BS-PMC-2023/BS-PMC-2023-Team25.git'
      }
    }
    stage('Build') {
      steps {
        sh './gradlew build'
      }
    }
    stage('Test') {
      steps {
        sh './gradlew test'
      }
    }
    stage('Deploy') {
      steps {
        sh './deploy.sh'
      }
    }
  }
}

