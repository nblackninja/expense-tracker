import { useQuery } from '@apollo/client'
import { ANALYTICS_EXPENSE } from '../../../graphql/queries'

export const useGetAnalyticsExpense = (startDate, endDate) => {
  const { data, loading, error } = useQuery(ANALYTICS_EXPENSE, {
    variables: {
      input: {
        filter: {
          date: {
            gte: startDate,
            lte: endDate
          }
        }
      }
    }
  })

  return {
    analyticsExpense: data?.analyticsExpense || [],
    loading,
    error
  }
}
