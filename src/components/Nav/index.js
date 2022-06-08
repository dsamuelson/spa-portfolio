import React, {useEffect} from "react";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
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
                <ul>
                    {categories.map((category) => (
                        <li
                        key={category.name}>
                            <span
                            onClick={() => {
                                setCurrentCategory(category);
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