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
                sh "docker-compose up --detach --force-recreate --wait"
            }       
        }
    }
}