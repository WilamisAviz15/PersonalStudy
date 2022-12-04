const fn = require("./__blank");
const fs = require("fs");
const path = require("path");
let arguments = process.argv[2];
arguments = arguments[0].toUpperCase() + arguments.substr(1);
const dir = path.join(__dirname, `../../../src/components/${arguments}`);

if (!fs.existsSync(dir)) {
  fs.mkdir(dir, (err) => {
    if (err) {
      console.log(
        "Something wrong...",
        path.join(__dirname, `../../../src/components/${arguments}/index.tsx`),
        path.join(
          __dirname,
          `../../../src/components/${arguments}/${arguments}.module.scss`
        )
      );
      return;
    }
  });
  fs.appendFile(
    `${dir}/index.tsx`,
    fn("Index", `${arguments}`),
    function (err) {
      if (err) throw err;
    }
  );
  fs.appendFile(`${dir}/${arguments}.module.scss`, "", function (err) {
    if (err) throw err;
  });
}
