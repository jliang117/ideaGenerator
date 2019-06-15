## Idea Repository

A place where people can submit and find new ideas, built with [React](https://reactjs.org/) and [Material](https://material-ui.com/) and love

### Build + run

Clone

	npm install
	npm run

### Todo

1. persist data so users see a single shared idea repo
2. get it out into the world
5. searching
6. filter
7. deleting (only if you possess creation identifier)

> persist data so users see a single shared idea repo

Taking time out here to unwrap my analysis paralysis of what DBMS (or maybe something else?) I'd use to persist the ideas that get submitted. 

#### What are the requirements/questions?

I want a free solution
I want it to be simple to setup, and easily integrated into (how I currently deploy, but this may change) heroku
It's essentially a forum, with a single thread - what are some examples of forum architecture that works well?  
How would the user see new content - manual refresh or autorefresh on a timer or a continuous polling that refreshes on change or other ideas...


