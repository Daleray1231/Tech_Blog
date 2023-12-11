const commentFormHandler = async function (event) {
    event.preventDefault();
  
    const blog_id = document.querySelector('.new-comment-form').dataset.blog_id;
  
    const text = document.querySelector('#comment').value.trim();
    if(text) {
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          blog_id,
          text,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      document.location.reload();
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);