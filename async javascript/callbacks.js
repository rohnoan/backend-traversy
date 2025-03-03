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
function createPost (post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback();
    },2000)
};

timer();
createPost({title:'post3',body:'this is post3'},getPosts);