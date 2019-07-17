console.log('-----')
var arg1 = process.argv[2];

const bands = require('./band');

for (var items in bands) {
    if (arg1 == 'allbands') {
        console.log(`${items}: ${bands[items]}`);
    } else if (arg1 == 'rap') {
        console.log(bands.rap);
    } else if (arg1 == 'hiphop') {
        console.log(bands.hipHop);
    }
}

console.log('-----')
