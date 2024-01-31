 #!groovy
import groovy.json.JsonSlurperClassic
node {
    def BUILD_NUMBER=env.BUILD_NUMBER
    def RUN_ARTIFACT_DIR="tests/${BUILD_NUMBER}"
    def SFDC_USERNAME

    def HUB_ORG='durgamdp@gmail.com'
    def SFDC_HOST = env.SFDC_HOST_DH
    def JWT_KEY_CRED_ID = env.JWT_CRED_ID_DH
    def CONNECTED_APP_CONSUMER_KEY='3MVG9fe4g9fhX0E6ikPa9OqL_5tOrlcKsayqD0zOMUEAFbqfehOScEeI3uYe___vKfRfocBpi0_74TP.KbgJc'
    println 'KEY IS' 
    println JWT_KEY_CRED_ID
    println HUB_ORG
    println SFDC_HOST
    println CONNECTED_APP_CONSUMER_KEY
    def toolbelt = tool 'toolbelt'
    stage('checkout source') {
        //When running in multi-branch job, one must issue this command
        checkout scm
    }
    withCredentials([file(credentialsId: JWT_KEY_CRED_ID, variable: 'jwt_key_file')]) {
        stage('Deploye Code') {
            if (isUnix()) {
                rc = sh returnStatus: true, script: "${toolbelt}/sfdx force:auth:jwt:grant --clientid ${CONNECTED_APP_CONSUMER_KEY} --username ${HUB_ORG} --jwtkeyfile ${jwt_key_file} --setdefaultdevhubusername --instanceurl ${SFDC_HOST}"
            }else{
                 rc = bat returnStatus: true, script: "\"${toolbelt}/sfdx\" force:auth:jwt:grant --clientid ${CONNECTED_APP_CONSUMER_KEY} --username ${HUB_ORG} --jwtkeyfile \"${jwt_key_file}\" --setdefaultdevhubusername --instanceurl ${SFDC_HOST}"
            }
          if (rc != 0) { error 'hub org authorization failed' }
println rc
// need to pull out assigned username
	
if (isUnix()) {
	rmsg = sh returnStdout: true, script: "${toolbelt}/sfdx force:source:deploy --manifest manifest/package.xml -u ${HUB_ORG}"
}else{
	rmsg = bat returnStdout: true, script: "\"${toolbelt}/sfdx\" force:source:deploy --manifest manifest/package.xml -u ${HUB_ORG}"
	}			  
   printf rmsg
   println('Hello from a Job DSL script!')
   println(rmsg)
        }
    }
}