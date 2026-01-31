#!/bin/bash

echo "========================================="
echo "Athens School of Selling - Local Setup"
echo "========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found. Please run this script from the athens-marketing-site directory."
    exit 1
fi

echo "Step 1: Fixing npm permissions..."
sudo chown -R 501:20 "/Users/briandougherty/.npm"

if [ $? -ne 0 ]; then
    echo "Failed to fix permissions. You may need to enter your password."
    exit 1
fi

echo "✓ Permissions fixed"
echo ""

echo "Step 2: Cleaning previous installations..."
rm -rf node_modules package-lock.json
echo "✓ Cleaned"
echo ""

echo "Step 3: Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "Failed to install dependencies."
    exit 1
fi

echo "✓ Dependencies installed"
echo ""

echo "========================================="
echo "Starting development server..."
echo "========================================="
echo ""
echo "The website will open at: http://localhost:5173"
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
