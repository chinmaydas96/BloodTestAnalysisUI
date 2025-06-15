#!/bin/bash

# Remove package-lock.json to ensure it gets regenerated
if [ -f "package-lock.json" ]; then
  echo "Removing package-lock.json to ensure clean install..."
  rm package-lock.json
fi

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install --legacy-peer-deps
else
  echo "Reinstalling dependencies to ensure consistency..."
  rm -rf node_modules
  npm install --legacy-peer-deps
fi

# Build the React app
echo "Building React app..."
npm run build

# Check if build was successful
if [ ! -d "build" ]; then
  echo "Error: Build failed. The 'build' directory was not created."
  exit 1
fi

# Create a deployment ZIP file
echo "Creating deployment ZIP file..."
cd build
zip -r ../deployment.zip *
cd ..

echo "Deployment package created: deployment.zip"
echo "You can now upload this file to AWS Amplify Console."
echo "Follow the instructions in README.md for deployment options." 