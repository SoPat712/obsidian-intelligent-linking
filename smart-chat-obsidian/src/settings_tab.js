import { SmartPluginSettingsTab } from 'obsidian-smart-env';
import settings_tab_css from './settings_tab.css' with { type: 'css' };
import { SmartChatView } from './smart_chat.obsidian.js';

/**
 * @class SmartChatSettingTab
 * @extends SmartPluginSettingsTab
 * @description
 * Obsidian Settings tab for "Smart Chat" plugin.
 * Renders settings using the plugin's `env.smart_view` instance
 * and the plugin's `settings_config` object, attaching the results
 * to the display container.
 */
export class SmartChatSettingTab extends SmartPluginSettingsTab {
  /**
   * @param {import('obsidian').App} app - The current Obsidian app instance
   * @param {import('./main.js').default} plugin - The main plugin object
   */
  constructor(app, plugin) {
    super(app, plugin);
    /** @type {import('./main.js').default} */
    this.plugin = plugin;
    this.name = 'Smart Chat';
    this.id = 'smart-chat';
  }

  async render_plugin_settings(container) {
    if (!container) return;
    container.empty?.();
    if (!this.env) {
      container.createEl('p', { text: 'Smart Environment not yet initialized.' });
      return;
    }

    this.env.smart_view.apply_style_sheet(settings_tab_css);

    const chat_container = container.createDiv({ cls: 'smart-chat-settings-container' });
    const model_container = container.createDiv({ cls: 'smart-chat-model-settings-container' });

    const chat_fragment = await this.render_component('chat_thread_settings', this.env);
    if (chat_fragment) {
      chat_container.empty?.();
      chat_container.createEl('h3', { text: 'Chat' });
      chat_container.appendChild(chat_fragment);
    }

    const model_fragment = await this.render_component('chat_model_settings', this.env);
    if (model_fragment) {
      model_container.empty?.();
      model_container.createEl('h3', { text: 'Model' });
      model_container.appendChild(model_fragment);
      const chat_model_dropdown = model_container.querySelector('[data-name="Chat Model"] select');
      chat_model_dropdown?.addEventListener('change', () => {
        SmartChatView.open(this.plugin);
      });
    }
  }

}
