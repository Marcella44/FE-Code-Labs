class Subject {
	constructor() {
		this.observers = [];
	}
	addObserver(fn) {
    this.observers.push(fn);
  }
  removeObserver(fn) {
    this.observers = this.observers.filter((item) => item !== fn);
  }
  notifyObserver(data) {
    this.observers.forEach((observer)=>observer.update())
    // for(let i = 0; i< this.observers.length; i++) {
    //   this.observers[i].update()
    // }
  } 
}
class Observer {
	update() {
		console.log('Observer updated!');
	}
}
 
const observer = new Observer()
const observer1 = new Observer()
const observer2 = new Observer()
const observer3 = new Observer()
const subject = new Subject()

subject.addObserver(observer1)
subject.addObserver(observer2)
subject.addObserver(observer3)

// const fn = (data) => {
//   console.log("Callback was executed with data", data);
// };

// subject.addObserver(fn);

subject.notifyObserver("Hello from the observable");





/* // Observer Pattern Demo Start \\
class EventObserver {
	constructor() {
		this.observers = [];
	}

	subscribe(fn) {
		this.observers.push(fn);
	}

	unsubscribe(fn) {
		this.observers = this.observers.filter((sub) => sub !== fn);
	}

	broadcast(data) {
		this.observers.forEach((sub) => sub(data));
	}
}

// Usage:
const getWordCount = (text) => (text ? text.trim().split(/\s+/).length : 0);

const wordCountElement = document.createElement('p');

wordCountElement.className = 'wordCount';
wordCountElement.innerHTML = 'Word Count: <strong id="blogWordCount">0</strong>';
document.body.appendChild(wordCountElement);

const blogObserver = new EventObserver();

blogObserver.subscribe((text) => {
	const blogCount = document.getElementById('blogWordCount');

	blogCount.textContent = getWordCount(text);
});

const blogPost = document.getElementById('blogPost');

blogPost.addEventListener('keyup', () => blogObserver.broadcast(blogPost.value));
// Observer Pattern Demo End \\ */