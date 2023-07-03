import Feed from "@components/Feed";
const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & share
                <br className="min-md:hidden" />
                <span className="orange_gradient text-center"> Life Quotes</span>
            </h1>
            <p className="desc text-center">
                Life Quotes — Inspiring the Happy, Good and Funny in Life
            </p>
            <Feed />
        </section>
    );
};


export default Home;