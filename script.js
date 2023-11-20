$(document).ready(function () {
    window.calculateRisk = function () {
        
        const governanceTeam = $("input[name='governanceTeam']:checked").val();
        const governanceFramework = $("input[name='governanceFramework']:checked").val();
        const complianceEnsure = $("input[name='complianceEnsure']:checked").val();
        const complianceAssessments = $("input[name='complianceAssessments']:checked").val();
        const changesTested = $("input[name='changesTested']:checked").val();
        const procedureCurrent = $("input[name='procedureCurrent']:checked").val();
        const thirdParty = $("input[name='thirdParty']:checked").val();

        
        const governanceYesCount = [governanceTeam, governanceFramework, complianceEnsure, complianceAssessments, changesTested, procedureCurrent, thirdParty].filter(val => val === 'yes').length;
        const governanceNoCount = [governanceTeam, governanceFramework, complianceEnsure, complianceAssessments, changesTested, procedureCurrent, thirdParty].filter(val => val === 'no').length;

        
        const governanceRiskScore = calculateRiskScore(governanceYesCount, governanceNoCount);
        const governanceRiskLevel = determineRiskLevel(governanceRiskScore);

        
        alert(`Governance and Compliance Risk Score: ${governanceRiskScore} (${governanceRiskLevel})`);

        
        const governanceResultText = `Governance and Compliance Yes: ${governanceYesCount}, No: ${governanceNoCount}\nGovernance and Compliance Risk Score: ${governanceRiskScore} (${governanceRiskLevel})`;

        
        const confidentialityIntegrity = $("input[name='confidentialityIntegrity']:checked").val();
        const securityProtocolUpdate = $("input[name='securityProtocolUpdate']:checked").val();
        const userAuthentication = $("input[name='userAuthentication']:checked").val();
        const accessBasedOnRoles = $("input[name='accessBasedOnRoles']:checked").val();
        const identifyAddressVulnerabilities = $("input[name='identifyAddressVulnerabilities']:checked").val();
        const vulnerabilityScans = $("input[name='vulnerabilityScans']:checked").val();
        const dataEncryption = $("input[name='dataEncryption']:checked").val();
        const encryptionStandards = $("input[name='encryptionStandards']:checked").val();
        const networkMonitoring = $("input[name='networkMonitoring']:checked").val();

        
        const securityYesCount = [confidentialityIntegrity, securityProtocolUpdate, userAuthentication, accessBasedOnRoles, identifyAddressVulnerabilities, vulnerabilityScans, dataEncryption, encryptionStandards, networkMonitoring].filter(val => val === 'yes').length;
        const securityNoCount = [confidentialityIntegrity, securityProtocolUpdate, userAuthentication, accessBasedOnRoles, identifyAddressVulnerabilities, vulnerabilityScans, dataEncryption, encryptionStandards, networkMonitoring].filter(val => val === 'no').length;

        
        const securityRiskScore = calculateRiskScore(securityYesCount, securityNoCount);
        const securityRiskLevel = determineRiskLevel(securityRiskScore);

        
        alert(`Security Risk Score: ${securityRiskScore} (${securityRiskLevel})`);

       
        const securityResultText = `Security Yes: ${securityYesCount}, No: ${securityNoCount}\nSecurity Risk Score: ${securityRiskScore} (${securityRiskLevel})`;

        
        const securityIncidentProtocol = $("input[name='securityIncidentProtocol']:checked").val();
        const quickResponseMitigation = $("input[name='quickResponseMitigation']:checked").val();
        const softwarePatchesUpdates = $("input[name='softwarePatchesUpdates']:checked").val();
        const testingPatchesDeployment = $("input[name='testingPatchesDeployment']:checked").val();
        const dataBackupManagement = $("input[name='dataBackupManagement']:checked").val();
        const backupTesting = $("input[name='backupTesting']:checked").val();
        const securityTraining = $("input[name='securityTraining']:checked").val();
        const employeeComplianceMonitoring = $("input[name='employeeComplianceMonitoring']:checked").val();
        const securityAudits = $("input[name='securityAudits']:checked").val();
        const maintenanceSecurityManagement = $("input[name='maintenanceSecurityManagement']:checked").val();

        
        const systemOperationsYesCount = [securityIncidentProtocol, quickResponseMitigation, softwarePatchesUpdates, testingPatchesDeployment, dataBackupManagement, backupTesting, securityTraining, employeeComplianceMonitoring, securityAudits, maintenanceSecurityManagement].filter(val => val === 'yes').length;
        const systemOperationsNoCount = [securityIncidentProtocol, quickResponseMitigation, softwarePatchesUpdates, testingPatchesDeployment, dataBackupManagement, backupTesting, securityTraining, employeeComplianceMonitoring, securityAudits, maintenanceSecurityManagement].filter(val => val === 'no').length;

        
        const systemOperationsRiskScore = calculateRiskScore(systemOperationsYesCount, systemOperationsNoCount);
        const systemOperationsRiskLevel = determineRiskLevel(systemOperationsRiskScore);

        
        alert(`System Operations Risk Score: ${systemOperationsRiskScore} (${systemOperationsRiskLevel})`);

        
        const systemOperationsResultText = `System Operations Yes: ${systemOperationsYesCount}, No: ${systemOperationsNoCount}\nSystem Operations Risk Score: ${systemOperationsRiskScore} (${systemOperationsRiskLevel})`;

        
        createTextFile(governanceResultText, securityResultText, systemOperationsResultText);
    };

    function calculateRiskScore(yesCount, noCount) {
        
        const totalQuestions = yesCount + noCount;
        
        const weightedNoCount = noCount * 1.5; 
        
        const weightedScore = (weightedNoCount / totalQuestions) * 100;
        
        const riskScore = Math.min(Math.max(weightedScore, 1), 99);
    
        return Math.round(riskScore);
    }
    

    function determineRiskLevel(riskScore) {
        
        if (riskScore <= 33) {
            return 'Low';
        } else if (riskScore <= 66) {
            return 'Medium';
        } else {
            return 'High';
        }
    }

    function createTextFile(...sections) {
        
        const allResults = sections.join("\n\n");
        const header = "Nittany Lion National Bank System Risk Assessment Results\n\n";
        const content = header + allResults;
    
        
        const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    
       
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "risk_result.txt";
    
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
});
