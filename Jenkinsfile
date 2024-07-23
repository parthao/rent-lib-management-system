pipeline {
    agent any
    tools {nodejs "Nodejs"}
    stages {
        stage('Fix Permissions') {
            steps {
                sh 'sudo chown -R jenkins:jenkins "/var/lib/jenkins/workspace/React Rent and Library Management"'
                sh 'sudo chmod -R 755 "/var/lib/jenkins/workspace/React Rent and Library Management"'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install --legacy-peer-deps'
            }
        }
        stage('Deliver') {
            steps {
                sh 'chmod -R +rwx ./jenkins/script/deliver.sh'
                sh './jenkins/script/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
            }
        }
    }
}