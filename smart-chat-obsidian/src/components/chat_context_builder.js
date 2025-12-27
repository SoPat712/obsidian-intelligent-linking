/**
 * build_html
 * @param {import('smart-contexts').SmartContext} ctx
 * @param {Object} opts
 * @returns {string}
 */
export function build_html(ctx, opts = {}) {
  return `<div>
    <div class="sc-context-builder sc-chat-context-builder" data-context-key="${ctx.data.key}">
    </div>
  </div>`;
}

/**
 * render
 * @deprecated v1 chat components are deprecated and will be removed in a future release.
 * @param {import('smart-contexts').SmartContext} ctx
 * @param {Object} opts
 * @returns {Promise<HTMLElement>}
 */
export async function render(ctx, opts = {}) {
  const html = build_html.call(this, ctx, opts);
  const frag = this.create_doc_fragment(html);
  const ctx_container = frag.querySelector('.sc-context-builder');
  await post_process.call(this, ctx, ctx_container, opts);
  return ctx_container;
}

/**
 * post_process – attaches chat‑specific behaviour.
 * Adds **Edit**, **Send**, and the new **Retrieve more** button.
 *
 * @param {import('smart-contexts').SmartContext} ctx
 * @param {HTMLElement} container
 * @param {Object} opts  – expects { completion }
 * @returns {Promise<HTMLElement>}
 */
export async function post_process(ctx, container, opts = {}) {
  const env        = ctx?.env;
  const completion = opts.completion;
  const thread          = completion.thread;

  if (completion !== thread?.current_completion) {
    container.classList.add('sc-context-done');
  }

  this.empty(container);
  container.appendChild(
    await ctx.env.render_component('smart_context_item', ctx, { ...opts })
  );

  return container;
}
