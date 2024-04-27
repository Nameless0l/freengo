import Image from 'next/image';
import avatar from '../assets/images/user/avatar-1.jpg'

export const UserProfile = () => {
	return <div className={'d-flex h-50 flex-column align-items-center'}>


		<Image src={avatar} className={'rounded-circle shadow mb-4'} alt={'User - profile'}/>
		{/* <h5 className="mb-2"><strong>John Doe</strong></h5> */}
		<p className="text-muted fs-3">John doe </p>

		<div className="position-relative px-5 py-4 rounded-pill bg-light text-black fs-4">
			692 397 042
			<span className="position-absolute text-2xl top-0 end-0 translate-middle badge rounded-pill text-black bg-warning-subtle">
                <i className="ti ti-phone"></i>
            </span>
		</div>

	</div>
}