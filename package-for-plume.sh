#!/bin/bash

# Create a clean directory for Plume
mkdir -p plume-integration
cp -r src/blockchain/* plume-integration/

# Create the zip file
zip -r atzenwin-plume-integration.zip plume-integration

# Clean up
rm -rf plume-integration

echo "Created atzenwin-plume-integration.zip"
echo "Please share this file with Plume's team" 