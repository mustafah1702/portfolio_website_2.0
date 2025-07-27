#!/bin/bash

set -e  # Exit if any command fails

echo "🚀 Starting deployment..."

# Step 1: Checkout main and build
echo "🔁 Switching to main branch..."
git checkout main

echo "🔨 Building project with Vite..."
npm run build

# Step 2: Create temp folder for deployment artifacts
echo "📦 Preparing temp build folder..."
rm -rf deploy-temp
mkdir deploy-temp
cp -r dist/* deploy-temp/
cp CNAME deploy-temp/

# Step 3: Switch to prod-branch
echo "🚀 Switching to prod-branch..."
git checkout prod-branch

# Step 4: Clean existing files
echo "🧹 Cleaning prod-branch..."
git rm -rf .
rm -rf *

# Step 5: Copy build to prod-branch
echo "📁 Copying build to root..."
cp -r ../portfolio_website/deploy-temp/* .
touch .nojekyll

# Step 6: Commit and push
echo "📤 Committing and pushing to prod-branch..."
git add .
git commit -m "🚀 Deploy latest build"
git push -f origin prod-branch

# Step 7: Cleanup and switch back
echo "🔁 Switching back to main..."
git checkout main
rm -rf deploy-temp

echo "✅ Deployment complete! Visit: https://aboutmustafa.com"
