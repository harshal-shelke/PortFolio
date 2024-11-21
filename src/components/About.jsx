import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl"> About <span className="text-neutral-500">Me</span> </h2>

            <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/4 xl:w-2/3">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 text-lg leading-relaxed text-justify px-4 lg:px-8">{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
