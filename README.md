# Obsidian Intelligent Linking

A fork of brianpetro's Smart Connections ecosystem, reverted to before the licensing change.

This is my attempt to give back a little to the community. I like OSS, and I really hate paywalls.

This fork removes all pro features and enables them for all. I'll start working on new features only once feature parity has been achieved with the original.

## Quick Start

1. Clone the repo with submodules:
```bash
git clone https://github.com/SoPat712/obsidian-intelligent-linking.git
cd obsidian-intelligent-linking
git submodule update --init --recursive
```

2. Install dependencies — the jsbrains packages must be installed at two levels so they can resolve each other:
```bash
# Install all jsbrains sub-packages at the jsbrains root
cd jsbrains
npm install --ignore-scripts \
  ./smart-actions ./smart-blocks ./smart-chat-model ./smart-cluster-groups \
  ./smart-clusters ./smart-collections ./smart-completions ./smart-components \
  ./smart-contexts ./smart-directories ./smart-embed-model ./smart-entities \
  ./smart-environment ./smart-events ./smart-fs ./smart-groups \
  ./smart-http-request ./smart-model ./smart-notices ./smart-rank-model \
  ./smart-settings ./smart-sources ./smart-types ./smart-utils ./smart-view
cd ..

# Install plugin dependencies including all jsbrains packages
cd obsidian-smart-connections
npm install --ignore-scripts \
  ../jsbrains/smart-actions ../jsbrains/smart-blocks ../jsbrains/smart-chat-model \
  ../jsbrains/smart-cluster-groups ../jsbrains/smart-clusters ../jsbrains/smart-collections \
  ../jsbrains/smart-completions ../jsbrains/smart-components ../jsbrains/smart-contexts \
  ../jsbrains/smart-directories ../jsbrains/smart-embed-model ../jsbrains/smart-entities \
  ../jsbrains/smart-environment ../jsbrains/smart-events ../jsbrains/smart-fs \
  ../jsbrains/smart-groups ../jsbrains/smart-http-request ../jsbrains/smart-model \
  ../jsbrains/smart-notices ../jsbrains/smart-rank-model ../jsbrains/smart-settings \
  ../jsbrains/smart-sources ../jsbrains/smart-types ../jsbrains/smart-utils ../jsbrains/smart-view
cd ..
```

3. Build and deploy:
```bash
./deploy.sh /path/to/your/vault
```

The script will list all folders in your vault (prioritizing `.obsidian` and similar), let you pick one, and copy the plugin files into `<selected>/plugins/smart-connections/`.

4. Restart Obsidian and enable the plugin in Settings → Community Plugins.

> **Note for contributors:** I recommend the Hot Reload plugin by pjeby. It makes testing your code a LOT easier.

## Why This Fork Exists

The original Smart Connections project changed its license a little while ago and started gating previously free features behind a paywall. This fork:
- Reverts to the last fully open version
- (Plans to) merge all "supporter-only" features into the free codebase

## Architecture

This project is a collection of modular packages that work together:

```
jsbrains/                   # Core libraries (still open source upstream)
-> smart-chat-model/        # Chat API adapters (OpenAI, Anthropic, etc.)
-> smart-embed-model/       # Embedding model adapters

obsidian-smart-connections/  # Main plugin (this fork)
obsidian-smart-env/          # Shared Obsidian environment (also open source upstream)
smart-chat-obsidian/         # Standalone chat plugin
smart-context-obsidian/      # Context/clipboard tools
```

The Obsidian plugins (`obsidian-smart-connections`, etc.) are the actual plugins you install. They use the jsbrains modules under the hood for stuff.

## Building

Each plugin builds with esbuild. Output goes to `dist/`:

```bash
# Main plugin
cd obsidian-smart-connections && npm run build
```

but to be honest, ./deploy.sh {vault_path} handles that already, so you can just run that instead and not worry about building this way for the most part 

## Development

If you want to help on this:

1. Clone the repo (with submodules if applicable)
2. Run `npm install` in the plugin folder you're working on
3. Make your changes
4. Build and deploy to a test vault with `./deploy.sh {vault_path}
5. Check the Obsidian developer console for errors

## Contributing

PRs welcome. The main goals are:
- Remove any remaining pro/premium checks
- Keep it working
- EVENTUALLY start adding new code and new features 

## License

This fork maintains the original open source license from before the licensing change.