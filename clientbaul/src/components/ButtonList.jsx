export const ButtonList = ({ categories, filterCategory }) => {
	return (
		<div className="col-1-1">
			<div className="filters ">
				{categories.map(category => (
					<button
						type='button'
						className='filter'
						onClick={() => filterCategory(category)}
						key={category}
					>
						{category}
					</button>
				))}
			</div>
		</div>

	);
};