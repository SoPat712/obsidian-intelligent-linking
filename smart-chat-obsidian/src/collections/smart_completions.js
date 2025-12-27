import { smart_completions } from "smart-completions";
import { ThreadCompletionAdapter } from "../adapters/smart-completions/thread.js";
import { SmartCompletionContextAdapter } from "../adapters/smart-completions/context.js";
smart_completions.completion_adapters['ThreadCompletionAdapter'] = ThreadCompletionAdapter;
smart_completions.completion_adapters['SmartCompletionContextAdapter'] = SmartCompletionContextAdapter;

export default smart_completions;
