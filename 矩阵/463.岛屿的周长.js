const islandPerimeter = (grid) => {
  let land = 0;
  let border = 0;
  let n = grid.length;
  let m = grid[0].length;

  for(let i = 0;i<n;i++) {
    for(let j = 0;j<m;j++) {
      if(grid[i][j] == 1) {
        land++;
        if(i<grid.length-1 && grid[i+1][j] == 1) {
          border++;
        }
        if(j<grid[0].length-1 && grid[][j+1] == 1) {
          border++;
        }
        

      }
    }
  }
  return 4 * land - 2 * border;
};