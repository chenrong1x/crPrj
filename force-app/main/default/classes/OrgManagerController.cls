global without sharing class OrgManagerController {
    @AuraEnabled(cacheable=true)
    public static List<Org__c> getOrgList() {
        return [SELECT Id, Name, Domain__c FROM Org__c];
    }
}
