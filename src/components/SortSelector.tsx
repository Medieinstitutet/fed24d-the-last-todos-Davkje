type SortSelectorProps = {
	sortBy: "name-asc" | "name-desc" | "status";
	setSortBy: (value: "name-asc" | "name-desc" | "status") => void;
};

export const SortSelector = ({ sortBy, setSortBy }: SortSelectorProps) => {
	return (
		<div className="p-4 rounded-2xl w-full flex flex-col items-center justify-start gap-2 border-2 border-gray-300 dark:border-gray-700">
			<h2 className="text-2xl">Sort Todos</h2>
			<label htmlFor="sort" className="text-[clamp(1.2rem,2vw,1.6rem)] flex justify-center gap-2">
				Sort By
			</label>
			<select
				id="sort"
				value={sortBy}
				onChange={(e) => setSortBy(e.target.value as SortSelectorProps["sortBy"])}
				className="w-full text-lg max-w-lg px-2 py-3 rounded-md border-2 bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-700 text-gray-800 dark:text-white dark:hover:bg-gray-800  hover:border-gray-200 dark:hover:border-gray-800"
			>
				<option value="name-asc">Name A-Z</option>
				<option value="name-desc">Name Z-A</option>
				<option value="status">Status</option>
			</select>
		</div>
	);
};
