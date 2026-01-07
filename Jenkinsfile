pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "piyushpriyadarshi329/node-jenkins-app"
    DOCKER_TAG   = "latest"
  }

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main',
            url: 'https://github.com/Piyushpriyadarshi329/jenkins.git'
      }
    }

    stage('Build Image') {
      steps {
        sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
      }
    }

    stage('Push Image to Docker Hub') {
      steps {
                      withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerhubpwd', usernameVariable: 'dockerhubusename')]){
 {
          sh '''
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push $DOCKER_IMAGE:$DOCKER_TAG
          '''
        }
      }
    }

    stage('Run Container') {
      steps {
        sh '''
          docker stop node-app || true
          docker rm node-app || true
          docker run -d -p 4001:4001 --name node-app $DOCKER_IMAGE:$DOCKER_TAG
        '''
      }
    }
  }
}
