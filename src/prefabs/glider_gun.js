const WIDTH = 36;
const HEIGHT = 9;

const data = [[]];
for (let i = 0; i < HEIGHT; i++) {
  for (let j = 0; j < WIDTH; j++) {
    if (!data[i]) {
      data[i] = [];
    }
    data[i][j] = 0;
  }
}

data[4][0] = true;
data[4][1] = true;
data[5][0] = true;
data[5][1] = true;

data[2][12] = true;
data[2][13] = true;
data[3][11] = true;
data[3][15] = true;

export default { data };
