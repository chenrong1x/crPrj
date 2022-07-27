import { LightningElement } from 'lwc';
import getOrgList from '@salesforce/apex/OrgManagerController.getOrgList';

export default class Demo0725 extends LightningElement {
    // orgs = [
    //     {
    //         Id: 1,
    //         Name: 'Amy Taylor',
    //         Title: 'org1',
    //         domain: 'VP of Engineering',
    //     },
    //     {
    //         Id: 2,
    //         Name: 'Michael Jones',
    //         Title: 'org2',
    //         domain: 'VP of Sales',
    //     },
    //     {
    //         Id: 3,
    //         Name: 'Jennifer Wu',
    //         Title: 'org3',
    //         domain: 'CEO',
    //     },
    // ];

    orgs = [];

    connectedCallback(){
        console.log('sfsag');
        getOrgList().then((res)=>{
            console.log(res);
            this.orgs = res;
        }).catch(err=>{
            console.log(err);
        })
    }
}