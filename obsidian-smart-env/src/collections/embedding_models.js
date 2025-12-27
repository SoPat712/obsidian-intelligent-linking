// All providers enabled - no pro restrictions in this fork
import base from 'smart-models/collections/embedding_models.js';
import transformers from '../adapters/embedding-model/transformers_iframe.js';
import { SmartEmbedOpenAIAdapter } from "smart-embed-model/adapters/openai.js";
import { SmartEmbedOllamaAdapter } from "smart-embed-model/adapters/ollama.js";
import { GeminiEmbedModelAdapter } from "smart-embed-model/adapters/gemini.js";
import { LmStudioEmbedModelAdapter } from "smart-embed-model/adapters/lm_studio.js";
import { SmartEmbedOpenRouterAdapter } from "smart-embed-model/adapters/open_router.js";

base.providers = {
  transformers,
  openai: {
    class: SmartEmbedOpenAIAdapter,
  },
  ollama: {
    class: SmartEmbedOllamaAdapter,
  },
  google: {
    class: GeminiEmbedModelAdapter,
  },
  lm_studio: {
    class: LmStudioEmbedModelAdapter,
  },
  open_router: {
    class: SmartEmbedOpenRouterAdapter,
  },
};
export default base;
