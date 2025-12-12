export interface FrontmatterResult<T = Record<string, string>> {
    data: T;
    body: string;
}
export declare function parseFrontmatter<T = Record<string, string>>(content: string): FrontmatterResult<T>;
