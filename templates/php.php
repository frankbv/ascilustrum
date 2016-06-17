#!/usr/bin/env php
<?php

$stdin = '';
while (!feof(STDIN)) {
    $stdin .= fread(STDIN, 1024);
}
$lines = array_filter(explode("\n", $stdin));

// Solve challenge here
var_dump($lines);
