#!/bin/bash
# Quick deploy script for Smart Connections development

if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh /path/to/your/vault"
  echo "Example: ./deploy.sh ~/Documents/DevVault"
  exit 1
fi

VAULT_PATH="$1"
PLUGIN_DIR="$VAULT_PATH/.obsidian/plugins/smart-connections"

echo "Deploying Smart Connections to: $PLUGIN_DIR"

# Create plugin directory if it doesn't exist
mkdir -p "$PLUGIN_DIR"

# Copy built files
cp obsidian-smart-connections/dist/main.js "$PLUGIN_DIR/"
cp obsidian-smart-connections/dist/manifest.json "$PLUGIN_DIR/"
cp obsidian-smart-connections/dist/styles.css "$PLUGIN_DIR/"

# Create .hotreload file for the Hot Reload plugin
touch "$PLUGIN_DIR/.hotreload"

echo "✅ Deployment complete!"
echo "🔄 Reload Obsidian or use Hot Reload plugin to see changes"
