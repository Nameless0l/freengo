export const DriverActions = () => {


	return <div className={'d-flex align-items-center justify-content-evenly w-100 gap-3 mt-5 mb-4'}>
				<span className={' btn btn-light  rounded-5 d-block mb-1 p-4 shadow-sm '}>
					<i className={'ti ti-x'} style={{fontSize: 30, color: 'black'}}></i>
				</span>


		<span className={' btn btn-warning rounded-5 d-block mb-1 p-4 shadow-sm'}>
					<i className={'ti ti-message'} style={{fontSize: 30, color: 'black'}}></i>
		</span>

		<span className={' btn btn-secondary rounded-5 d-block mb-1 p-4 shadow-sm'}>
					<i className={'ti ti-phone'} style={{fontSize: 30, color: 'black'}}></i>
		</span>
	</div>
}