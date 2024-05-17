"use client"

import {ArrivingDriver} from '@/app/components/home/arriving-driver';
import {DriverActions} from '@/app/components/home/driver-actions';
import {TransportType} from '@/app/components/home/transport-type';
import TravelDescription from '@/app/components/home/travel-description';
import Utils from '@/app/helpers/utils';
import {Start} from '@mui/icons-material';
import {useState} from 'react';

export default function WaitigUI() {
	const [selected, setSelected] = useState<0 | 1 | 2>(0);
	const reviewItems = [
		{
			icon: 'map-2',
			data: '2.4 km'
		}, {
			icon: 'clock',
			data: '12 min'
		}, {
			icon: 'report-money',
			data: Utils.formatNumber({number: 1200})
		}
	]

	return (
		<div className={'d-flex flex-column align-items-center justify-content-center mb-4'}>

			{/* Vehicule qui arrive */}
			<ArrivingDriver driverName={'Loic Mbassi'} identificationNumber={'CE 732 EB'} phone={'697 548 632'}
			                ratings={4.5}/>

			{/* Les actions relatives aux vehicule qui arrive */}
			<DriverActions short={true}/>

			<hr className={'w-100'}/>

			<div className={' d-flex w-100 justify-content-evenly align-items-center mb-5'}>
				<TransportType  isSelected={selected === 0} name={"Express"} icon={'bike'}
				               label={"Moto"} price={650}/>
				<TransportType  isSelected={selected === 1} name={"Ramassage"}
				               icon={'caravan'} label={"Voiture"} price={500}/>
				<TransportType  isSelected={selected === 2} name={"Depôt"} icon={'car'}
				               label={"Voiture - VIP"} price={1200}/>
			</div>


			<div className={' d-flex w-100 justify-content-evenly align-items-center'}>
				{
					reviewItems.map((item, index) => (
						<span key={index} className={'text-center text-xl lh-lg'}>
									<i className={`ti ti-${item.icon} mr-1 text-3xl`}></i>
									<span className={''}> {item.data} </span>
								</span>
					))}
			</div>

			<hr className={"px-4 my-2"}/>

			<TravelDescription key="trave"/>

			<div className="col-md-12 ms-auto  d-flex align-items-center justify-content-center">
				<span className={"btn btn-outline-dark float-end "}>Debuter la course <Start/> </span>
			</div>
		</div>

	)
}