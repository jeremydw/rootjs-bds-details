import { customElement, property } from 'lit/decorators.js';
import { html, LitElement, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './bds-details.scss?inline';

@customElement('bds-details')
class MyElement extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true })
  open = false;

  render() {
    return html`
      <div class="container">
        <button @click=${() => (this.open = !this.open)}>Toggle</button>
        <div class=${classMap({
          content: true,
          'content:open': this.open,
        })}>
          <div class="content__inner">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      'bds-details': preact.JSX.HTMLAttributes;
    }
  }
}