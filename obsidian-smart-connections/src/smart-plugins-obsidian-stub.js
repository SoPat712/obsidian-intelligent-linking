// Stub for smart-plugins-obsidian/utils.js
// The original package handled paywall OAuth and plugin installation
// from brianpetro's server. This fork removes that functionality.

export function get_smart_server_url() { return ''; }
export async function fetch_plugin_zip() { return null; }
export async function parse_zip_into_files() { return { files: {}, pluginManifest: null }; }
export async function write_files_with_adapter() {}
export async function enable_plugin() {}
