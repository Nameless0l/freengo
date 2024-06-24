import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {FormLabel, Radio, RadioGroup} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

 export const ComboBox = ()=> {
    return (
        <Stack  spacing={2}  sx={{ width: 300 }}>
            <Autocomplete
                id="depart"
                freeSolo
                options={quartier.map((option) => option.name)}
                renderInput={(params) => <TextField variant={'standard'} {...params} label="Départ" />}
            />
            <Autocomplete
                freeSolo
                id="arrive"
                disableClearable
                options={quartier.map((option) => option.name)}
                renderInput={(params) => (<TextField variant={'standard'} {...params} label="Arrivé"/>
                )}
            />
        </Stack>
    );
}

 export const ElementForTravel =()=>{
    return <Stack spacing={2} paddingTop={'12px'} sx={{ width: 300 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Transportable</FormLabel>
        <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
        >
            <FormControlLabel value="female" control={<Radio />} label="moi" />
            <FormControlLabel value="male" control={<Radio />} label="colis" />
            <FormControlLabel value="other" control={<Radio />} label="ami" />
        </RadioGroup>
        <FormLabel id="demo-row-radio-buttons-group-label">Places</FormLabel>
        <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
        >
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />
        </RadioGroup>
    </Stack>
 }

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const quartier = [
    { name: 'Willow Park', population: 5000 },
    { name: 'Sunnydale Heights', population: 3200 },
    { name: 'Maple Grove', population: 4500 },
    { name: 'Riverside Terrace', population: 2800 },
    { name: 'Pinecrest Valley', population: 3800 },
    { name: 'Hillside Manor', population: 4100 },
    { name: 'Lakeview Acres', population: 3500 },
    { name: 'Briarwood Downs', population: 2900 },
    { name: 'Meadowbrook Estates', population: 4200 },
    { name: 'Cedar Ridge', population: 3700 },
    { name: 'Westlake Grove', population: 3100 },
    { name: 'Harborview Point', population: 4000 },
    { name: 'Summit Springs', population: 3400 },
    { name: 'Golden Oaks', population: 2600 },
    { name: 'Greenfield Hills', population: 3800 },
    { name: 'Willowbrook Junction', population: 3200 },
    { name: 'Northgate Park', population: 3600 },
    { name: 'Fairview Heights', population: 3900 },
    { name: 'Sunset Valley', population: 3300 },
    { name: 'Oakwood Acres', population: 4300 },
    { name: 'Riverbend Heights', population: 3100 },
    { name: 'Pleasant Valley', population: 3000 },
    { name: 'Whispering Pines', population: 3700 },
    { name: 'Chestnut Hill', population: 2800 },
    { name: 'Stonebridge Crossing', population: 4200 },
    { name: 'Springfield Meadows', population: 3500 },
    { name: 'Lakeside Grove', population: 3800 },
    { name: 'Hillcrest Estates', population: 2900 },
    { name: 'Highland Park', population: 4100 },
    { name: 'Pinehurst Hills', population: 3200 },
    { name: 'Morningside Heights', population: 3700 },
    { name: 'Fairfield Meadows', population: 3300 },
    { name: 'Westbrook Springs', population: 3900 },
    { name: 'Oakdale Terrace', population: 3000 },
    { name: 'Creekwood Manor', population: 3400 },
    { name: 'Shadowbrook Glen', population: 3600 },
    { name: 'Rosewood Heights', population: 3200 },
    { name: 'Cypress Valley', population: 4000 },
    { name: 'Hickory Grove', population: 2800 },
    { name: 'Brookside Park', population: 3800 },
    { name: 'Summerfield Meadows', population: 3500 },
    { name: 'Pineview Heights', population: 4200 },
    { name: 'Greenwood Oaks', population: 3100 },
    { name: 'Valley Vista', population: 2600 },
    { name: 'Woodland Springs', population: 3900 },
    { name: 'Hilltop Gardens', population: 3000 },
    { name: 'Whitetail Ridge', population: 3700 },
    { name: 'Willow Grove', population: 3200 },
    { name: 'Lakeshore Hills', population: 4100 },
    { name: 'Bayside Bluffs', population: 3300 },
    { name: 'Parkside Estates', population: 3600 },
];

// export   {ComboBox,  ElementForTravel};