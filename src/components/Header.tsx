export const Header = () => {
  return(
    <header className="w-full flex justify-between items-center py-2 px-4 shadow-md">
      <h3 className="text-2xl">Davids Todos</h3>
        <ul className="flex gap-4">
          <li>About</li>
          <li>Log in</li>
        </ul>
    </header>
  );
}