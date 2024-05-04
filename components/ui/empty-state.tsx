'use client'

import { useRouter } from 'next/navigation'
import Heading from './heading'
import Button from './button'

interface EmptyStateProps {
	title?: string
	subtitle?: string
	showReset?: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({
	title = 'No exact matches',
	subtitle = 'Please try changing or removing some of your filters',
	showReset,
}) => {
	const router = useRouter()
	return (
		<div
			className='
    h-[60vh]
    flex
    flex-col
    gap-2
    justify-center
    items-center
    '
		>
			<Heading
				center
				title={title}
				subtitle={subtitle}
			/>
			<div className='w-64 mt-4 flex justify-center'>
				{showReset && (
					<Button
						children='Go back to the previous page'
						onClick={() => {
							router.back()
						}}
					/>
				)}
			</div>
		</div>
	)
}

export default EmptyState
