import Utils from '@/helpers/utils';

export type TransportTypeProps = {
	name: string,
	icon: string,
	label: string,
	price: number,
	isSelected?: boolean,
	action?: () => void
}
export const TransportType = ({ name, icon, label, price, isSelected, action }: TransportTypeProps) => {

	const transition = { transition: 'all 0.3s ease-in' }
	return <div
		onClick={() => action ? action() : undefined}
		style={{ ...transition }}
		className={`d-flex text-center ${isSelected ? 'shadow rounded-2' : ''} flex-column justify-content-evenly align-items-center mb-2 py-2  `}>
		<div><i className={`ti ti-${icon} text-2xl`}></i></div>
		<div className={''}>
			<span className={'fw-bold d-block mb-2'}>{name}</span>
			<span className={'fw-light text-gray-700 d-block mb-2'}>{label}</span>
			<span style={{ ...transition }} className={` d-block badge rounded-pill ${isSelected ? '' : 'bg-light'} text-black p-3 text-lg `}>
				{Utils.formatNumber({ number: price })}
			</span>
		</div>
	</div>
}