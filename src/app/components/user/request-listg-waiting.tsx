import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import {createSvgIcon} from "@mui/material";
import avatar from '../../assets/images/user/avatar-3.jpg';
import Image from 'next/image';
import Grid from "@mui/material/Grid";

export default function RequestListElementsWaiting() {
    const PlusIcon = createSvgIcon(
        // credit: plus icon from https://heroicons.com/
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>,
        'Plus',
    );
    return (
        <div>
            {Array.from(Array(3).keys()).map((_, i) => (
                <Accordion key={i} >
                    <AccordionSummary
                        expandIcon={<PlusIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        <Grid container px={2} gridRow={2} spacing={1}>
                            <Image src={avatar} alt={'driver'} style={{width: 64, height: 64}} className={'rounded-5 avatar'}/>
                            <p className={'pt-4 text-muted fw-bold text-lg'} style={{paddingLeft:'10px'}}>Mbassi Loic  ; 1500 Fcfa</p>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        Info deplacement (positions)
                    </AccordionDetails>
                    <AccordionActions>
                        <Button className={'btn btn-outline-danger float-end'}>Decliner</Button>
                        <Button className={'btn btn-outline-success float-end'} >Accepter</Button>
                    </AccordionActions>
                </Accordion>
            ))}

        </div>
    );
}
