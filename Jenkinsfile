pipeline {
    agent none
    stages {
        stage('Build & Deploy') {
            agent { 
                label 'gatewaywebhost' 
            }
            options {
                // Timeout counter starts BEFORE agent is allocated
                timeout(time: 300, unit: 'SECONDS')
            }
            steps {
                echo 'Building..'
                sh "docker-compose build && \
                docker-compose up --detach --force-recreate --remove-orphans --abort-on-container-exit --exit-code-from nginx-react && \
                docker-compose down"
            }       
        }
    }
}