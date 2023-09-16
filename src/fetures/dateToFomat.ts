type dateFormatter = (format: string, date:string, additionalDate?:string) => string

type Months = string[]

const months: Months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
]

export const dateToFormat:dateFormatter = (format, dateString, additionalDateString) => {
    const date = new Date(dateString)
    let additionalDate: Date;
    if (additionalDateString) {
        additionalDate = new Date(additionalDateString);
    }
    const monthString = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    if (format === 'dd.mm.yyyy') {
        return `${date.getDate()}.${monthString}.${date.getFullYear()}`
    } else if (format === 'dd.mm.yyyy - dd.mm.yyyy') {
        const monthString2 = (additionalDate.getMonth() + 1 < 10) ? `0${additionalDate.getMonth() + 1}` : additionalDate.getMonth() + 1
        return `${date.getDate()}.${monthString}.${date.getFullYear()} - ${additionalDate.getDate()}.${monthString2}.${additionalDate.getFullYear()}`
    } else if (+new Date(additionalDate)) {
        const minutesString = (additionalDate.getMinutes() < 10) ? `0${additionalDate.getMinutes()}` : additionalDate.getMinutes()
        return `${date.getDate()}.${monthString}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}-${additionalDate.getHours()}:${minutesString}`
    } else if (format === 'd+\s\W\syyyy') {
        return `${date.getDate()} ${months[date.getMonth()-1]} ${date.getFullYear()}`
    } else if (format === 'hh:mm') {
        const minutesString = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()
        return `${date.getHours()}:${minutesString}`
    } 
    return ''
}