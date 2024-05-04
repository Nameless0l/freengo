import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, {Fragment} from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import AdjustIcon from '@mui/icons-material/Adjust';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';


export type TravelDescriptionProps = {};

function TravelDescription({}: TravelDescriptionProps) {
	return (
		<Timeline position={'right'} className={'w-100 align-items-start'}>

			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color="info">
						<  AdjustIcon/>
					</TimelineDot>
					<TimelineConnector style={{height: 80}} color={'primary'}/>

				</TimelineSeparator>
				<TimelineContent sx={{py: '12px', px: 2}}>
					<Typography variant="h6" component="span">
						Depart
					</Typography>

				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot>
						<PersonPinCircleIcon/>

					</TimelineDot>

				</TimelineSeparator>
				<TimelineContent sx={{py: '12px', px: 2}}>
					<Typography variant="h6" component="span">
						Arrivée
					</Typography>

				</TimelineContent>
			</TimelineItem>
		</Timeline>

	);
}

export default TravelDescription;