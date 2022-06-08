import React, {useEffect} from "react";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        isSelected,
        setIsSelected
    } = props

    useEffect(() => {
        document.title = currentCategory.name;
      }, [currentCategory]);

    return (
        <header>
            <h2>
                <a href="/">David Samuelson</a>
            </h2>
            <nav>
                <ul className="nav-ul">
                    {categories.map((category) => (
                        <li
                        className={`nav-li ${currentCategory.name === category.name && isSelected && 'nav-active'}`}
                        key={category.name}>
                            <span
                            onClick={() => {
                                setCurrentCategory(category);

                                    setIsSelected(true);
                            }}
                            title={category.description}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;