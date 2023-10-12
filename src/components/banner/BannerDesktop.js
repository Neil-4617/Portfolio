import {useEffect} from 'react'

// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import photo1 from '../../assets/images/photo1.jpg'
import '../../assets/styles/index.css'

// component
import Skills from './Skills.component'
import ProjectCard from './ProjectCard.component'


const BannerDesktop = () => {

	useEffect(()=>{
		const observer = new window.IntersectionObserver((entries) =>{
			// iterate entry
			entries.forEach((entry)=>{
				// decide fade effect
					if(entry.isIntersecting){
						entry.target.classList.add("show")
					}else{
						entry.target.classList.remove("show")
					}				
				})
			}, {threshold: 0.5})

		const cards = document.querySelectorAll('.cards')

		cards.forEach(card => observer.observe(card))

		// clean up
		return () =>{	
			cards.forEach(card =>{
				observer.unobserve(card)
			})
		}
	},[])


	return (
		<>
		<Box
			sx={{
				width:'100%',
				display:'flex',
				flexDirection:'column',
				alignItems: 'center',
			}}>
			{/*Hero Section*/}
			<Box
				sx={{
					height:'80vh',
					width: '100%',
					display: 'flex',
					gap: 5,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Box 
					sx={{
					pr: '3rem',
					}}>
					<Typography variant='h4'>Hi Im Mark Neil</Typography>
					<Typography variant='h5'>a full-stack web developer</Typography>
				</Box>
				<Box
					sx={{
						padding: '1rem',
						width: '20%',
					}}>
					<Box 
						component='img'
						src={photo1}
						alt="mark_neil image"
						sx={{
							width: '100%',
						}}
					/>
				</Box>					
			</Box>
			{/*end of Hero Section*/}

		
			{/*Skills*/}
			<Skills />
			
			{/*Project Section*/}
			<ProjectCard />

		</Box>
		</>
	) 
}

export default BannerDesktop