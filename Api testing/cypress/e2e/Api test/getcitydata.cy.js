/// <reference types = 'Cypress' />

// cypress/integration/api.spec.js
describe('API Tests', () => {
    const authToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2MGI5ZGUwODBmZmFmYmZjMTgzMzllY2Q0NGFjNzdmN2ZhNGU4ZDMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3VuZ2FyZC1lcnAiLCJhdWQiOiJzdW5nYXJkLWVycCIsImF1dGhfdGltZSI6MTY5MDgwMjk1MiwidXNlcl9pZCI6InN5emR1QkVvb1pYQ284ZWVmSXp1VFZFN0hKazIiLCJzdWIiOiJzeXpkdUJFb29aWENvOGVlZkl6dVRWRTdISmsyIiwiaWF0IjoxNjkzNDc4NjE3LCJleHAiOjE2OTM0ODIyMTcsInBob25lX251bWJlciI6Iis5MTk2MjM1NjgwMjMiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis5MTk2MjM1NjgwMjMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJjdXN0b20ifX0.R1nw9Xwti7IXbzU8uffWsINsnSb1sLUZx68E34Hi4w1Pv4lHm5OONX6lIZaopwfZd_jVZv4AiKpSKbIPJwnEuu_QYvMzfkwi-pT1pIIcd3N98aDn-z1AYCp-_CMEPC0N327mIkyFJNwCg9a1HP5jsy8ejwr98I5I2jLNT9eL6m55zgGqJrK8Wn6AyafXyEbQNzqso39Hlf7J8OTiYJrjZTEmX7yZGFcLEacsk2OT1Lnp-NZwkytK0-AoOyqQdUHgevEwU2qqmhvdr4dZax46iXTzdU8L9TdSPCnNrlqFSfG-dGLziL_rkww4qT6Wo4aMhfI7Gth2xnrKk07it3VyRQ';

    it('should retrieve data from the API with authorization', () => {
      const authToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2MGI5ZGUwODBmZmFmYmZjMTgzMzllY2Q0NGFjNzdmN2ZhNGU4ZDMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3VuZ2FyZC1lcnAiLCJhdWQiOiJzdW5nYXJkLWVycCIsImF1dGhfdGltZSI6MTY5MDgwMjk1MiwidXNlcl9pZCI6InN5emR1QkVvb1pYQ284ZWVmSXp1VFZFN0hKazIiLCJzdWIiOiJzeXpkdUJFb29aWENvOGVlZkl6dVRWRTdISmsyIiwiaWF0IjoxNjkzNTcxMjQ2LCJleHAiOjE2OTM1NzQ4NDYsInBob25lX251bWJlciI6Iis5MTk2MjM1NjgwMjMiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis5MTk2MjM1NjgwMjMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJjdXN0b20ifX0.UISnNPpKJL9C1YcNE93MA-uk_NDp-6KEyNXmoL4XAONIqd3I6v0KRQc3w0R0nCTU72anXK8SioSt4XcJDmZ7fz_QnC8nBVLFsxQsGxEn6TiLWW3YIWCNn16BqxIlkAWu8h8ygouahojPyEAA8H19uSLEUisIECzrDGFbFaCmke1arg-_jImIFkNp5K8lFhuc-Q0CLdqCKXroGSCdvw2VX3qA41rnbNdqkJv3wXWKJi5xAAHP4PMzWUae51uaW6XbnzZmngDPHdCha2Zwt5iEzCTvOpqVheMle7AwLkDVpJNLyNlJDu89arKwcgp_tQBA_7LDand8huqNSxtatH9Ugg';
  
      cy.request({
        method: 'GET',
        url: 'http://172.105.36.107:5050/api/master/city',
        headers: {
          Authorization: `Bearer ${authToken}`, // Assuming it's a Bearer token
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('status', true);
        expect(response.body).to.have.property('message', 'Data served successfully!');
        expect(response.body).to.have.property('data').and.to.be.an('array');
        const cities = response.body.data;
        expect(cities).to.have.length.above(0); // Ensure at least one city is returned

        const city = cities[0];
        expect(city).to.have.property('_id').and.to.be.a('string');
        expect(city).to.have.property('name').and.to.be.a('string');
        expect(city).to.have.property('transportation_cost').and.to.be.a('number');
        expect(city).to.have.property('labor_cost').and.to.be.a('number');
        expect(city).to.have.property('labor_per_floor').and.to.be.a('number');
        expect(city).to.have.property('machine_hosting').and.to.be.a('number');
        expect(city).to.have.property('machine_hosting_per_floor').and.to.be.a('number');
        expect(city).to.have.property('city_head').and.to.be.a('string');
        expect(city).to.have.property('created_by').and.to.be.a('string');
  
      });
    });

    })


