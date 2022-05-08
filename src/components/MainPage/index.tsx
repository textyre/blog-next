import { HelloWorld } from "@components/MainPage/HelloWorld";
import { Experience } from "@components/MainPage/Experience/Experience";
import { Tools } from "@components/MainPage/Tools";
import { BlogPosts } from "@components/MainPage/BlogPosts";
import { Footer } from "@components/MainPage/Footer";

export const MainPage = () => (
  <main>
    <HelloWorld />
    <Experience />
    <Tools />
    <BlogPosts />
    <Footer />
  </main>
);
