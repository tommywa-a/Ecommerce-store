import { Billboard as BillboardType } from '@/types'

interface BillboardProps {
	data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
	return (
		<div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
			<div
				className='rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover'
				style={{ backgroundImage: `url(${data?.imageUrl})` }}
			>
				<div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
					<div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
						{data.label}
					</div>
					{data.subLabel && (
						<div className='font-bold text-2xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs text-gray-500 bg-gradient-to-t from-gray-100 to-transparent rounded-lg px-6 py-2 -mt-6'>
							{data.subLabel}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Billboard
