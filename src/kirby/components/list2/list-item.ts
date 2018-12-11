
export interface ListItem {
    cells: ListItemCell[];
    headers?: string[];
}

export interface ListItemCell {
    content: string;
    subContent?: string;
    bold?: boolean;
}
