"use client"

import {ArrivingDriver} from '@/app/components/home/arriving-driver';
import {DriverActions} from '@/app/components/home/driver-actions';
import {TransportType} from '@/app/components/home/transport-type';
import TravelDescription from '@/app/components/home/travel-description';
import Utils from '@/app/helpers/utils';
import {useState} from 'react';
import Button from "@mui/material/Button";
import {ComboBox, ElementForTravel} from "@/app/components/layout/test";
import {FormControl} from "@mui/material";
import FormChat from "@/app/components/user/chat/form-chat";
import Message from "@/app/components/user/chat/message";

import Stack from "@mui/material/Stack";

export default function HomeUI() {
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const showMessages = () => {
        setShowMessage(!showMessage);
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
            <div className={'d-flex align-items-center justify-content-evenly w-100 gap-3 mt-5 mb-4'}>
				<span className={' btn btn-light  rounded-5 d-block mb-1 p-4 shadow-sm '}>
					<i className={'ti ti-x'} style={{fontSize: 30, color: 'black'}}></i>
				</span>


                <Button onClick={showMessages} className={' btn btn-warning rounded-5 d-block mb-1 p-4 shadow-sm'}>
                    <i className={'ti ti-message'} style={{fontSize: 30, color: 'black'}}></i>
                </Button>

                <span className={' btn btn-secondary rounded-5 d-block mb-1 p-4 shadow-sm'}>
					<i className={'ti ti-phone'} style={{fontSize: 30, color: 'black'}}></i>
		</span>
            </div>

            <hr className={'w-100'}/>

            <div className={' d-flex w-100 justify-content-evenly align-items-center mb-5'}>

            </div>


            <div className={' d-flex w-100 justify-content-evenly align-items-center'}>

            </div>

            {/*<hr className={"px-4 my-2  "} />*/}
            {showMessage?
                <>
                    <Stack spacing={2}>
                        <Message color={'#d9a406'} position_={'0'}/>
                        <Message color={'#d3d4d5'} position_={'100'}/>
                        <Message color={'#d9a406'} position_={'0'}/>
                        <Message color={'#d3d4d5'} position_={'100'}/>
                    </Stack>
                    <FormChat/>
                </>


                : null
            }



            {/*<div className="col-md-12 ms-auto  d-flex align-items-center justify-content-center">*/}
            {/*    /!*<span className={"btn btn-outline-success float-end "}>Initier une demande</span>*!/*/}
            {/*    <Button className={"btn btn-outline-success mt-3 float-end "} size="small" onClick={handleInitRequest}>Initier une demande</Button>*/}
            {/*</div>*/}
        </div>

    )
}