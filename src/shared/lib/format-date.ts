export enum EDateFormat {
  ISO = 'iso8601'
}

export const formatDate = (date: Date, format:EDateFormat = EDateFormat.ISO) => {
  switch (format) {
    case EDateFormat.ISO: {
      return formatDateToISO(date)
    }
    default: {
      return formatDateToISO(date)
    }
  }
}

export const formatDateToISO = (date: Date) => {
  return date.toISOString().split('T')[0]
}
