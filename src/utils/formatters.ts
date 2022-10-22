export function formatDate (date: Date | null) {
  if (!date) return
  const timestamp = new Date(date).getTime()
  return new Intl.DateTimeFormat('pt-BR', { 
    dateStyle: 'medium',
  }).format(timestamp)
}

export function formatCurrency (value: string | undefined) {
  if (!value) return
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL', 
    minimumFractionDigits: 0
  }).format(Number(value))
}