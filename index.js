const fsPromises = require("fs/promises");

const foo = async () => {
  await fsPromises.writeFile("./foo.txt", "Hello!");
  const data = await fsPromises.readFile("./foo.txt", "utf8");
  console.log(data);
};

void foo();
