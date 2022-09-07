export function currencyFormat(value, decimalCount = 0, config = {}) {
    try {
        const minimumFractionDigits = config?.minimumFractionDigits ?? 0;
        const maximumFractionDigits =
            config?.maximumFractionDigits ?? decimalCount;

        const numberFormat = new Intl.NumberFormat('en-US', {
            minimumFractionDigits,
            maximumFractionDigits,
        });
        return numberFormat.format(value);
    } catch (e) {
        return '';
    }
}

export const renderTime = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = `0${duration % 60}`.slice(-2);

    return `${hours}h ${minutes === '00' ? '' : minutes + 'm'}`;
};
