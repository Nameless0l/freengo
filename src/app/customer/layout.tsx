import React from 'react';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';





export default function CustomerLayout(
	{children}: Readonly<{ children: React.ReactNode; }>) {
	return (
		
		<>
		<Sidebar/>
		<div className="pc-container bg-white  d-flex" style={{top: 0, marginRight: 0}}>

			<Header/>
			<div className=" map w-75 rounded-2 bg-light position-relative p-2" style={{top: '80px'}}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1019069.8735422032!2d11.534099999999999!3d3.8655000000000066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1714227322853!5m2!1sfr!2scm"
					width="100%" height="100%" style={{border: 0}}  loading="lazy"
					></iframe>
			</div>

			<div className={'w-25 px-3 position-relative'} style={{top: 80}}>
				{children}
			</div>
		</div>


		</>
	);
}
