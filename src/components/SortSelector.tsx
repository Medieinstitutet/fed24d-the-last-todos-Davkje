type SortSelectorProps = {
	sortBy: "name-asc" | "name-desc" | "status";
	setSortBy: (value: "name-asc" | "name-desc" | "status") => void;
};

export const SortSelector = ({ sortBy, setSortBy }: SortSelectorProps) => {
	return (
		<div className="container">
			<label htmlFor="sort">Sort by:</label>
			<select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value as SortSelectorProps["sortBy"])}>
				<option value="name-asc">Name A-Z</option>
				<option value="name-desc">Name Z-A</option>
				<option value="status">Status</option>
			</select>
		</div>
	);
};
