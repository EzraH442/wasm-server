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
      steps {
        sh 'echo "env var is $test_var"'
      }
    }
  }
}
