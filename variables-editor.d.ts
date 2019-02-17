/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   variables-editor.html
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../polymer/types/lib/utils/render-status.d.ts" />
/// <reference path="../paper-styles/paper-styles.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../iron-collapse/iron-collapse.d.ts" />
/// <reference path="../iron-icon/iron-icon.d.ts" />
/// <reference path="../paper-item/paper-item.d.ts" />
/// <reference path="../paper-dropdown-menu/paper-dropdown-menu.d.ts" />
/// <reference path="../paper-listbox/paper-listbox.d.ts" />
/// <reference path="../paper-icon-button/paper-icon-button.d.ts" />
/// <reference path="../paper-toast/paper-toast.d.ts" />
/// <reference path="../paper-button/paper-button.d.ts" />
/// <reference path="../arc-icons/arc-icons.d.ts" />
/// <reference path="../environment-selector/environment-selector.d.ts" />
/// <reference path="../variables-consumer-mixin/variables-consumer-mixin.d.ts" />
/// <reference path="variable-item.d.ts" />

declare namespace UiElements {

  /**
   * A variables editor is an element to render UI for `variables-manager`.
   *
   * It displays list of user defined environments and variables associated with
   * the  environment.
   *
   * This element requires compatible variables manager to be present in the DOM. It
   * uses browser event system to communicate with the manager. See `variables-manager`
   * documentation for detailed API for data exchange.
   *
   * ### Example
   *
   * ```html
   * <variables-editor></variables-editor>
   * <variables-manager></variables-manager>
   * ```
   *
   * ### Styling
   *
   * `<variables-editor>` provides the following custom properties and mixins
   * for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--variables-editor` | Mixin applied to the element | `{}`
   * `--variables-editor-add-color` | Color of the `add` button | `--primary-color`
   * `--variables-editor-add-environment-color` | Color of the add environment
   * icon button | `rgba(0, 0, 0, 0.54)`
   * `--variables-editor-add-environment-color-hover | Color of the add environment
   * icon button when hovering | `--accent-color` or `rgba(0, 0, 0, 0.74)`
   * `--variables-editor-remove-env-color` | Color of the remove button (icon)
   * | `rgba(0, 0, 0, 0.24)`
   * `--variables-editor-remove-env-color-hover` | Color of the hovered remove
   * button (icon) | `#e64a19`
   * `--accent-color` | Background color of the primary action button | ``
   * `--primary-light-color` | Color of the primary action button | `#fff`
   * `--variables-editor-docs-frame-content` | Mixin applied to the colored
   * content container of the help section. | `{}`
   * `--variables-editor-docs-frame-content-background` | Background color of the
   * help section content container. | `#E1F5FE`
   * `--arc-font-title` | Theme mixin, applied to the tutorial title | `{}`
   * `--arc-font-body1` | Theme mixin, applied to text labels | `{}`
   * `--variables-editor-primary-button-background-color` | Background color of
   * the primary action button | `--accent-color`
   * `--variables-editor-primary-button-color` | Color of the primary action
   * button | `--primary-light-color` or `#fff`
   * `--primary-button` | Mixin applied to the primary button | `{}`
   * `--variable-item` | Mixin applied to the variable item container | `{}`
   * `--variable-item-name-input` | Mixin applied to the `paper-input` for
   * variable name | `{}`
   * `--variable-item-value-input` | Mixin applied to the `paper-input` for
   * variable value | `{}`
   * `--variable-item-checkbox` | Mixin applied to the state checkbox | `{}`
   * `--inline-fom-action-icon-color` | Theme variable, color of the delete
   * variable icon | `rgba(0, 0, 0, 0.74)`
   * `--inline-fom-action-icon-color-hover` | Theme variable, color of the
   * delete variable icon when hovering | `--accent-color` or `rgba(0, 0, 0, 0.74)`
   */
  class VariablesEditor extends
    ArcComponents.VariablesConsumerMixin(
    Object) {

    /**
     * Computed value, set to `true` if the environment can be removed.
     * Only `default` environment can't be deleted
     */
    readonly allowRemove: boolean|null|undefined;

    /**
     * True if the environment editor is opened.
     */
    envEditorOpened: boolean|null|undefined;
    readonly _filtered: any[]|null|undefined;

    /**
     * Dispatches bubbling and composed custom event.
     * By default the event is cancelable until `cancelable` property is set to false.
     *
     * @param type Event type
     * @param detail A detail to set
     * @param cancelable When false the event is not cancelable.
     */
    _dispatch(type: String|null, detail: any|null, cancelable: Boolean|null): CustomEvent|null;

    /**
     * Sends environment-updated event to the model
     *
     * @param value Anvironment value to update.
     */
    _dispatchEnvUpdated(value: object|null): CustomEvent|null;

    /**
     * Sends environment-deleted event to the model
     *
     * @param id ID of deleted environment
     */
    _dispatchEnvDeleted(id: String|null): CustomEvent|null;

    /**
     * Sends usage google analytics event
     *
     * @param action Action description
     */
    _sendGaEvent(action: String|null): CustomEvent|null;

    /**
     * Sends error event to google analytics
     *
     * @param message Exception message
     */
    _sendGaError(message: String|null): CustomEvent|null;

    /**
     * Shows toast with the message
     */
    _toast(message: String|null): void;

    /**
     * Processes variables list returned by the variables manager.
     * Filters out variables that are set in platform environment.
     *
     * @param record Change record
     * @returns Updated list of variables.
     */
    _processVariables(record: object|null): any[]|null;

    /**
     * Computes value for `allowRemove` property.
     *
     * @param environment [description]
     * @returns [description]
     */
    _computeAllowRemove(environment: any): any;

    /**
     * Opens environment editor.
     */
    openAddEnvironmentForm(): void;

    /**
     * Closes environment editor.
     */
    closeAddEnvironmentForm(): void;

    /**
     * Finds environment model by name.
     * The list of environments are stored in memory in environment selector.
     * To simplify the logic this element won't hold it's own copy of environments list.
     *
     * @param name Name of the environment to find.
     * @returns Environment model or undefined if not found.
     */
    _findEnvironment(name: String|null): object|null|undefined;

    /**
     * Validates user input when adding an environment.
     * It renders a message to the user if input did not passed the validation.
     *
     * @returns True if user input is valid.
     */
    _validateEnvironmentInput(name: String|null): Boolean|null;

    /**
     * Handler for the save action for add environment form.
     * Validates user input and sends `environment-updated` event to the model.
     */
    _addEnvironment(): Promise<any>|null;

    /**
     * Handler for the delete button.
     */
    _deleteEnvironment(): Promise<any>|null;

    /**
     * Add new, empty variable.
     */
    addVariable(): void;

    /**
     * Removes unsaved variable
     */
    _removeEmptyVariable(e: CustomEvent|null): void;
    _computeAddButtonHidden(envEditorOpened: any, hasVariables: any): any;

    /**
     * Opens documentation page for the module.
     */
    _openHelp(e: Event|null): Window|null|undefined;

    /**
     * Checks for "enter" key to add environment.
     */
    _addEnvInput(e: KeyboardEvent|null): void;
    _processEnvSplices(record: any): void;

    /**
     * Validates user input when environment name change.
     */
    _revalidateEnvInput(): void;
  }
}

interface HTMLElementTagNameMap {
  "variables-editor": UiElements.VariablesEditor;
}
