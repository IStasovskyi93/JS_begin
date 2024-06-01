let table = [];
for (let counter = 0; counter < 11; counter++) {
  table.push([]);
  for (let digit = 0; digit < 11; digit++) {
    table[counter].push(`${digit} * ${counter} = ${digit * counter}`);
  }
}
console.table(table);
