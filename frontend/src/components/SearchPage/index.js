import React from 'react';
import './SearchPage.css';
import SearchResult from "../SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>Browse</h1>
            </div>
            <SearchResult
                id={1}
                img="https://media.timeout.com/images/100432609/image.jpg"
                borough="Queens"
                name="Flushing Meadows Corona Park"
                description="One of the city's most iconic parks, and the site of two twentieth century World's Fairs, Flushing Meadows Corona Park continues to draw and delight visitors. From historic walks, to scenic trails, to sports and activities, there's always something to do here. You can play soccer, baseball, tennis, volleyball, cricket and more; work out at our recreation center or our indoor pool; explore the park's lakes and trails by foot, bike, or kayak; or visit one of the park's many cultural and civic institutions. Spend your day in a park that has it all!"
                rating={4.73}
                cleanliness={3.1}
                numOfPits="2"
                bench="Yes"
                garbageCan="No"
            />
            <SearchResult
                id={2}
                img="https://www.amny.com/wp-content/uploads/2020/08/Randalls-Island-Park-Alliance-hell-gate-meadow-scaled.jpg"
                borough="Manhattan"
                name="Randall's Island Park"
                description="An oasis in the middle of New York City, Randall’s Island Park comprises most of an island in the East River, between East Harlem, the South Bronx and Astoria, Queens."
                rating={5.0}
                cleanliness={3.7}
                numOfPits="4"
                bench="Yes"
                garbageCan="Yes"
            />
            <SearchResult
                id={3}
                img="https://www.nycgovparks.org/photo_gallery/full_size/23030.jpg"
                borough="Queens"
                name="Cunningham Park"
                description="Culture, sports, nature... and fun! All of these things abound in Cunningham Park, one of the largest parks in Queens.  Assembled between 1928 and 1944 and named Cunningham Park in 1934, the space has developed into headquarters for countless athletic leagues, animals, playmates, and barbecue enthusiasts."
                rating={3.62}
                cleanliness={4.3}
                numOfPits="1"
                bench="Yes"
                garbageCan="Yes"
            />
            <SearchResult
                id={4}
                img="https://riverdalepress.com/uploads/original/20200405-185037-IMG_7382.jpg"
                borough="The Bronx"
                name="Van Cortlandt Park"
                description="Van Cortlandt Park — more than a thousand acres atop the ridges and valleys of the northwest Bronx — is New York City's third largest park. Playing fields and playgrounds are scattered about the park's edges, surrounding a richly forested heartland fed by Tibbets Brook. The park is home to the country's first public golf course, the oldest house in the Bronx, and the borough's largest freshwater lake."
                rating={4.98}
                cleanliness={4.9}
                numOfPits="2"
                bench="No"
                garbageCan="Yes"
            />
            <SearchResult
                id={5}
                img="https://media.timeout.com/images/100453991/image.jpg"
                borough="Brooklyn"
                name="McCarren Park"
                description="A park equally valued and cherished in Greenpoint and Williamsburg, McCarren Park is the site of endless games of kickball, soccer, baseball, bocce, handball, basketball, football, and tennis, not to mention running meets and playground antics. It is 35 acres of bustling activity, shared by families born into the neighborhood, recent immigrants, and young renters. McCarren Park is home to the McCarren Park Pool and Play Center, completed in 2012 to be respite on hot days and a year-round center of community life."
                rating={2.73}
                cleanliness={1.9}
                numOfPits="1"
                bench="No"
                garbageCan="No"
            />
            <SearchResult
                id={6}
                img="https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.silive.com/home/silive-media/width2048/img/latest_news/photo/clove-lakes-13851cd0c9fe4278.jpg"
                borough="Staten Island"
                name="Clove Lakes Park"
                description="A protected Forever Wild site because of its valuable ecological assets, Clove Lakes Park has a rich natural history and a few remnants of the past that remain and continue to thrill visitors. Chief among them are the park's lakes and ponds, outcroppings of serpentine rocks, and Staten Island's largest living things, a three hundred year-old tulip tree."
                rating={4.9}
                cleanliness={4.9}
                numOfPits="4"
                bench="Yes"
                garbageCan="Yes"
            />
        </div>
    )
}

export default SearchPage
