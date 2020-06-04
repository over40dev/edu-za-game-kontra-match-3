const {init, GameLoop, Sprite} = kontra;

const {canvas, context} = init();

let sprite = null;
const blockImage = new Image();
blockImage.src = 'assets/images/bean_blue.png';
blockImage.onload = () => {
  sprite = Sprite({
    x: 200,
    y: 200,
    // color: 'blue',
    // width: 50,
    // height: 20,
    dx: 2,
    image: blockImage,
  });
}

const update = () => {

  if (!sprite) return;

  sprite.update();

  if (sprite.x > canvas.width) {
    sprite.x = -sprite.width;
  }
};

const render = () => {
  if (!sprite) return;
  
  sprite.render();
};

const loop = GameLoop({
  update: () => update(),
  render: () => render()
});

loop.start();
