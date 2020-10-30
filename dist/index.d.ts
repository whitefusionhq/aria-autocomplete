export interface IAriaAutocompleteOptions {
    id?: string;
    name?: string;
    source?: string | string[] | any[] | Function;
    sourceMapping?: any;
    alsoSearchIn?: string[];
    delay?: number;
    minLength?: number;
    maxResults?: number;
    showAllControl?: boolean;
    confirmOnBlur?: boolean;
    multiple?: boolean;
    autoGrow?: boolean;
    maxItems?: number;
    multipleSeparator?: string;
    deleteOnBackspace?: boolean;
    asyncQueryParam?: string;
    asyncMaxResultsParam?: string;
    placeholder?: string;
    noResultsText?: string;
    cssNameSpace?: string;
    listClassName?: string;
    inputClassName?: string;
    wrapperClassName?: string;
    srDeleteText?: string;
    srDeletedText?: string;
    srShowAllText?: string;
    srSelectedText?: string;
    srListLabelText?: string;
    srAssistiveText?: string;
    srResultsText?(length: number): string | void;
    onSearch?(value: string): string | void;
    onAsyncPrep?(url: string, xhr: XMLHttpRequest, isFirstCall: boolean): string | void;
    onAsyncBeforeSend?(query: string, xhr: XMLHttpRequest, isFirstCall: boolean): void;
    onAsyncSuccess?(query: string, xhr: XMLHttpRequest, isFirstCall: boolean): any[] | void;
    onAsyncComplete?(query: string, xhr: XMLHttpRequest, isFirstCall: boolean): void;
    onAsyncError?(query: string, xhr: XMLHttpRequest, isFirstCall: boolean): void;
    onResponse?(options: any[]): any[] | void;
    onItemRender?(sourceEntry: any): string | void;
    onConfirm?(selected: any): void;
    onDelete?(deleted: any): void;
    onChange?(selected: any[]): void;
    onFocus?(wrapper: HTMLDivElement): void;
    onBlur?(wrapper: HTMLDivElement): void;
    onReady?(wrapper: HTMLDivElement): void;
    onClose?(list: HTMLUListElement): void;
    onOpen?(list: HTMLUListElement): void;
}

export interface IAriaAutocompleteApi {
    list: HTMLUListElement;
    input: HTMLInputElement;
    wrapper: HTMLDivElement;
    options: IAriaAutocompleteOptions;
    selected: any[];
    open(): void;
    close(): void;
    enable(): void;
    disable(disableDeletions?: boolean): void;
    filter(value: string): void;
    destroy(): void;
}

declare function AriaAutocomplete(element: HTMLElement, options?: IAriaAutocompleteOptions): IAriaAutocompleteApi;
export default AriaAutocomplete;
