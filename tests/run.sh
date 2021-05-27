#!/bin/bash

node -v
php -v

php  create-data.php && \
php  create-res.php && \
node create-res.js && \
php  check.php && \
rm *.json
