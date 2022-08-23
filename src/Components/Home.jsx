import React from "react";
import Product from "./Product";
import { uid } from "uid";

function Home() {
	return (
		<div className='home'>
			<div className='home_container'>
				<img
					id={uid()}
					className='home_image'
					src='http://www.aalogics.com/sites/default/files/amazon-web-services-banner.png'
					alt='home banner'
				/>
				<div className='home_row'>
					<Product
						id={uid()}
						title='The Lean Startup: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nulla iure totam impedit numquam voluptas'
						price={29.99}
						image='https://th.bing.com/th/id/R.9de82ef2da08008a74aa3afbec9f3cf9?rik=zaas85eGaea9BQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-T-d3JPMr-Uk%2fUPshLuidy6I%2fAAAAAAAAFbU%2fvOiHd0qgnC4%2fs1600%2flean-startup_book-cover.jpeg&ehk=O90jlIAsVo0HEm3VJD7I%2b0%2fbWRp8HxsmQwJdugopPLU%3d&risl=&pid=ImgRaw&r=0'
						rating={5}
					/>
					<Product
						id={uid()}
						title='Ipad: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nulla iure totam impedit numquam voluptas'
						price={1050}
						image='https://howtoremove.guide/wp-content/uploads/2020/06/ipad-pro-2020.png'
						rating={4}
					/>
				</div>
				<div className='home_row'>
					<Product
						id={uid()}
						title='The Mixer: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nulla iure totam impedit numquam voluptas '
						price={20}
						image='http://images.hayneedle.com/mgen/master:KITC141.jpg'
						rating={3}
					/>
					<Product
						id={uid()}
						title='Smart Watch: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nulla iure totam impedit numquam voluptas'
						price={150}
						image='https://i5.walmartimages.com/asr/a8c7ce2c-fb1d-4e4b-aec2-796829b12df9.3cf7eae51a3ca533c6749affdee9b59c.jpeg'
						rating={4}
					/>
					<Product
						id={uid()}
						title='Speaker: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nulla iure totam impedit numquam voluptas'
						price={65}
						image='https://i5.walmartimages.com/asr/e819b9cb-fa8b-401e-9b03-8f3294ab7c17_1.6122f5024a7e6f8fb0cd3c05e30b03e8.jpeg'
						rating={3}
					/>
				</div>
				<div className='home_row'>
					<Product
						id={uid()}
						title='Smart TV: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nulla iure totam impedit numquam voluptas'
						price={500}
						image='https://i01.appmifile.com/webfile/globalimg/7/E5F73D2A-3086-A8A6-CF7D-9BB24604449B.png'
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
