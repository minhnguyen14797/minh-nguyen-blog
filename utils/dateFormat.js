

export default function formattedDate(rawDate) {
    const date = new Date(rawDate).toLocaleDateString('en-us', {year:"numeric", month:"short", day:'numeric'})
    return date
}