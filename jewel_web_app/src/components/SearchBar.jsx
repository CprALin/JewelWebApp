
export default function SearchBar() {
  return (
    <div className="fixed top-[25px] right-0">
      <div className="mb-3 xl:w-96">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
                type="search"
                className="relative m-0 block flex-auto rounded border border-solid border-text-1 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-text-1 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-text-1 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-text-1 dark:text-neutral-200 dark:placeholder:text-text-1 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2" />

            <span
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-text-1 dark:text-neutral-200"
                id="basic-addon2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#faf6f0"
                    className="h-5 w-5">
                    <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd" />
                </svg>
            </span>
        </div>
      </div>
    </div>
  )
}
