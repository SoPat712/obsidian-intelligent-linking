#!/bin/bash

# deploy script for Smart Connections plugin
# Usage: ./deploy.sh <vault_path>

if [ -z "$1" ]; then
    echo "Usage: ./deploy.sh <vault_path>"
    echo "Example: ./deploy.sh DevVault"
    exit 1
fi

VAULT="$1"

# Check if exists
if [ ! -d "$VAULT" ]; then
    echo "Error: Vault '$VAULT' not found"
    exit 1
fi

# Build first
echo ""
echo "Building plugin..."
(cd obsidian-smart-connections && npm run build)

if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

# Find all folders
echo ""
echo "Looking for plugin folders in '$VAULT'..."
echo ""

PRIORITY_FOLDERS=()
OTHER_FOLDERS=()

while IFS= read -r dir; do
    name=$(basename "$dir")
    # Prioritize obsidian/plugin folders
    if [[ "$name" == *obsidian* ]] || [[ "$name" == *plugin* ]] || [[ "$name" == *Obsidian* ]] || [[ "$name" == *Plugin* ]]; then
        PRIORITY_FOLDERS+=("$name")
    else
        OTHER_FOLDERS+=("$name")
    fi
done < <(find "$VAULT" -maxdepth 1 -type d ! -name "$(basename "$VAULT")")

ALL_FOLDERS=("${PRIORITY_FOLDERS[@]}" "${OTHER_FOLDERS[@]}")

if [ ${#ALL_FOLDERS[@]} -eq 0 ]; then
    echo "No folders found in vault"
    exit 1
fi

echo "Select a folder for the plugin:"
echo "--------------------------------"
i=1
for folder in "${ALL_FOLDERS[@]}"; do
    echo "  $i) $folder"
    ((i++))
done
echo ""

read -p "Enter number: " choice

if ! [[ "$choice" =~ ^[0-9]+$ ]] || [ "$choice" -lt 1 ] || [ "$choice" -gt ${#ALL_FOLDERS[@]} ]; then
    echo "Invalid choice"
    exit 1
fi

SELECTED="${ALL_FOLDERS[$((choice-1))]}"
DEST="$VAULT/$SELECTED/plugins/smart-connections"

echo ""
echo "Deploying to: $DEST"

# Create plugin folder if needed
mkdir -p "$DEST"

# Copy plugin files from dist
if [ -f "obsidian-smart-connections/dist/main.js" ]; then
    cp obsidian-smart-connections/dist/main.js "$DEST/"
    cp obsidian-smart-connections/dist/manifest.json "$DEST/"
    cp obsidian-smart-connections/dist/styles.css "$DEST/" 2>/dev/null
    echo "Done! Plugin deployed to $DEST"
else
    echo "Error: Build files not found. Run 'npm run build' in obsidian-smart-connections first."
    exit 1
fi
