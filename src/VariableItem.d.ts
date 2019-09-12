/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/VariableItem.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html, css} from 'lit-element';

export {VariableItem};

declare namespace UiElements {

  /**
   * # `variable-item`
   *
   * It is a variable list item to be displayed in the `<variable-editor>`.
   */
  class VariableItem extends LitElement {

    /**
     * A variable database object.
     * Initially it will contain an _id and _rev object and data will be get from the database.
     * Special case is when creating new variable. It will then contain an initial data but no ID.
     */
    item: object|null|undefined;

    /**
     * Number of milliseconds after which the item is persisted in the data
     * store after any property change.
     */
    debounceTimeout: number|null|undefined;

    /**
     * Enables compatibility with Anypoint platform
     */
    compatibility: boolean|null|undefined;

    /**
     * Enables Material Design Outlined inputs
     */
    outlined: boolean|null|undefined;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;

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
     * Called when item's `_rev` property changed (due to datastore update).
     * It checks if between save action and now the user made changes in the editor
     * and if so it updates the item again.
     */
    _itemChanged(): void;

    /**
     * To be called when any `item` property change.
     * Updates variable value.
     */
    _somethingChanged(): void;

    /**
     * Sends event to data model to update the variable.
     */
    _updateItem(): Promise<any>|null;

    /**
     * Handler for the remove button click.
     */
    _removeVariable(): Promise<any>|null;

    /**
     * Opens the variable editor dialog.
     */
    _openVariableEditor(): void;

    /**
     * Called when the editor dialog is closed and sets new value.
     */
    _onVariableEditorClosed(e: CustomEvent|null): void;
    _toogleEnabled(e: any): void;
    _inputValueHandler(e: any): void;
  }
}
