pipeline {
    agent none
    stages {
        stage('Build') {
            agent gatewaywebhost
            options {
                // Timeout counter starts BEFORE agent is allocated
                timeout(time: 5, unit: 'SECONDS')
            }
            steps {
                echo 'Building..'
                def dockerImage = docker.build "reactwebsite/reactwebsite:${env.BUILD_TAG}"
                archiveArtifacts    artifacts: dockerImage,
                                    fingerprint: true,
                                    onlyIfSuccessful: true
            }       
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}