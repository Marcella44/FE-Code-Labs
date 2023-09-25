class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		// TODO: Add observer to the list
	}

	removeObserver(observer) {
		// TODO: Remove observer from the list
	}

	notifyObservers(data) {
		// TODO: Notify all observers with given data
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

		// TODO: Fetch data from the API and notify observers
	}
}

class Observer {
	update(data) {
		// TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.
	}
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method