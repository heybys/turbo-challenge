#!/bin/bash

# Git repository URL and clone directory
GIT_REPO_URL="https://github.com/heybys/turbo-challenge.git"
CLONE_DIR="turbo-challenge"
BRANCH="develop"

# Clone the React app from the GitHub server if it doesn't exist, otherwise pull the latest changes
if [ ! -d "$CLONE_DIR" ]; then
    git clone -b $BRANCH $GIT_REPO_URL $CLONE_DIR
    echo "------------------------------------------------Git clone completed from $BRANCH------------------------------------------------"
else
    cd $CLONE_DIR || exit
    git pull origin $BRANCH
    cd ..
    echo "------------------------------------------------Git pull completed from $BRANCH------------------------------------------------"
fi

cd $CLONE_DIR || exit
rm -rf ./package-lock.json

./deploy/build.sh

./deploy/admin-dockerize.sh
