import avatar from '@/assets/images/user/IMG_5413-1.jpg';
import Image from 'next/image';

export type ArrivingDriverProps =
	{
		driverName: string,
		identificationNumber: string,
		ratings: number,
		phone: string
	}

export const ArrivingDriver = ({ driverName, identificationNumber, ratings, phone }: ArrivingDriverProps) => {

	return <div className={'d-flex w-100 align-items-center justify-content-between gap-3'}>

		<div className={'d-flex align-items-center justify-content-start gap-3'}>
			<Image src={avatar} alt={'driver'} style={{ width: 64, height: 64 }} className={'rounded-4'} />
			<span>
				<span className={'d-block fw-bold text-3xl'}>{driverName} </span>
				<span className={'d-block text-uppercase text-2xl'}>{identificationNumber}</span>
			</span>
		</div>
		<div className={'text-2xl fw-bold'}>
			<span className={'badge bg-orange-100 rounded-pill d-block mb-1'}><i
				className={'ti ti-star'}></i> &nbsp; {ratings}</span>
			<span className={'badge bg-blue-100 rounded-pill d-block'}>{phone} </span>
		</div>
	</div>
}