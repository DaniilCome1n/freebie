import './styles/main.scss'

const showMoreButton = document.getElementById('show_more_button');
let counter = 0

function createPost(postData){
    let post = document.createElement('DIV');
    post.classList.add('post');
    post.innerHTML = `  <h3 class="post_tittle">${postData.title}</h3>
                        <p class="post_text">${postData.body}</p>
                        <a href="" class="post_read_more">Read More</a>`
    return post;
}

function getPosts(){
    let url = `https://jsonplaceholder.typicode.com/posts?_start=${counter}&_end=${counter + 6}`
    fetch(url)
        .then(response => response.json())
        .then(allPosts => {
            let posts = document.createElement('DIV');
            posts.classList.add('posts')
            allPosts.map(post => {
                posts.append(createPost(post));
            })
            showMoreButton.before(posts);
            counter += 6
        })
}

showMoreButton.addEventListener('click', function(){
    getPosts();
})