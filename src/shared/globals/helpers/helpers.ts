
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

    static generateRandomIntegers(integerLength: number): number {
        const characters = '0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; 1 < integerLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return parseInt(result, 10);
    }
}