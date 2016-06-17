#!/usr/bin/env node

var stdin = process.stdin;

(function () {
    var buffer = [];
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', function (chunk) {
        buffer.push(chunk);
    });
    stdin.on('end', function () {
        solve(buffer.join().trim().split('\n'));
    });
})();

function solve(input) {
    // Solve challenge here
    console.log(input);
}
