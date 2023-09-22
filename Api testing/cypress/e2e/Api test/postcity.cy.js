/// <reference types="Cypress" />

describe('API Tests', () => {
    it('should send a POST request to create a city', () => {
      const authToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2MGI5ZGUwODBmZmFmYmZjMTgzMzllY2Q0NGFjNzdmN2ZhNGU4ZDMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3VuZ2FyZC1lcnAiLCJhdWQiOiJzdW5nYXJkLWVycCIsImF1dGhfdGltZSI6MTY5MDgwMjk1MiwidXNlcl9pZCI6InN5emR1QkVvb1pYQ284ZWVmSXp1VFZFN0hKazIiLCJzdWIiOiJzeXpkdUJFb29aWENvOGVlZkl6dVRWRTdISmsyIiwiaWF0IjoxNjkzNTcxMjQ2LCJleHAiOjE2OTM1NzQ4NDYsInBob25lX251bWJlciI6Iis5MTk2MjM1NjgwMjMiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis5MTk2MjM1NjgwMjMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJjdXN0b20ifX0.UISnNPpKJL9C1YcNE93MA-uk_NDp-6KEyNXmoL4XAONIqd3I6v0KRQc3w0R0nCTU72anXK8SioSt4XcJDmZ7fz_QnC8nBVLFsxQsGxEn6TiLWW3YIWCNn16BqxIlkAWu8h8ygouahojPyEAA8H19uSLEUisIECzrDGFbFaCmke1arg-_jImIFkNp5K8lFhuc-Q0CLdqCKXroGSCdvw2VX3qA41rnbNdqkJv3wXWKJi5xAAHP4PMzWUae51uaW6XbnzZmngDPHdCha2Zwt5iEzCTvOpqVheMle7AwLkDVpJNLyNlJDu89arKwcgp_tQBA_7LDand8huqNSxtatH9Ugg';
  
      const requestBody = {
        name: '',
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
        method: 'POST',
        url: 'http://172.105.36.107:5050/api/master/city',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: requestBody,
      }).then((response) => {
        expect(response.status).to.equal(201); // Adjust expected status code if needed
        expect(response.body).to.have.property('message', 'City has been created successfully!');
        // Add more assertions as needed
      });
    });
  });
  