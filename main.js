const method = require('./function');

const data = method.randomAddressesCreation()

for (const [index, {zipCode, zipCodeByState, city}] of Object.entries(data.address)) {
    console.log(`${index}: ${zipCode}, ${zipCodeByState}, ${city}`)
}