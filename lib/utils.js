export const currencyFormatter = (amount) => {
    const formatter = Intl.NumberFormat("id-ID", {
        style: 'currency',
        currency: 'IDR'
    })

    return formatter.format(amount);
}