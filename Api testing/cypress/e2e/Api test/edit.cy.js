/// <reference types = 'Cypress' />

describe('Edit the data using Api', ()=>{
it('Edit the city',()=>{
    const authToken ='eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2MGI5ZGUwODBmZmFmYmZjMTgzMzllY2Q0NGFjNzdmN2ZhNGU4ZDMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3VuZ2FyZC1lcnAiLCJhdWQiOiJzdW5nYXJkLWVycCIsImF1dGhfdGltZSI6MTY5MDgwMjk1MiwidXNlcl9pZCI6InN5emR1QkVvb1pYQ284ZWVmSXp1VFZFN0hKazIiLCJzdWIiOiJzeXpkdUJFb29aWENvOGVlZkl6dVRWRTdISmsyIiwiaWF0IjoxNjkzNTUzMDQ5LCJleHAiOjE2OTM1NTY2NDksInBob25lX251bWJlciI6Iis5MTk2MjM1NjgwMjMiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis5MTk2MjM1NjgwMjMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJjdXN0b20ifX0.YXRa8GjhXE1OqRuHeltjyMcj-HAP35_St9gKeOwUaw8SyUnSKk5U-d31_-eqLWsYbiI6Eeg7gL4rcmYVuIgw_5WkpyMXhf86nR4dhhScnMxg3uzzuM3lERBH82aiwifoMOp8_QDCFdHOAOgEfK4GOBi-rzYaCald0dC7WpRjK_Hmg11UlD6XOMQqCzgkl7dPrI3TmaYYRnh9zJXRFrub0GTo_Blaw5kfywW3vU3FL8VkrjZxQPY4BpxfQLh2kjgcML8AlvGPzQQXLLBtA6ErCKWlDRZU33mDajzSYjVg3jkd26h27p0VbXmjhCzGwxP5d1WxpJ8tsDhVlNxOzhKXLQ';

    const requestBody = {
        name: 'pune123',
        city_head: '649ed8800c6ec97387e6376e',
        transportation_cost: 10,
        labor_cost: 10,
        labor_per_floor: 10,
        machine_hosting: 10,
        machine_hosting_per_floor: 10,
        status: true,
        created_by: '6437fff7e62dae413b1b6794',
        city_head_signature: 'https://sungard-images.s3.ap-south-1.amazonaws.com/1691580675634_processed-d606944e-c4c3-4418-91b5-f79bfe342540_GeXRIn4W.jpeg',
      };

      cy.request({
        method : 'Put',
        url : 'http://172.105.36.107:5050/api/master/city/64f08379860c0be0ea33ed21',
        headers :{
            Authorization: `Bearer ${authToken}`,

        },
        body: requestBody,
      }).then((Response)=>{
        expect(Response.status).to.equal(200); // Adjust expected status code if needed
        expect(Response.body).to.have.property('message',  'city has been successfully updated'); 
      });

});

});