"use client"
import { ArrivingDriver } from "@/components/home/arriving-driver";
import { DriverActions } from "@/components/home/driver-actions";
import {useState} from "react";
import Utils from "@/helpers/utils";
import Typography from "@mui/material/Typography";
import RequestListElements from "@/components/user/request-list";
import RequestListElementsWaiting from "@/components/user/request-listg-waiting";

export default function HomeRequestListPage(){
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

            {/*<div className={' d-flex w-100 justify-content-evenly align-items-center mb-5'}>*/}

            {/*</div>*/}


            <div className={'w-100 '}>
                <Typography variant="h5" component="h6">
                    Courses actuelles
                </Typography>
                <RequestListElements/>
            </div>

            <hr className={"    my-100"}/>
            <div className={' w-100 '}>
                <Typography variant="h5" component="h6">
                    Liste d'attente
                </Typography>
                <RequestListElementsWaiting/>
            </div>


            <div className="col-md-12 ms-auto  d-flex align-items-center justify-content-center">
                {/*<Button className={"btn btn-outline-success mt-3 float-end "} size="small" onClick={handleInitRequest}>Initier une demande</Button>*/}
            </div>
        </div>
    )
}