export default function dateFilter(value, format='date') {
    const options = {}

    if (format.includes('year')) {
        options.year = 'numeric'
    }

    return new Intl.DateTimeFormat('ru-Ru', options).format(new Date(value))
}
