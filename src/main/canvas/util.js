// Canvas utility

export const drawRect = props => {
  const { context, x, y, width, height } = props;
  context.fillRect(x, y, width, height);
};

export const drawPixel = props => {
  const { context, scale, x, y } = props;

  context.fillRect(x*scale, y*scale, scale, scale);
};
