// All providers enabled - no pro restrictions in this fork
import base from 'smart-models/collections/chat_completion_models.js';
import open_router from "smart-models/adapters/chat-completion/open_router.js";
import anthropic from "smart-models/adapters/chat-completion/anthropic.js";
import cohere from "smart-models/adapters/chat-completion/cohere.js";
import deepseek from "smart-models/adapters/chat-completion/deepseek.js";
import google from "smart-models/adapters/chat-completion/google.js";
import groq from "smart-models/adapters/chat-completion/groq.js";
import lm_studio from "smart-models/adapters/chat-completion/lm_studio.js";
import ollama from "smart-models/adapters/chat-completion/ollama.js";
import openai from "smart-models/adapters/chat-completion/openai.js";
import xai from "smart-models/adapters/chat-completion/xai.js";

base.providers = {
  open_router,
  anthropic,
  cohere,
  deepseek,
  google,
  groq,
  lm_studio,
  ollama,
  openai,
  xai,
};
export default base;
