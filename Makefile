test: unit-test

unit-test: node_modules
	@./node_modules/.bin/mocha

unit-test-cov: node_modules src-cov
	@rm -rf coverage
	@mkdir coverage
	@JS_COV=1 ./node_modules/.bin/mocha -R mocha-lcov-reporter > coverage/coverage_temp.lcov
	@sed 's,SF:,SF:src/,' coverage/coverage_temp.lcov > coverage/coverage.lcov

node_modules:
	@npm install

#instruments library with jscover (target 'src-cov')
src-cov: node_modules
	@node_modules/jscover/bin/jscover src src-cov

clean:
	@rm -rf src-cov coverage
