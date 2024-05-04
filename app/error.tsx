'use client'

import EmptyState from "@/components/ui/empty-state"
import { useEffect } from "react"

interface ErrorStateProps {
  error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({
  error
}) => {
  useEffect(() => {
    console.error(error);
  }, [error])
  
  return (
    <EmptyState
      showReset
      title="Uh Oh"
      subtitle="Something went wrong"
    />
  )
}

export default ErrorState