<h2 align="center">
Chat with your vault, locally or with your favorite models
</h2>

> [!QUESTION] **Why juggle browser tabs or copied prompts?**
> Keep conversations inside Obsidian with Smart Chat and let your vault supply the context.

> [!WARNING] **The Problem**
> Switching between external chat tools and your notes breaks focus, loses context, and risks sending private data to the wrong place.

> [!SUCCESS] **The Payoff**
> Stay in flow: start a thread, pull in notes with `@`, review context before sending, and answer follow-ups without leaving Obsidian.

# Smart Chat
Smart Chat adds a dedicated chat view powered by the shared **Smart Environment**. It keeps conversations close to your vault, supports local models (like Ollama), and upgrades to Smart Chat Pro for multi-provider workflows.

## What Smart Chat does
- Context-aware responses sourced from your vault via Smart Environment.
- Private & local-first defaults; choose when anything leaves your machine.
- Threaded conversations with system prompts, context review, and action hooks.
- Bring your own models: local (Ollama) or Smart Chat Pro providers (OpenAI, Anthropic, Gemini, Azure, and more).

## Core vs Pro
- **Core**: 
- **Smart Chat Pro**: API provider adapters, model routing per thread, streaming and tool-calling support via Smart Environment actions.

## Quick start
> [!TLDR] 3 steps
> 1. Install **Smart Chat** from Obsidian Community plugins and enable it.
> 2. Open the **Smart Chat** view from the ribbon or sidebar.
> 3. Choose a model: local Ollama (default) or Smart Chat Pro provider, then start chatting with `@` to pull context.

### Local-first with Ollama
- Install [Ollama](https://ollama.ai/) and ensure it is running.
- In **Settings → Smart Chat**, set **Host** to your Ollama endpoint.
- If using Open WebUI, set **Path** to `api/chat/completions`.

### Cloud and Pro providers
- Install **Smart Chat Pro** to unlock provider adapters.
- Add API keys in **Settings → Smart Chat Pro** and pick the provider/model per thread.
- Keep sensitive data local by only sending context to the providers you explicitly choose.

## Use it
- Start or resume threads from the Smart Chat view.
- Type `@` to select notes for context; Smart Environment suggests relevant notes automatically.
- Edit the system prompt per thread to steer responses.
- Review retrieved context before sending so only the right notes are shared.

## FAQs
<details><summary><span style="--font-weight: var(--h3-weight); font-variant: var(--h3-variant); letter-spacing: var(--h3-letter-spacing); line-height: var(--h3-line-height); font-size: var(--h3-size); color: var(--h3-color); font-weight: var(--font-weight); font-style: var(--h3-style); font-family: var(--h3-font); cursor: pointer;">Can I use Smart Chat with Open WebUI (Ollama)?</span></summary>Yes. Set the `path` setting to `api/chat/completions` in **Settings → Smart Chat → Path** so requests reach the Open WebUI endpoint.</details><br>
<details><summary><span style="--font-weight: var(--h3-weight); font-variant: var(--h3-variant); letter-spacing: var(--h3-letter-spacing); line-height: var(--h3-line-height); font-size: var(--h3-size); color: var(--h3-color); font-weight: var(--font-weight); font-style: var(--h3-style); font-family: var(--h3-font); cursor: pointer;">Where does my data live?</span></summary>Core Smart Chat keeps conversations, context, and embeddings inside your vault via Smart Environment. Only providers you configure in Smart Chat Pro receive data you choose to send.</details><br>
<details><summary><span style="--font-weight: var(--h3-weight); font-variant: var(--h3-variant); letter-spacing: var(--h3-letter-spacing); line-height: var(--h3-line-height); font-size: var(--h3-size); color: var(--h3-color); font-weight: var(--font-weight); font-style: var(--h3-style); font-family: var(--h3-font); cursor: pointer;">How do I switch models?</span></summary>Each thread stores its own model selection. Use the thread settings to pick an Ollama model or a Smart Chat Pro provider without restarting Obsidian.</details><br>
<details><summary><span style="--font-weight: var(--h3-weight); font-variant: var(--h3-variant); letter-spacing: var(--h3-letter-spacing); line-height: var(--h3-line-height); font-size: var(--h3-size); color: var(--h3-color); font-weight: var(--font-weight); font-style: var(--h3-style); font-family: var(--h3-font); cursor: pointer;">Does Smart Chat work with Smart Connections?</span></summary>Yes. Smart Connections handles discovery across your vault, while Smart Chat handles conversations. Both run on Smart Environment so context, models, and actions stay in sync.</details><br>

## Built for you
> Smart Chat started as a way to keep conversations and context together. The Obsidian community has helped shape it into a flexible interface for local-first AI workflows.

