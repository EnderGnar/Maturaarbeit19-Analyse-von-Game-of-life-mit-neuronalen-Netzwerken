let c = document.getElementById('mycanvas');
let ctx=c.getContext('2d');
let smooth=false;
const chance=0.2;
const size=50;
const example=new Array(size);
example.fill(0);
var fsave=nn.manageArrayOfSaves;
var fcon=nn.manageArrayOfConvolutions;
let scanN=6;
let showreal=1;
let showneural=1;
let scanner = nn.createNeuralNetwork({
    input: {r:size,c:1},
    output:{r:size,c:1},
    saves:fsave({r:size,c:1,name:'a',number:scanN})
        .concat(fsave({r:size,c:1,name:'c',number:scanN}))
        .concat([{r:size,c:1,name:'e'}]),
    actions:fcon({t:"Convolution",d:{r:1,c:0},input:'input',output:'a',bias:true,isame:true,number:scanN})
        .concat(fcon({t:"Activation",input:'a',output:'c',number:scanN}))
        .concat(fcon({t:"Convolution",d:{r:1,c:0},input:'c',output:'e',bias:true,osame:true,number:scanN}))
        .concat([{t:"Activation",input:'e',output:'output'}]), 
    f:'Sigmoid'
});
let simpelscanner=nn.LinearNN(3,1,[8],nn.DeLU);
let world={
    rule:"01001000",
    generations:[],
    size:size,
    ps:10,
    calc:function(last){
        let output=new Matrix(1,this.size);
        for(let i = 0;i<this.size;i++){
            let index=last.get(0,i-1)*4+last.get(0,i)*2+last.get(0,i+1);
            output.set(0,i,(this.rule[index]==='1')?1:0);
        }
        return output
    },
    step:function(){
        let last=this.generations[this.generations.length-1].real;
        let newgen=this.calc(last);
        let newneu=scanner.run(last).copy();
        let newneu2=new Matrix(1,size);
        newneu2.each((e,i,a)=>(a[i]=simpelscanner.run([last.get(0,i-1),last.get(0,i),last.get(0,i+1)]).body[0]));
        if(!smooth)newneu.each((e,i,a)=>a[i]=(e<0.5)?0:1)
        this.generations.push({real:newgen,neural:newneu,neural2:newneu2});
        if(this.generations.length>100)this.generations.splice(0,1);
    },
    draw:function(){
        ctx.clearRect(0,0,1000,1000);
        let ps=this.ps;
        for(let gen in this.generations)for(let cell in real = this.generations[gen].real.body){
            let neural=(this.generations[gen].neural)?this.generations[gen].neural.body:example;
            let neural2=(this.generations[gen].neural2)?this.generations[gen].neural2.body:example;
            ctx.beginPath();
            ctx.rect(ps*cell,ps*gen,ps,ps);
            ctx.fillStyle=`rgb(${(real[cell])*255*showreal},${(neural[cell])*255*showneural},0)`//ctx.fillStyle=`rgb(${(1-real[cell])*255},${(1-neural[cell])*255},${(1-neural2[cell])*255})`;
            ctx.fill();
        }
    },
    setup:function(){
        this.generations=[{real:new Matrix(1,this.size)}];
        this.generations[0].real.set(0,Math.floor(this.size/2),1)
    }
}
function letrain(n=10,m=5){
    for(let k=0;k<n;k++){
        let data=[];
        for(let i=0;i<m;i++){
            let inp=new Matrix(1,size);
            inp.each((e,i,a)=>a[i]=(Math.random()<chance)?1:0)
            data.push({i:inp,o:world.calc(inp)})
        }
        scanner.train(data);
    }
}
function letrain2(n=10,m=5){
    for(let k=0;k<n;k++){
        let data=[];
        for(let i=0;i<m;i++){
            let inp=new Matrix(1,3);
            inp.each((e,i,a)=>a[i]=(Math.random()<chance)?1:0)
            data.push({i:inp,o:new Matrix(1,1,[world.calc(inp).body[1]])})
        }
        simpelscanner.train(data);
    }
}
world.setup();
ctx.fillStyle='#000000';
function updating(){
    world.step();
    world.draw();
}
let ui=window.setInterval(updating,100)

