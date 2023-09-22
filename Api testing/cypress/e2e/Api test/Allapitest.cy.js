/// <reference types = 'Cypress' />

describe('Test the All the API', ()=>{
    const authToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2MGI5ZGUwODBmZmFmYmZjMTgzMzllY2Q0NGFjNzdmN2ZhNGU4ZDMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3VuZ2FyZC1lcnAiLCJhdWQiOiJzdW5nYXJkLWVycCIsImF1dGhfdGltZSI6MTY5MDgwMjk1MiwidXNlcl9pZCI6InN5emR1QkVvb1pYQ284ZWVmSXp1VFZFN0hKazIiLCJzdWIiOiJzeXpkdUJFb29aWENvOGVlZkl6dVRWRTdISmsyIiwiaWF0IjoxNjkzNTc1MTYwLCJleHAiOjE2OTM1Nzg3NjAsInBob25lX251bWJlciI6Iis5MTk2MjM1NjgwMjMiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis5MTk2MjM1NjgwMjMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJjdXN0b20ifX0.SZycciMBFfNBRnT-z7IXoY-PV9fDKbptCc2wwvqcq-jaC_C8xbvqSYiFkiFq45yScXSkxbz2Id2V6mipWEHohbG3sSwtbP5fLU0QY-Qdbu_dGjGTV0DN8PIfiV-i0nkzI8RRToof_eA4JDi2nahdHoEvt8QQ2qSVEd4nazkg0kNk_K30C5c852PRtjuhSBQYwpQMkIbdClEiBgag-obQLRy7-a1HKdyHCoK8XihC-TR3RxphSM6iDavElwl_GlLF-8qRM6sIQGnL7KWxRNhgYEdxzfLEW8sbFn3cHuS1OvkFRTPe5UdphsrCy19r0AQSxw0SBI3iopNz63DvwMik7g';

    it.only('post the user' ,()=>{
        const requestBody = {
                
                    "name": "cypressgsfgshf",
                    "email": "cypress@gmail.com",
                    "designation_id": "64d382f50e6cd08970adcc66", //techin
                    "department_id": "64d378cb0e6cd08970adc250", //sales
                    "date_of_birth": "2015-04-13T00:00:00.000Z",
                    "date_of_joining": "2023-04-13T00:00:00.000Z",
                    "reporting_manager_id": "6437fff7e62dae413b1b6794", //sanjay
                    "company_mobile_number": "1212121212",
                    "mobile_number": "3434343434",
                    "register_address": "Pune wakad",
                    "local_address": "pune abc",
                    "kyc_1": "https://star-images-data.s3.ap-south-1.amazonaws.com/1681812897610_WhatsApp%20Image%202023-02-02%20at%205.27.16%20PM.jpeg",
                    "kyc_2": "https://star-images-data.s3.ap-south-1.amazonaws.com/1681812897610_WhatsApp%20Image%202023-02-02%20at%205.27.16%20PM.jpeg",
                    "photo": "https://star-images-data.s3.ap-south-1.amazonaws.com/1681812897610_WhatsApp%20Image%202023-02-02%20at%205.27.16%20PM.jpeg",
                    "user_type": "Admin",
                    "user_status": true,
                    "password": "123123",
                    "created_by": "63bfbd24acfbb4211cd64976",
                    "authentication": []      
              }
              cy.request({
                method: 'POST',
                url: 'http://172.105.36.107:5050/api/users',
                headers: {
                  Authorization: `Bearer ${authToken}`,
                },
                body: requestBody,
             }).then((response) => {
                    expect(response.status).to.equal(201); // Adjust expected status code if needed
                    expect(response.body).to.have.property('message', 'City has been created successfully!');              
        })
    })


    ///// Get All the user
    it('get all the user', ()=>{
        cy.request({
            method : 'get',
            url : 'http://172.105.36.107:5050/api/users',
            headers: {
                Authorization: `Bearer ${authToken}`,
              }
                })
    })



    ///Upadte the user
    it('update the user',()=>{
        const requestBody = {
                
            "name": "cypress12312334567",
            "email": "cypress@gmail.com",
            "designation_id": "64d382f50e6cd08970adcc66", //techin
            "department_id": "64d378cb0e6cd08970adc250", //sales
            "date_of_birth": "2015-04-13T00:00:00.000Z",
            "date_of_joining": "2023-04-13T00:00:00.000Z",
            "reporting_manager_id": "6437fff7e62dae413b1b6794", //sanjay
            "company_mobile_number": "9090909090",
            "mobile_number": "9090909093",
            "register_address": "Pune wakad",
            "local_address": "pune abc",
            "kyc_1": "https://star-images-data.s3.ap-south-1.amazonaws.com/1681812897610_WhatsApp%20Image%202023-02-02%20at%205.27.16%20PM.jpeg",
            "kyc_2": "https://star-images-data.s3.ap-south-1.amazonaws.com/1681812897610_WhatsApp%20Image%202023-02-02%20at%205.27.16%20PM.jpeg",
            "photo": "https://star-images-data.s3.ap-south-1.amazonaws.com/1681812897610_WhatsApp%20Image%202023-02-02%20at%205.27.16%20PM.jpeg",
            "user_type": "Admin",
            "user_status": true,
            "password": "123123",
            "created_by": "63bfbd24acfbb4211cd64976",
            "authentication": []      
                }
                cy.request({
                    method : 'Put',
                    url : 'http://172.105.36.107:5050/api/users/64f1b081860c0be0ea33ef65',
                    headers :{
                    Authorization: `Bearer ${authToken}`,
                    },
                    body: requestBody,
                }).then((Response)=>{
                    expect(Response.status).to.equal(200); // Adjust expected status code if needed
                    expect(Response.body).to.have.property('message',  'User has been successfully updated'); 
                });                       
    })


    ///Delete the user

    it('delete the user',()=>{
        cy.request({
            method: 'DELETE',
            url: 'http://172.105.36.107:5050/api/users/64f1e83d860c0be0ea33f133',
            headers: {
              Authorization: `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
    })
})

});