var islandPerimeter = function(grid) {
  let tiles = 0;
  let adjacentTiles= 0;
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
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));  // 16



