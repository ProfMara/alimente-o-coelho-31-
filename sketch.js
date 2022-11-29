const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var solo;
var fruta, corda;
var con;
var botao;

var cenarioIMG, frutaIMG, coelhoIMG, coelho;
var botaoVentilador;

var piscando;
var comendo, triste;


function preload() {

    cenarioIMG = loadImage("background.png");
    frutaIMG = loadImage("fruta.png");

    //carregando as animações
    //piscando
  

   //configurar animações


  

}


function setup() {
    createCanvas(500, 700);
    frameRate(80);
    //definindo a velocidade das animações



    botao = createImg("botãoCortar.png");
    botao.position(225, 25);
    botao.size(50, 50);
    botao.mouseClicked(soltar);

    engine = Engine.create();
    world = engine.world;
    solo = new Ground(200, 690, 600, 20);

    corda = new Rope(7, { x: 245, y: 30 });
    fruta = Bodies.circle(300, 300, 20);
    Composite.add(corda.body, fruta);

    con = new Link(corda, fruta);


    rectMode(CENTER);
    ellipseMode(RADIUS);

    textSize(50)

}

function draw() {
    image(cenarioIMG, 0, 0, width, height);
    corda.show();
    imageMode(CENTER);

    Engine.update(engine);
    solo.show();

    //código que verifica se a fruta colidiu com o coelho


    //código que verifica se a fruta colidiu com o solo

    

    if (fruta !== null) {
        image(frutaIMG, fruta.position.x, fruta.position.y, 60, 60);
    }
    drawSprites();

}

function soltar() {
    corda.break();
    con.detach();
    con = null;
}

//função que detecta colisão entre um corpo e uma sprite


