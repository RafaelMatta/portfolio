export function captalize(str: string): string {
    str = str.split(' ')
        .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
        .join(' ');

    return str;
}