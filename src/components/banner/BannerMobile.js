import { useEffect } from 'react'

// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// style
import '../../assets/styles/index.css'

// component
import Skills from './Skills.component'
import ProjectCard from './ProjectCard.component'

import photo1 from '../../assets/images/photo1.jpg'


const BannerMobile = () => {
	useEffect(() => {
		const observer = new window.IntersectionObserver((entries) => {
			// iterate entry
			entries.forEach((entry) => {
				// decide fade effect
				if (entry.isIntersecting) {
					entry.target.classList.add("show")
				} else {
					entry.target.classList.remove("show")
				}
			})
		}, { threshold: 0.5 })

		const cards = document.querySelectorAll('.cards')

		cards.forEach(card => observer.observe(card))

		// clean up
		return () => {
			cards.forEach(card => {
				observer.unobserve(card)
			})
		}
	}, [])
	return (
		<>
			<Box
				sx={{
					width: '100%',
					display: 'block',
				}}>
				{/*Hero Section*/}
				<Box
					sx={{
						minHeight: '25vh',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '1rem'
					}}>
					<Box
						sx={{
							marginTop: '0.75rem',
							padding: '1rem',
							width: '30%',
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
					<Box
						sx={{
							mx: 'auto',
							mt: '1rem',
							textAlign: 'center',
						}}>
						<Typography variant='h6'>Hi! Im Mark Neil Abiera</Typography>
						<Typography variant='subtitle1'>a full-stack web developer</Typography>
					</Box>
				</Box>
				{/*end of Hero Section*/}

				{/*Skills*/}
				<Skills />
				{/*end of Skills Section*/}

				{/*Project Section*/}
				<ProjectCard />
				{/*end of Project Section*/}
			</Box>
		</>
	)
}

export default BannerMobile