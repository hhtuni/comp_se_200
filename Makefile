test: unit-test

unit-test: node_modules
	@./node_modules/.bin/mocha

unit-test-cov: node_modules utility_library-cov
	@rm -rf coverage
	@mkdir coverage
	@JS_COV=1 ./node_modules/.bin/mocha -R mocha-lcov-reporter > coverage/coverage_temp.lcov
	@sed 's,SF:,SF:utility_library/,' coverage/coverage_temp.lcov > coverage/coverage.lcov

node_modules:
	@npm install

#instruments library with jscover (target 'utility_library-cov')
utility_library-cov: node_modules
	@node_modules/jscover/bin/jscover utility_library utility_library-cov

clean:
	@rm -rf utility_library-cov coverage
