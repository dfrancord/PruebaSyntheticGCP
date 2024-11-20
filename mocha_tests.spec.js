var expect  = require("chai").expect;
const axios = require('axios');

describe("Api Pipeline", function() {

  describe("Get Environment Development", function() {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: '$URL',
        headers: { }
      };

    it("returns status 200", function(done) {

        axios.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        expect(response.status).to.equal(200);
        done();
        })
        .catch((error) => {
        console.log(error);
        });

    });

    it("returns environment development activo", function(done) {

        axios.request(config)
        .then((response) => {

        console.log(JSON.stringify(response.data));

        expect(response.data.status).to.equal(1);

        done();

        })
        .catch((error) => {
        console.log(error);
        });

    });

  });
});