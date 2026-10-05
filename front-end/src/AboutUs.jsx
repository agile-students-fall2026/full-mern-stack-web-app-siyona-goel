import { useState, useEffect } from 'react'

// About Us function
const AboutUs = () => {
    // hold the data for About Us gotten from the back-end
    const [content, setContent] = useState(null)

    useEffect(() => {
        // request the About Us JSON from back-end
        fetch('http://localhost:5002/about')
            .then(res => res.json())
            .then(data => setContent(data))
            // log error to browser console if the request fails
            .catch(err => console.error(err))
    }, [])

    // content is null on the first render
    // content.title throws an error without this line of code
    if (!content) return <p>Loading...</p>

    return (
        <div>
            <h1>{content.title}</h1>    {/* page title */}    
            <img src={content.imageUrl} alt="Siyona" width="200"/>  {/* image URL */}
            {/* render one paragraph per string */}
            {content.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
            ))}
        </div>
    )
}

export default AboutUs
