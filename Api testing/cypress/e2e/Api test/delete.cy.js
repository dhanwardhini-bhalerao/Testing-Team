/// <reference types="Cypress" />

describe('delete the user', () => {
    const authToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2MGI5ZGUwODBmZmFmYmZjMTgzMzllY2Q0NGFjNzdmN2ZhNGU4ZDMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3VuZ2FyZC1lcnAiLCJhdWQiOiJzdW5nYXJkLWVycCIsImF1dGhfdGltZSI6MTY5MDgwMjk1MiwidXNlcl9pZCI6InN5emR1QkVvb1pYQ284ZWVmSXp1VFZFN0hKazIiLCJzdWIiOiJzeXpkdUJFb29aWENvOGVlZkl6dVRWRTdISmsyIiwiaWF0IjoxNjkzNTU2ODQ0LCJleHAiOjE2OTM1NjA0NDQsInBob25lX251bWJlciI6Iis5MTk2MjM1NjgwMjMiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis5MTk2MjM1NjgwMjMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJjdXN0b20ifX0.NbVJ1ISGlsRV_fUYJGgU8RV1M-jfKkeowJ9vcx0qj8VWcGgt0vgG_LGlCwlOT08384eOwvZUiuroAZor1ewxS4Eidlgl_ZOc7bsFHqxjNT1y00VLLqdBk5Sd5HoNV4BFi_FQ7LHegdimpNkIU37KhjQ76dMAYBZ1lIv4WXzRqiXsYrBYbr0Buz6hj6BESzMniFUrEkHPmubiIeivQ60mqaL1LnwFJzRznsXK5XZh0HeLVThBkbLwe7qqK_jnVXseFPkOqY99vCWLY9umw8JKb-0qN2iDCxbMvI2SUG-gRKe0JbcMbyMY0eZETtMGnD5BENpbfiQvNAhtcT7ZrJJWiw'; // Your auth token here
  
    it('delete the user', () => {
      cy.request({
        method: 'DELETE',
        url: 'http://172.105.36.107:5050/api/users/64c7679899b4ceda9a228dd9',
        headers: {
          Authorization: `Bearer ${authToken}`
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        // You can also add more assertions or actions if needed
      });
    });
  });
  
