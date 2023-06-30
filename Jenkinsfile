pipeline {
  agent any
  environment {
    test_var='test var'
  }
  stages {
    stage('log') {
      steps {
        echo 'starting build'
      }
    }
    stage('build') {
      sheps {
        sh 'env var is $test_var'
      }
    }
  }
}
