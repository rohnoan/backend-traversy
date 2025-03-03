const posts=[
    {
        title:'post1',
        body:'this is post1'
    },
    {
        title:'post2',
        body:'this is post2'
    }
];
function timer(){
    let time=120;
    const timerInterval = setInterval(()=>{
        const mins=Math.floor(time/60);
        const secs=time%60;document.querySelector('.timer').innerText = `${mins} : ${secs < 10 ? '0' + secs : secs}`;
        time--;
        
        if(time<0){
            clearInterval(timerInterval);

        }
    },1000)
    
}
function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index)=>{
            output+=`${post.title}`
        });
        document.querySelector('.posts').innerText=output;
    },1000)
}
function createPost (post){
    return new Promise((resolve,reject)=>{
        posts.push(post);

        const error=false;

        if(!error){
            resolve();
        }else{
            reject('error smtg went wrong')
        }
    })
};


// createPost({title:'post3',body:"this is post3"})
// .then(getPosts)
// .catch(err=>console.log(err))

// const promise1 = Promise.resolve('hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'goodbye');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });


async function  init(){
    await createPost({title:'post3'});
    getPosts();

}

init();