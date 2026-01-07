pipeline {
  agent any

  stages {
   stage('Checkout') {
  steps {
    git branch: 'main',
        url: 'https://github.com/Piyushpriyadarshi329/jenkins.git'
  }
}

    stage('Build Image') {
      steps {
        sh 'docker build -t node-jenkins-app .'
      }
    }

    stage('Run Container') {
      steps {
        sh '''
          docker stop node-app || true
          docker rm node-app || true
          docker run -d -p 4001:4001 --name node-app node-jenkins-app
        '''
      }
    }
  }
}
