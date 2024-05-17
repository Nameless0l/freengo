import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {createSvgIcon} from "@mui/material";

export default function RequestListElements() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
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
                <Accordion expanded={expanded === String(i)} onChange={handleChange(String(i))}>
                <AccordionSummary
                    expandIcon={<PlusIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '40%', flexShrink: 0 }}>
                        vatar+ nom + prix
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>de ::: à :::</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Les informations sur le deplacement ici
                    </Typography>
                </AccordionDetails>
            </Accordion>
            ))}

        </div>
    );
}
