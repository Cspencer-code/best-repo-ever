public with sharing class vfExamplecontroller {
    
  public List<Account> bob {get;set;} 
    
    
    public vfExamplecontroller() {
        bob = [SELECT name,BillingState, BillingStreet, BillingCity, BillingPostalCode FROM Account];
    }

    public void bobsave() {
        system.debug('Called Method');
        upsert bob;
    }

}
