

async function fetchPosts() {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    try {
      const data = await fetch(url)
      const res = await data.json();
      console.log('10 posts', res);
    } catch (error) {
      console.log('Error fetching data', error);
    }
	
}


fetchPosts();






// ~~~~~ NEW WAY (ASYNC/AWAIT) ~~~~~ \\
/* async function getAllCommentsUsingAsyncAwait() {
	try {
		const data = await fetch('https://jsonplaceholder.typicode.com/comments');
		const res = await data.json();
		console.log('ASYNC/AWAIT:', res);
	} catch (err) {
		console.log('err:', err);
	}
}

getAllCommentsUsingAsyncAwait(); */