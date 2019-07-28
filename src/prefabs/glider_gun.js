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
data[4][10] = true;
data[4][16] = true;
data[5][10] = true;
data[5][14] = true;
data[5][16] = true;
data[5][17] = true;
data[6][10] = true;
data[6][16] = true;
data[7][11] = true;
data[7][15] = true;
data[8][12] = true;
data[8][13] = true;

data[0][24] = true;
data[1][22] = true;
data[1][24] = true;
data[2][20] = true;
data[2][21] = true;
data[3][20] = true;
data[3][21] = true;
data[4][20] = true;
data[4][21] = true;
data[5][22] = true;
data[5][24] = true;
data[6][24] = true;

data[2][34] = true;
data[2][35] = true;
data[3][34] = true;
data[3][35] = true;

export default { data };
