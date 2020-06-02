function bbqSkewers(grill) {
    let non_veg = grill.filter(x => x.includes("x")).length;
    return [grill.length - non_veg, non_veg];
}

console.log(bbqSkewers( [
    "--oooo-ooo--",
    "--xx--x--xx--",
    "--o---o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--"
  ]));

  console.log(bbqSkewers([
    "--oooo-ooo--",
    "--xxxxxxxx--",
    "--o---",
    "-o-----o---x--",
    "--o---o-----"
  ]));