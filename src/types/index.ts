// type of FilterInput
export type FilterInputProps = {
    handleSearch: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};
// one item from MoviesList
export type MovieElement = {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
}
// type of MoviesList
export type Movies = {
    page: number;
    results: MovieElement[];
    total_pages: number;
    total_results: number;
    handlePaginationChange: (page: number) => void;
}
// pagination
export type PaginationElement = {
    currentPage: number;
    total_pages: number;
    pageRange: number;
    onPaginationChange: (page: number) => void;
}
