let c = document.getElementById('mycanvas');
let ctx=c.getContext('2d');
var fsave=nn.manageArrayOfSaves;
var fcon=nn.manageArrayOfConvolutions;
let scanner = nn.createNeuralNetwork({
    f:'DeLU',
    input: {r:32,c:32},
    output:{r:5,c:1},
    saves:fsave({r:32,c:32,name:'a',number:10})
    .concat(fsave({r:8,c:8,name:'b',number:10}))
    .concat(fsave({r:8,c:8,name:'c',number:10}))
    .concat(fsave({r:8,c:8,name:'d',number:5}))
    .concat(fsave({r:2,c:2,name:'e',number:5}))
    .concat(fsave({r:2,c:2,name:'f',number:5}))
    .concat([
        {r:20,c:1,name:'g'},
        {r:10,c:1,name:'h'},
        {r:10,c:1,name:'i'},
        {r:5,c:1,name:'j'}
    ]),
    actions:fcon({t:"Convolution",d:{r:2,c:2},input:'input',output:'a',bias:true,isame:true,number:10})
    .concat(fcon({t:'MaxPooling',d:{r:4,c:4},input:'a',output:'b',number:10}))
    .concat(fcon({t:'Activation',input:'b',output:'c',number:10}))
    .concat(fcon({t:'Convolution',d:{r:2,c:2},input:'c',output:'d0',osame:true,number:10}))
    .concat(fcon({t:'Convolution',d:{r:2,c:2},input:'c',output:'d1',osame:true,number:10}))
    .concat(fcon({t:'Convolution',d:{r:2,c:2},input:'c',output:'d2',osame:true,number:10}))
    .concat(fcon({t:'Convolution',d:{r:2,c:2},input:'c',output:'d3',osame:true,number:10}))
    .concat(fcon({t:'Convolution',d:{r:2,c:2},input:'c',output:'d4',osame:true,number:10}))
    .concat(fcon({t:'MaxPooling',d:{r:4,c:4},input:'d',output:'e',number:5}))
    .concat(fcon({t:'Activation',input:'e',output:'f',number:5}))
    .concat([
        {t:'Transfer',inputs:['f0','f1','f2','f3','f4'],output:'g'},
        {t:'Weights',d:{r:10,c:20},input:'g',output:'h'},
        {t:'Bias',r:10,output:'h'},
        {t:'Activation',input:'h',output:'i'},
        {t:'Weights',d:{r:5,c:10},input:'i',output:'j'},
        {t:'Bias',r:5,output:'j'},
        {t:'Activation',input:'j',output:'output'}
    ]),
});
function letrain(n=10,m=5){
    for(let k=0;k<n;k++){
        let data=[];
        for(let i=0;i<m;i++){
            let ran=Math.floor(Math.random()*dataset.length);
            let arr=[0,0,0,0,0];
            arr[dataset[ran].o]++;
            data.push({i:dataset[ran].i,o:new Matrix(5,1,arr)})
        }
        scanner.train(data);
    }
}