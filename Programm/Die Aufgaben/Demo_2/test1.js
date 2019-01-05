const size=4
var scanner=nn.createNeuralNetwork({
    input:{r:size,c:size},
    output:{r:size,c:size},
    actions:[{t:'Convolution',input:'input',output:'output',d:{r:1,c:1}}]
});
var creater=nn.createNeuralNetwork({
    input:{r:size,c:size},
    output:{r:size,c:size},
    actions:[{t:'Convolution',input:'input',output:'output',d:{r:1,c:1}}]
});
creater.actions[0].filter.set([1,0,0,0,0,0,0,0,0])

function letrain(n=10,m=10){
    for(let k=0;k<n;k++){
        data=[];
        for(let i=0;i<m;i++){
            let d=new Matrix(size,size);
            d.each((e,i,a)=>a[i]=Math.random())
            data.push({i:d,o:creater.run(d)});
        }
        scanner.train(data);
    }
}
function getcost(a,b){
    let sum=0;
    for(let i =0;i<a.length;i++) sum+=(a[i]-b[i])**2;
    return sum/a.length
}

function test(n=10){
    let sum=0;
    for(let i=0;i<n;i++){
        let input=new Matrix(size,size);
        input.each((e,i,a)=>a[i]=Math.random());
        let a=scanner.run(input).body;
        let b=creater.run(input).body;
        sum+=getcost(a,b)
    }
    return sum/n
}