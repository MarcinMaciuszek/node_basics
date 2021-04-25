const faker = require('faker');
const fs = require('fs');

module.exports = {
    randomAddressesCreation: function () {
        const obj = {
            address: []
        };
        
        for (var i = 0; i < 10; i++) {
            obj.address.push({
                "zipCode": faker.address.zipCode(),
                "zipCodeByState": faker.address.zipCodeByState(),
                "city": faker.address.city()
            })
        }
        
        const json = JSON.stringify(obj)
        
        fs.writeFile('data.json', json, function(err) {
            if (err) throw err;
            console.log("Addition complete")
        })
        return obj;
    }
}