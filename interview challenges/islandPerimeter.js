var islandPerimeter = function(grid) {
  let tiles = 0;
  let adjacentTiles= 0;
  console.log(grid[0].length);
  // find the number of tiles, start the perimeter at 4 times each tile
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[0].length; j++){
      if(grid[i][j]) {
        tiles++;
      }
      if(grid[i][j] && grid[i][j+1]){
        adjacentTiles++;
      }
      if(grid[i+1] && grid[i][j] && grid[i+1][j]){
        adjacentTiles++;
      }
    }
  }
  return 4*tiles - 2*adjacentTiles;

  // let adjacentHorizontal = 0;
  // grid.forEach((row) => {
  //   let tempadjacentHorizontal = 0;
  //   row.forEach((col) => {
  //     if(row[col] === 1 && row[col] === 1) {
  //       adjacentHorizontal++;
  //     }
  //   })
  // })
  //find the number of shared sides, keep track of the shared sides and subtract 1 from each shared side
  // first count the adjacent blocks horizontally
  // then count the adjacent blocks vertically
  // then subtract the total number of blocks from the perimete
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));  // 16



