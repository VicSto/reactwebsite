pipeline {
    agent none
    stages {
        stage('Build') {
            agent { 
                label 'gatewaywebhost' 
            }
            options {
                // Timeout counter starts BEFORE agent is allocated
                timeout(time: 5, unit: 'SECONDS')
            }
            steps {
                echo 'Building..'
                def dockerImage = docker.build("reactwebsite/reactwebsite:${env.BUILD_TAG}")
                archiveArtifacts    artifacts: dockerImage,
                                    fingerprint: true,
                                    onlyIfSuccessful: true
            }       
        }
        stage('Deploy') {
            agent { label 'gatewaywebhost'}
            steps {
                echo 'Deploying....'
            }
        }
    }
}