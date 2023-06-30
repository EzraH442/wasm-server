pipeline {
  agent any
  stages {
    stage('log') {
      steps {
        echo 'starting build'
      }
    }
    stage('build dev') {
      when { branch 'dev' }
      steps {
        sh 'docker build -t ezraweb/wasm-server:dev . '
      }
    }
    stage('build main') {
      when { branch 'main' }
      steps {
        sh 'docker build -t ezraweb/wasm-server:latest . '
      }
    }
    stage('deploy main') {
      when { branch 'main' }
      steps {
        sh 'docker compose -p ezraweb_v3_full create --force-recreate wasm-server'
        sh 'docker compose -p ezraweb_v3_full start wasm-server'
      }
    }
  }
}
