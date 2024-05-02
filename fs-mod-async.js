const fs = require('fs');

fs.readFile('./content/first.txt','utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log(data);
    const first = data;
    fs.readFile('./content/second.txt','utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        };
        console.log(data);
        const second = data;

        fs.writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,{flag: 'a'}, (err) => {
            if (err) {
                console.log(err);
                return;
            };
            console.log('Done');
        });
    })
});

