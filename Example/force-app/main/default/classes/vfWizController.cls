public with sharing class vfWizController {
    public Contact bob {get;set;}

    public vfWizController() {
        bob= new Contact();
    }
    public pagereference wiz1(){
        return page.vfWiz1;
    }
    public pagereference wiz2(){
        return page.vfWiz2;
    }
    public pagereference wiz3(){
        return page.vfWiz3;
    }
    public void saveBob(){
        insert bob;
        //return(new ApexPages.standardController(bob)).view();
    }
}
