"use client"

import { ArrivingDriver } from '@/components/home/arriving-driver';
import { DriverActions } from '@/components/home/driver-actions';
import { TransportType } from '@/components/home/transport-type';
import TravelDescription from '@/components/home/travel-description';
import Utils from '@/helpers/utils';
import {useState} from 'react';
import Button from "@mui/material/Button";
import { ComboBox, ElementForTravel } from "@/components/layout/test";
import {FormControl} from "@mui/material";

export default function HomeUI() {
	const [selected, setSelected] = useState<0 | 1 | 2>(0);
	const [initRequest, setInitRequest] = useState<boolean>(false);
	const handleInitRequest = () => {
		setInitRequest(! initRequest);
	}
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
			<DriverActions/>

			<hr className={'w-100'}/>

			<div className={' d-flex w-100 justify-content-evenly align-items-center mb-5'}>
				<TransportType action={() => setSelected(0)} isSelected={selected === 0} name={"Express"} icon={'bike'}
							   label={"Moto"} price={650}/>
				<TransportType action={() => setSelected(1)} isSelected={selected === 1} name={"Ramassage"}
							   icon={'caravan'} label={"Voiture"} price={500}/>
				<TransportType action={() => setSelected(2)} isSelected={selected === 2} name={"Depôt"} icon={'car'}
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

			{initRequest? <>
					<TravelDescription key="trave"/>
					<span key={1} className={'text-center'}>
				<i className={`ti ti-access-point mb-2 d-block`}></i>
				<span className={''}> LE NOM </span>
			</span></>:
				<FormControl>
					<ComboBox/>
					<ElementForTravel/>
				</FormControl>
			}

			<div className="col-md-12 ms-auto  d-flex align-items-center justify-content-center">
				{/*<span className={"btn btn-outline-success float-end "}>Initier une demande</span>*/}
				<Button className={"btn btn-outline-success mt-3 float-end "} size="small" onClick={handleInitRequest}>Initier une demande</Button>
			</div>
		</div>

	)
}