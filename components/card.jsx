import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Card = ({ imageItem, text, text1, caso }) => {
	switch (caso) {
		case '1':
			var tipocaso = 'text-muted fs-6 mx-1 fa fa-hashtag';
			break;
		case '2':
			var tipocaso = 'text-muted fs-6 mx-1 fa fa-clock';
			break;
		case '3':
			var tipocaso = 'text-muted fs-6 mx-1 fa fa-building';
			
			break;
		case '4':
			var tipocaso = 'text-muted fs-6 mx-1 fa fa-users';
			break;
		default:
			break;
	}
	return (
		<div className="relative shadow-lg card">
			<div className={styles.imgcard}>
				<Image
					src={imageItem}
					alt='empresa'
					width={100}
					height={100}
					className="border-gray-500 w-30 h-30"
				/>
			</div>
			<div className={styles.textcard}>
				<p className="mt-2 fs-4 p-2 text-decoration-none">{text}</p>
				<div className='absolute bottom-0 left-0 mx-5 py-5'>
					<hr></hr>
					<p className="mt-2 fs-6 text-decoration-none">
						<i aria-hidden={true} className={tipocaso}></i>{text1}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Card