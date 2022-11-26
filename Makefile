test: unit-test

unit-test: node_modules
	@./node_modules/.bin/mocha

unit-test-cov: node_modules
	@node_modules/.bin/c8 --reporter=lcovonly npm test

node_modules:
	@npm install

clean:
	@rm -rf coverage