/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  IVM,
} from './components/tag-pay-profile-final/tag-pay-profile-final';

declare global {
  interface HTMLDemoProfileStoreElement extends HTMLStencilElement {

  }
  var HTMLDemoProfileStoreElement: {
    prototype: HTMLDemoProfileStoreElement;
    new (): HTMLDemoProfileStoreElement;
  };
  interface HTMLElementTagNameMap {
    'demo-profile-store': HTMLDemoProfileStoreElement;
  }
  interface ElementTagNameMap {
    'demo-profile-store': HTMLDemoProfileStoreElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'demo-profile-store': JSXElements.DemoProfileStoreAttributes;
    }
  }
  namespace JSXElements {
    export interface DemoProfileStoreAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLTagAccessLogoElement extends HTMLStencilElement {

  }
  var HTMLTagAccessLogoElement: {
    prototype: HTMLTagAccessLogoElement;
    new (): HTMLTagAccessLogoElement;
  };
  interface HTMLElementTagNameMap {
    'tag-access-logo': HTMLTagAccessLogoElement;
  }
  interface ElementTagNameMap {
    'tag-access-logo': HTMLTagAccessLogoElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-access-logo': JSXElements.TagAccessLogoAttributes;
    }
  }
  namespace JSXElements {
    export interface TagAccessLogoAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLTagAvatarElement extends HTMLStencilElement {
    /**
     * placeholder text when there is no image 
     */
    'placeholder': string;
    /**
     * size of the avatar: default 45px small 36px 
     */
    'size': string;
    /**
     * source of the avatar image 
     */
    'src': string;
  }
  var HTMLTagAvatarElement: {
    prototype: HTMLTagAvatarElement;
    new (): HTMLTagAvatarElement;
  };
  interface HTMLElementTagNameMap {
    'tag-avatar': HTMLTagAvatarElement;
  }
  interface ElementTagNameMap {
    'tag-avatar': HTMLTagAvatarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-avatar': JSXElements.TagAvatarAttributes;
    }
  }
  namespace JSXElements {
    export interface TagAvatarAttributes extends HTMLAttributes {
      /**
       * placeholder text when there is no image 
       */
      'placeholder'?: string;
      /**
       * size of the avatar: default 45px small 36px 
       */
      'size'?: string;
      /**
       * source of the avatar image 
       */
      'src'?: string;
    }
  }
}


declare global {
  interface HTMLTagBadgeElement extends HTMLStencilElement {
    'accent': string;
    'value': string;
  }
  var HTMLTagBadgeElement: {
    prototype: HTMLTagBadgeElement;
    new (): HTMLTagBadgeElement;
  };
  interface HTMLElementTagNameMap {
    'tag-badge': HTMLTagBadgeElement;
  }
  interface ElementTagNameMap {
    'tag-badge': HTMLTagBadgeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-badge': JSXElements.TagBadgeAttributes;
    }
  }
  namespace JSXElements {
    export interface TagBadgeAttributes extends HTMLAttributes {
      'accent'?: string;
      'value'?: string;
    }
  }
}


declare global {
  interface HTMLTagButtonElement extends HTMLStencilElement {
    /**
     * Colour of the button 
     */
    'accent': string;
    'size': string;
  }
  var HTMLTagButtonElement: {
    prototype: HTMLTagButtonElement;
    new (): HTMLTagButtonElement;
  };
  interface HTMLElementTagNameMap {
    'tag-button': HTMLTagButtonElement;
  }
  interface ElementTagNameMap {
    'tag-button': HTMLTagButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-button': JSXElements.TagButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface TagButtonAttributes extends HTMLAttributes {
      /**
       * Colour of the button 
       */
      'accent'?: string;
      'size'?: string;
    }
  }
}


declare global {
  interface HTMLTagCardDocElement extends HTMLStencilElement {
    'action': string;
    'heading': string;
    'when': string;
    'who': string;
    'whoref': string;
  }
  var HTMLTagCardDocElement: {
    prototype: HTMLTagCardDocElement;
    new (): HTMLTagCardDocElement;
  };
  interface HTMLElementTagNameMap {
    'tag-card-doc': HTMLTagCardDocElement;
  }
  interface ElementTagNameMap {
    'tag-card-doc': HTMLTagCardDocElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-card-doc': JSXElements.TagCardDocAttributes;
    }
  }
  namespace JSXElements {
    export interface TagCardDocAttributes extends HTMLAttributes {
      'action'?: string;
      'heading'?: string;
      'when'?: string;
      'who'?: string;
      'whoref'?: string;
    }
  }
}


declare global {
  interface HTMLTagCardFinanceElement extends HTMLStencilElement {
    /**
     * Heading used to communicate action 
     */
    'heading': string;
    /**
     * Main icon above heading  
     */
    'icon': string;
    /**
     * Details of the action 
     */
    'message': string;
    /**
     * Identify the status of the action warning or success 
     */
    'status': string;
  }
  var HTMLTagCardFinanceElement: {
    prototype: HTMLTagCardFinanceElement;
    new (): HTMLTagCardFinanceElement;
  };
  interface HTMLElementTagNameMap {
    'tag-card-finance': HTMLTagCardFinanceElement;
  }
  interface ElementTagNameMap {
    'tag-card-finance': HTMLTagCardFinanceElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-card-finance': JSXElements.TagCardFinanceAttributes;
    }
  }
  namespace JSXElements {
    export interface TagCardFinanceAttributes extends HTMLAttributes {
      /**
       * Heading used to communicate action 
       */
      'heading'?: string;
      /**
       * Main icon above heading  
       */
      'icon'?: string;
      /**
       * Details of the action 
       */
      'message'?: string;
      /**
       * Identify the status of the action warning or success 
       */
      'status'?: string;
    }
  }
}


declare global {
  interface HTMLTagCardHeaderElement extends HTMLStencilElement {
    /**
     * Heading text 
     */
    'heading': string;
  }
  var HTMLTagCardHeaderElement: {
    prototype: HTMLTagCardHeaderElement;
    new (): HTMLTagCardHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'tag-card-header': HTMLTagCardHeaderElement;
  }
  interface ElementTagNameMap {
    'tag-card-header': HTMLTagCardHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-card-header': JSXElements.TagCardHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface TagCardHeaderAttributes extends HTMLAttributes {
      /**
       * Heading text 
       */
      'heading'?: string;
    }
  }
}


declare global {
  interface HTMLTagCardTaskElement extends HTMLStencilElement {
    /**
     * The left border accent colour
     */
    'accent': string;
    'avatarplaceholder': string;
    'avatarsrc': string;
    'heading': string;
    'subtitle': string;
    'when': string;
    'who': string;
  }
  var HTMLTagCardTaskElement: {
    prototype: HTMLTagCardTaskElement;
    new (): HTMLTagCardTaskElement;
  };
  interface HTMLElementTagNameMap {
    'tag-card-task': HTMLTagCardTaskElement;
  }
  interface ElementTagNameMap {
    'tag-card-task': HTMLTagCardTaskElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-card-task': JSXElements.TagCardTaskAttributes;
    }
  }
  namespace JSXElements {
    export interface TagCardTaskAttributes extends HTMLAttributes {
      /**
       * The left border accent colour
       */
      'accent'?: string;
      'avatarplaceholder'?: string;
      'avatarsrc'?: string;
      'heading'?: string;
      'subtitle'?: string;
      'when'?: string;
      'who'?: string;
    }
  }
}


declare global {
  interface HTMLTagCardWidgetElement extends HTMLStencilElement {
    /**
     * The left border accent colour
     */
    'accent': string;
    /**
     * Application icon. Either the image or icon is used, the image is used over the icon when both are used.
     */
    'applicationicon': string;
    /**
     * Application image. Either the image or icon is used, the image is used over the icon when both are used.
     */
    'applicationimage': string;
    /**
     * Application name
     */
    'applicationname': string;
    'buttonclick': (e: Event) => void;
    /**
     * Icon for the button. ```buttontext``` or ```buttonicon``` must exist for button to appear.
     */
    'buttonicon': string;
    /**
     * Text used for the button. ```buttontext``` or ```buttonicon``` must exist for button to appear.
     */
    'buttontext': string;
    /**
     * The description of the text
     */
    'description': string;
    /**
     * The value of text for the widget
     */
    'value': string;
  }
  var HTMLTagCardWidgetElement: {
    prototype: HTMLTagCardWidgetElement;
    new (): HTMLTagCardWidgetElement;
  };
  interface HTMLElementTagNameMap {
    'tag-card-widget': HTMLTagCardWidgetElement;
  }
  interface ElementTagNameMap {
    'tag-card-widget': HTMLTagCardWidgetElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-card-widget': JSXElements.TagCardWidgetAttributes;
    }
  }
  namespace JSXElements {
    export interface TagCardWidgetAttributes extends HTMLAttributes {
      /**
       * The left border accent colour
       */
      'accent'?: string;
      /**
       * Application icon. Either the image or icon is used, the image is used over the icon when both are used.
       */
      'applicationicon'?: string;
      /**
       * Application image. Either the image or icon is used, the image is used over the icon when both are used.
       */
      'applicationimage'?: string;
      /**
       * Application name
       */
      'applicationname'?: string;
      'buttonclick'?: (e: Event) => void;
      /**
       * Icon for the button. ```buttontext``` or ```buttonicon``` must exist for button to appear.
       */
      'buttonicon'?: string;
      /**
       * Text used for the button. ```buttontext``` or ```buttonicon``` must exist for button to appear.
       */
      'buttontext'?: string;
      /**
       * The description of the text
       */
      'description'?: string;
      /**
       * The value of text for the widget
       */
      'value'?: string;
    }
  }
}


declare global {
  interface HTMLTagCardElement extends HTMLStencilElement {
    'accent': string;
  }
  var HTMLTagCardElement: {
    prototype: HTMLTagCardElement;
    new (): HTMLTagCardElement;
  };
  interface HTMLElementTagNameMap {
    'tag-card': HTMLTagCardElement;
  }
  interface ElementTagNameMap {
    'tag-card': HTMLTagCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-card': JSXElements.TagCardAttributes;
    }
  }
  namespace JSXElements {
    export interface TagCardAttributes extends HTMLAttributes {
      'accent'?: string;
    }
  }
}


declare global {
  interface HTMLTagDatepickerElement extends HTMLStencilElement {
    'componentWillLoad': () => void;
    /**
     * The id of the element used for generating internal ids
     */
    'id': string;
    'label': string;
    /**
     * The placeholder text used for the input
     */
    'placeholder': string;
  }
  var HTMLTagDatepickerElement: {
    prototype: HTMLTagDatepickerElement;
    new (): HTMLTagDatepickerElement;
  };
  interface HTMLElementTagNameMap {
    'tag-datepicker': HTMLTagDatepickerElement;
  }
  interface ElementTagNameMap {
    'tag-datepicker': HTMLTagDatepickerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-datepicker': JSXElements.TagDatepickerAttributes;
    }
  }
  namespace JSXElements {
    export interface TagDatepickerAttributes extends HTMLAttributes {
      /**
       * The id of the element used for generating internal ids
       */
      'id'?: string;
      'label'?: string;
      /**
       * The placeholder text used for the input
       */
      'placeholder'?: string;
    }
  }
}


declare global {
  interface HTMLTagFormGroupSelectElement extends HTMLStencilElement {
    'label': string;
  }
  var HTMLTagFormGroupSelectElement: {
    prototype: HTMLTagFormGroupSelectElement;
    new (): HTMLTagFormGroupSelectElement;
  };
  interface HTMLElementTagNameMap {
    'tag-form-group-select': HTMLTagFormGroupSelectElement;
  }
  interface ElementTagNameMap {
    'tag-form-group-select': HTMLTagFormGroupSelectElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-form-group-select': JSXElements.TagFormGroupSelectAttributes;
    }
  }
  namespace JSXElements {
    export interface TagFormGroupSelectAttributes extends HTMLAttributes {
      'label'?: string;
    }
  }
}


declare global {
  interface HTMLTagFormGroupElement extends HTMLStencilElement {
    /**
     * Placeholder text 
     */
    'label': string;
    'placeholder': string;
    'value': string;
  }
  var HTMLTagFormGroupElement: {
    prototype: HTMLTagFormGroupElement;
    new (): HTMLTagFormGroupElement;
  };
  interface HTMLElementTagNameMap {
    'tag-form-group': HTMLTagFormGroupElement;
  }
  interface ElementTagNameMap {
    'tag-form-group': HTMLTagFormGroupElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-form-group': JSXElements.TagFormGroupAttributes;
    }
  }
  namespace JSXElements {
    export interface TagFormGroupAttributes extends HTMLAttributes {
      /**
       * Placeholder text 
       */
      'label'?: string;
      'placeholder'?: string;
      'value'?: string;
    }
  }
}


declare global {
  interface HTMLTagFormElement extends HTMLStencilElement {

  }
  var HTMLTagFormElement: {
    prototype: HTMLTagFormElement;
    new (): HTMLTagFormElement;
  };
  interface HTMLElementTagNameMap {
    'tag-form': HTMLTagFormElement;
  }
  interface ElementTagNameMap {
    'tag-form': HTMLTagFormElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-form': JSXElements.TagFormAttributes;
    }
  }
  namespace JSXElements {
    export interface TagFormAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLTagIconSetElement extends HTMLStencilElement {
    /**
     * Set the fill colour of the icon 
     */
    'accent': string;
    /**
     * The name of the icon 
     */
    'icon': string;
  }
  var HTMLTagIconSetElement: {
    prototype: HTMLTagIconSetElement;
    new (): HTMLTagIconSetElement;
  };
  interface HTMLElementTagNameMap {
    'tag-icon-set': HTMLTagIconSetElement;
  }
  interface ElementTagNameMap {
    'tag-icon-set': HTMLTagIconSetElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-icon-set': JSXElements.TagIconSetAttributes;
    }
  }
  namespace JSXElements {
    export interface TagIconSetAttributes extends HTMLAttributes {
      /**
       * Set the fill colour of the icon 
       */
      'accent'?: string;
      /**
       * The name of the icon 
       */
      'icon'?: string;
    }
  }
}


declare global {
  interface HTMLTagInputCheckboxElement extends HTMLStencilElement {
    'checked': boolean;
    'label': string;
  }
  var HTMLTagInputCheckboxElement: {
    prototype: HTMLTagInputCheckboxElement;
    new (): HTMLTagInputCheckboxElement;
  };
  interface HTMLElementTagNameMap {
    'tag-input-checkbox': HTMLTagInputCheckboxElement;
  }
  interface ElementTagNameMap {
    'tag-input-checkbox': HTMLTagInputCheckboxElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-input-checkbox': JSXElements.TagInputCheckboxAttributes;
    }
  }
  namespace JSXElements {
    export interface TagInputCheckboxAttributes extends HTMLAttributes {
      'checked'?: boolean;
      'label'?: string;
    }
  }
}


declare global {
  interface HTMLTagInputGroupElement extends HTMLStencilElement {

  }
  var HTMLTagInputGroupElement: {
    prototype: HTMLTagInputGroupElement;
    new (): HTMLTagInputGroupElement;
  };
  interface HTMLElementTagNameMap {
    'tag-input-group': HTMLTagInputGroupElement;
  }
  interface ElementTagNameMap {
    'tag-input-group': HTMLTagInputGroupElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-input-group': JSXElements.TagInputGroupAttributes;
    }
  }
  namespace JSXElements {
    export interface TagInputGroupAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLTagInputElement extends HTMLStencilElement {
    'disabled': boolean;
    'placeholder': string;
  }
  var HTMLTagInputElement: {
    prototype: HTMLTagInputElement;
    new (): HTMLTagInputElement;
  };
  interface HTMLElementTagNameMap {
    'tag-input': HTMLTagInputElement;
  }
  interface ElementTagNameMap {
    'tag-input': HTMLTagInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-input': JSXElements.TagInputAttributes;
    }
  }
  namespace JSXElements {
    export interface TagInputAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'placeholder'?: string;
    }
  }
}


declare global {
  interface HTMLTagKGridElement extends HTMLStencilElement {
    'init': (config: object) => void;
  }
  var HTMLTagKGridElement: {
    prototype: HTMLTagKGridElement;
    new (): HTMLTagKGridElement;
  };
  interface HTMLElementTagNameMap {
    'tag-k-grid': HTMLTagKGridElement;
  }
  interface ElementTagNameMap {
    'tag-k-grid': HTMLTagKGridElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-k-grid': JSXElements.TagKGridAttributes;
    }
  }
  namespace JSXElements {
    export interface TagKGridAttributes extends HTMLAttributes {
      'onReady'?: (event: CustomEvent) => void;
    }
  }
}


declare global {
  interface HTMLTagKendoFormGroupSelectElement extends HTMLStencilElement {
    'label': string;
  }
  var HTMLTagKendoFormGroupSelectElement: {
    prototype: HTMLTagKendoFormGroupSelectElement;
    new (): HTMLTagKendoFormGroupSelectElement;
  };
  interface HTMLElementTagNameMap {
    'tag-kendo-form-group-select': HTMLTagKendoFormGroupSelectElement;
  }
  interface ElementTagNameMap {
    'tag-kendo-form-group-select': HTMLTagKendoFormGroupSelectElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-kendo-form-group-select': JSXElements.TagKendoFormGroupSelectAttributes;
    }
  }
  namespace JSXElements {
    export interface TagKendoFormGroupSelectAttributes extends HTMLAttributes {
      'label'?: string;
    }
  }
}


declare global {
  interface HTMLTagLayoutFlexColumnsElement extends HTMLStencilElement {

  }
  var HTMLTagLayoutFlexColumnsElement: {
    prototype: HTMLTagLayoutFlexColumnsElement;
    new (): HTMLTagLayoutFlexColumnsElement;
  };
  interface HTMLElementTagNameMap {
    'tag-layout-flex-columns': HTMLTagLayoutFlexColumnsElement;
  }
  interface ElementTagNameMap {
    'tag-layout-flex-columns': HTMLTagLayoutFlexColumnsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-layout-flex-columns': JSXElements.TagLayoutFlexColumnsAttributes;
    }
  }
  namespace JSXElements {
    export interface TagLayoutFlexColumnsAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLTagLayoutSidenavElement extends HTMLStencilElement {

  }
  var HTMLTagLayoutSidenavElement: {
    prototype: HTMLTagLayoutSidenavElement;
    new (): HTMLTagLayoutSidenavElement;
  };
  interface HTMLElementTagNameMap {
    'tag-layout-sidenav': HTMLTagLayoutSidenavElement;
  }
  interface ElementTagNameMap {
    'tag-layout-sidenav': HTMLTagLayoutSidenavElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-layout-sidenav': JSXElements.TagLayoutSidenavAttributes;
    }
  }
  namespace JSXElements {
    export interface TagLayoutSidenavAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLTagLayoutElement extends HTMLStencilElement {

  }
  var HTMLTagLayoutElement: {
    prototype: HTMLTagLayoutElement;
    new (): HTMLTagLayoutElement;
  };
  interface HTMLElementTagNameMap {
    'tag-layout': HTMLTagLayoutElement;
  }
  interface ElementTagNameMap {
    'tag-layout': HTMLTagLayoutElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-layout': JSXElements.TagLayoutAttributes;
    }
  }
  namespace JSXElements {
    export interface TagLayoutAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLTagMainHeaderElement extends HTMLStencilElement {
    'accent': string;
  }
  var HTMLTagMainHeaderElement: {
    prototype: HTMLTagMainHeaderElement;
    new (): HTMLTagMainHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'tag-main-header': HTMLTagMainHeaderElement;
  }
  interface ElementTagNameMap {
    'tag-main-header': HTMLTagMainHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-main-header': JSXElements.TagMainHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface TagMainHeaderAttributes extends HTMLAttributes {
      'accent'?: string;
    }
  }
}


declare global {
  interface HTMLTagMenuItemElement extends HTMLStencilElement {
    /**
     * The icon used to the left of the item text 
     */
    'i': string;
  }
  var HTMLTagMenuItemElement: {
    prototype: HTMLTagMenuItemElement;
    new (): HTMLTagMenuItemElement;
  };
  interface HTMLElementTagNameMap {
    'tag-menu-item': HTMLTagMenuItemElement;
  }
  interface ElementTagNameMap {
    'tag-menu-item': HTMLTagMenuItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-menu-item': JSXElements.TagMenuItemAttributes;
    }
  }
  namespace JSXElements {
    export interface TagMenuItemAttributes extends HTMLAttributes {
      /**
       * The icon used to the left of the item text 
       */
      'i'?: string;
    }
  }
}


declare global {
  interface HTMLTagMessageElement extends HTMLStencilElement {
    'accent': string;
  }
  var HTMLTagMessageElement: {
    prototype: HTMLTagMessageElement;
    new (): HTMLTagMessageElement;
  };
  interface HTMLElementTagNameMap {
    'tag-message': HTMLTagMessageElement;
  }
  interface ElementTagNameMap {
    'tag-message': HTMLTagMessageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-message': JSXElements.TagMessageAttributes;
    }
  }
  namespace JSXElements {
    export interface TagMessageAttributes extends HTMLAttributes {
      'accent'?: string;
    }
  }
}


declare global {
  interface HTMLTagNavbarElement extends HTMLStencilElement {

  }
  var HTMLTagNavbarElement: {
    prototype: HTMLTagNavbarElement;
    new (): HTMLTagNavbarElement;
  };
  interface HTMLElementTagNameMap {
    'tag-navbar': HTMLTagNavbarElement;
  }
  interface ElementTagNameMap {
    'tag-navbar': HTMLTagNavbarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-navbar': JSXElements.TagNavbarAttributes;
    }
  }
  namespace JSXElements {
    export interface TagNavbarAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLTagPayProfileFinalElement extends HTMLStencilElement {
    /**
     * Property description 
     */
    'vm': IVM;
  }
  var HTMLTagPayProfileFinalElement: {
    prototype: HTMLTagPayProfileFinalElement;
    new (): HTMLTagPayProfileFinalElement;
  };
  interface HTMLElementTagNameMap {
    'tag-pay-profile-final': HTMLTagPayProfileFinalElement;
  }
  interface ElementTagNameMap {
    'tag-pay-profile-final': HTMLTagPayProfileFinalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-pay-profile-final': JSXElements.TagPayProfileFinalAttributes;
    }
  }
  namespace JSXElements {
    export interface TagPayProfileFinalAttributes extends HTMLAttributes {
      'onPayProfileChange'?: (event: CustomEvent) => void;
      /**
       * Property description 
       */
      'vm'?: IVM;
    }
  }
}


declare global {
  interface HTMLTagPayWorkingPatternElement extends HTMLStencilElement {

  }
  var HTMLTagPayWorkingPatternElement: {
    prototype: HTMLTagPayWorkingPatternElement;
    new (): HTMLTagPayWorkingPatternElement;
  };
  interface HTMLElementTagNameMap {
    'tag-pay-working-pattern': HTMLTagPayWorkingPatternElement;
  }
  interface ElementTagNameMap {
    'tag-pay-working-pattern': HTMLTagPayWorkingPatternElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-pay-working-pattern': JSXElements.TagPayWorkingPatternAttributes;
    }
  }
  namespace JSXElements {
    export interface TagPayWorkingPatternAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLTagPayWpElement extends HTMLStencilElement {
    'dayofweek': string;
    'value': string;
  }
  var HTMLTagPayWpElement: {
    prototype: HTMLTagPayWpElement;
    new (): HTMLTagPayWpElement;
  };
  interface HTMLElementTagNameMap {
    'tag-pay-wp': HTMLTagPayWpElement;
  }
  interface ElementTagNameMap {
    'tag-pay-wp': HTMLTagPayWpElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-pay-wp': JSXElements.TagPayWpAttributes;
    }
  }
  namespace JSXElements {
    export interface TagPayWpAttributes extends HTMLAttributes {
      'dayofweek'?: string;
      'value'?: string;
    }
  }
}


declare global {
  interface HTMLTagProfileElement extends HTMLStencilElement {
    'dob': string;
    'gender': string;
    /**
     * Name of user profiled 
     */
    'name': string;
    'nationality': string;
    /**
     * Src of profile image 
     */
    'src': string;
  }
  var HTMLTagProfileElement: {
    prototype: HTMLTagProfileElement;
    new (): HTMLTagProfileElement;
  };
  interface HTMLElementTagNameMap {
    'tag-profile': HTMLTagProfileElement;
  }
  interface ElementTagNameMap {
    'tag-profile': HTMLTagProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-profile': JSXElements.TagProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface TagProfileAttributes extends HTMLAttributes {
      'dob'?: string;
      'gender'?: string;
      /**
       * Name of user profiled 
       */
      'name'?: string;
      'nationality'?: string;
      'onEditProfileImage'?: (event: CustomEvent) => void;
      /**
       * Src of profile image 
       */
      'src'?: string;
    }
  }
}


declare global {
  interface HTMLTagTabsElement extends HTMLStencilElement {
    'tabs': any[];
  }
  var HTMLTagTabsElement: {
    prototype: HTMLTagTabsElement;
    new (): HTMLTagTabsElement;
  };
  interface HTMLElementTagNameMap {
    'tag-tabs': HTMLTagTabsElement;
  }
  interface ElementTagNameMap {
    'tag-tabs': HTMLTagTabsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-tabs': JSXElements.TagTabsAttributes;
    }
  }
  namespace JSXElements {
    export interface TagTabsAttributes extends HTMLAttributes {
      'tabs'?: any[];
    }
  }
}


declare global {
  interface HTMLTagTextElement extends HTMLStencilElement {
    /**
     * Treat text as inline and remove block and margin from text 
     */
    'inline': boolean;
    /**
     * The type of the string can be: h1, h2, h3, h4, h5, feature, small, min, value 
     */
    'type': string;
  }
  var HTMLTagTextElement: {
    prototype: HTMLTagTextElement;
    new (): HTMLTagTextElement;
  };
  interface HTMLElementTagNameMap {
    'tag-text': HTMLTagTextElement;
  }
  interface ElementTagNameMap {
    'tag-text': HTMLTagTextElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-text': JSXElements.TagTextAttributes;
    }
  }
  namespace JSXElements {
    export interface TagTextAttributes extends HTMLAttributes {
      /**
       * Treat text as inline and remove block and margin from text 
       */
      'inline'?: boolean;
      /**
       * The type of the string can be: h1, h2, h3, h4, h5, feature, small, min, value 
       */
      'type'?: string;
    }
  }
}


declare global {
  interface HTMLTagThreeColLayoutElement extends HTMLStencilElement {
    /**
     * Property description 
     */
    'p1': string;
  }
  var HTMLTagThreeColLayoutElement: {
    prototype: HTMLTagThreeColLayoutElement;
    new (): HTMLTagThreeColLayoutElement;
  };
  interface HTMLElementTagNameMap {
    'tag-three-col-layout': HTMLTagThreeColLayoutElement;
  }
  interface ElementTagNameMap {
    'tag-three-col-layout': HTMLTagThreeColLayoutElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-three-col-layout': JSXElements.TagThreeColLayoutAttributes;
    }
  }
  namespace JSXElements {
    export interface TagThreeColLayoutAttributes extends HTMLAttributes {
      /**
       * Property description 
       */
      'p1'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
