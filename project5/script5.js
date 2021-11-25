const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const authorName = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

// Delay before loading content
// Would be dynamic while fetching data from database
setTimeout(getData, 2500);

function getData() {
    // Would be from API
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1595574444306-e235cef5ea37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, rem!';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    authorName.innerHTML = 'Sven Svensson';
    date.innerHTML = '2021-08-25';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bgs-text.forEach(bg => bg.classList.remove('animated-bg-text'));
}