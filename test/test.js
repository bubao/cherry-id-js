const GenId = require('..');

const genid = new GenId({ WorkerId: (process.argv[2] || 1) - 0 });

(() => {
    console.time("Test Run");
    const HSet = new Set();
	for (let index = 0; index < 500000; index++) {
        HSet.add(genid.NextId());
    }
    console.log([...HSet.values()].join("\n"))
    console.timeEnd("Test Run");
    console.log(HSet.size);
})();