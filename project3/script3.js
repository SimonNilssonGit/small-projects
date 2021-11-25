const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('text-area');
const selectButton = document.getElementById('select-btn');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    
    if(e.key === 'Enter'){
        
        createTags(e.target.value);
    }
})

function createTags(input){

    // Tags array
    const tags = [];
    // Add new tag to tags array
    tags.push(input);

    // Clear text area
    textarea.value = "";
    
    // For each tag in array create a span
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    });
}
function randomSelect(){
    const times = 30;

    // Causes random selection visual effect
    const interval = setInterval(() => {

        const randomTag = pickRandomTag();
        // Highlight tag
        highlightTag(randomTag);
        // Unhighlight tag after short delay
        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100)
    }, 100)

    // Stops the visual effect and selects a random tag to land on
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);
    }, times * 100)
}
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}
function highlightTag(tag){
    tag.classList.add('highlight')
}
function unHighlightTag(tag){
    tag.classList.remove('highlight')
}