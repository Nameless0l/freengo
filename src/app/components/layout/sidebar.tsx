import {menuItems, reviewItems} from '@/app/components/layout/sidebar-data';
import {UserProfile} from '@/app/components/layout/user-profile';
import Link from '@mui/material/Link';

export const Sidebar = () => {


	return <nav className="pc-sidebar">
		<div className="navbar-wrapper">
			<div className="m-header">
				<h1 className={'b-brand text-center w-100'}>FREENGO</h1>
			</div>
			<div className="navbar-content">

				<div className={'h-50 user-profile m-2 rounded-3'}>
					<UserProfile/>

					<hr className={'mx-4 my-5'}/>

					<div className={'h-25 d-flex justify-content-evenly align-items-center'}>
						{
							reviewItems.map((item, index) => (
								<span key={index} className={'text-center'}>
									<i className={`ti ti-${item.icon} mb-2 d-block`}></i>
									<span className={''}> {item.data} </span>
								</span>
							))}
					</div>

				</div>

				<hr className={'m-4'}/>

				<ul className="pc-navbar">

					{menuItems.map((item, index) => (
						<li key={index} className="pc-item rounded-3 my-3">
							<a href={`${item.path}`} className="pc-link">
								<span className="pc-micon rounded-1">
									<i className={` ti ti-${item.icon}`}> </i>
								</span>
								<span className="pc-mtext"> {item.label} </span>
								<span className="float-end">
									<i className={`ti ti-chevron-right`}> </i>
								</span>

							</a>
						</li>
					))}


				</ul>



			</div>
		</div>
	</nav>
}