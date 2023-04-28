
export class Helpers {
    // convert first Letter To Upper Case.
    static firstLetterToUpperCase(str: string): string {
        const valueString = str.toLocaleLowerCase();
        return valueString
            .split(' ')
            .map((value: string) => `${value.charAt(0).toUpperCase()}${value.slice(1).toLocaleLowerCase()}`)
            .join(' ');
    }

    static lowerCase(str: string): string {
        return str.toLocaleLowerCase();
    }
}