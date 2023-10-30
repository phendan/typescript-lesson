import axios from 'axios';

// const posts = [
//     { id: 1, title: 'Post 1' },
//     { id: 2, title: 'Post 2' },
//     { id: 3, title: 'Post 3' },
//     { id: 4, title: 'Post 4', comments: [{ id: 1, message: 'Comment 1' }] }
// ];

try {
    const response = await axios.get('/posts.json');
    const posts: unknown = response.data; // Wir hoffen es sind posts

    if (validatePosts(posts)) {
        renderPosts(posts);
    } else {
        console.error("posts didn't match type");
    }
} catch {
    //
}

type Post = {
    id: number;
    title: string;
    body: string;
    comments?: Comment[];
};

type Comment = {
    id: number;
    message: string;
};

// Schema
// Type Guard
function validatePosts(data: unknown): data is Post[] {
    if (!Array.isArray(data)) return false;

    for (let item of data) {
        if (!item.hasOwnProperty('id') || typeof item.id !== 'number') {
            return false;
        }

        if (!item.hasOwnProperty('title') || typeof item.title !== 'string') {
            return false;
        }

        if (!item.hasOwnProperty('body') || typeof item.body !== 'string') {
            return false;
        }

        if (item.hasOwnProperty('comments') && !validateComments(item.comments)) {
            return false;
        }
    }

    return true;
}

function validateComments(data: unknown): data is Comment[] {
    if (!Array.isArray(data)) return false;

    for (let item of data) {
        if (!item.hasOwnProperty('id') || typeof item.id !== 'number') {
            return false;
        }

        if (!item.hasOwnProperty('message') || typeof item.message !== 'string') {
            return false;
        }
    }

    return true;
}

function renderPosts(posts: Post[]) {
    const postElements = posts
        .map(post => {
            // const commentsHtml =
            //     typeof post.comments !== 'undefined' ? renderComments(post.comments) : '';

            return `
                <article id="post-${post.id}">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    ${(post.comments && renderComments(post.comments)) ?? ''}
                </article>
            `;
        })
        .join('');

    render('#app', postElements);
}

function renderComments(comments: Comment[]) {
    const commentElements = comments
        .map(comment => {
            return `
                <li id="comment-${comment.id}">
                    <p>${comment.message}</p>
                </li>
            `;
        })
        .join('');

    const commentList = `<ul>${commentElements}</ul>`;

    return commentList;
}

function render(parentSelector: string, html: string) {
    const template = document.createElement('template');
    template.innerHTML = html;
    const parentElement = document.querySelector(parentSelector);
    parentElement?.appendChild(template.content);
}
