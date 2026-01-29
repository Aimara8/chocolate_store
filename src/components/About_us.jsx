import cocoBean from'../assets/cocoa-beans.jpg'
import chocolateMug from '../assets/chocolate-mug.webp'

const About_us = () => {
    return (
        <section className="container w-full min-h-[calc(screen-4rem)] flex flex-col">
            <div className="flex flex-row w-full flex-1">
                <img src={cocoBean} alt="Cocoa Beans" className='w-1/2 h-full object-cover'/>
                <div className='w-1/2 pl-4 pr-4 flex justify-center items-center flex-col'>
                    <h2 className='text-xl font-bold pb-4'>From Bean to Bar: A Story of Passion and Quality</h2>
                    <p>
                        Our chocolate begins its journey in the lush, sun-drenched cacao plantations of Ecuador, Peru, and the Dominican Republic, where the finest cacao beans are nurtured by the hands of skilled farmers.
                        We partner directly with small-scale producers who share our commitment to sustainability, fair trade, and exceptional quality.
                        These farmers cultivate cacao using traditional methods, allowing the beans to develop their unique, rich flavors.
                        Once harvested, the beans are carefully fermented and dried to enhance their natural complexity.
                        We then source these premium beans and transform them into chocolate in our workshop, preserving their authentic taste and aroma.
                        Every step—from roasting to conching—is done with precision, ensuring that each bar reflects the essence of its origin and the dedication of those who made it possible.
                    </p>
                </div>
            </div>
            <div className="flex flex-row w-full flex-1">
                <div className='w-1/2 pl-4 pr-4 flex justify-center items-center flex-col'>
                    <h2 className='text-xl font-bold pb-4'>Chocolate Store: Where Tradition Meets Craftsmanship</h2>
                    <p>
                        We don’t just sell chocolate—we share a passion for artisan craftsmanship and ethical indulgence. 
                        Located in the heart of Fuerteventura, our shop is a celebration of chocolate in its purest and most creative forms.
                        We specialize in small-batch chocolates, made with 100% traceable cacao and natural ingredients. 
                        Whether you’re savoring a single-origin bar, a handcrafted truffle, or a custom gift box, every piece tells a story of quality, care, and connection—from the farmers who grow the cacao to the hands that shape it into chocolate.
                        Visit us and experience the difference that ethical sourcing, artisanal skill, and a love for chocolate can make.
                    </p>
                </div>
                <img src={chocolateMug} alt="Chocolate Mug" className='w-1/2 h-full object-cover'/>
            </div>
        </section>
    )
}

export default About_us