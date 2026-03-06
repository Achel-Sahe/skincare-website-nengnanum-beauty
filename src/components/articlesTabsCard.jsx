import TabsSwitch from "./tabsSwitch";
import ArticleBlog from "./articleBlog";
import img from '../assets/assets-1.jpeg'
import img2 from '../assets/assets-2.jpeg'
import img3 from '../assets/assets-3.jpeg'
const ArticlesTabsData = [
  {
    label: "All ",
    content: (
      <>
        <ArticleBlog img={img} title="Understanding Acne" subtitle="Acne" isi="Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. Lorem ipsum dolor sit amet." />
        <ArticleBlog img={img2} title="Hydration Tips" subtitle="Hydration" isi="Proper hydration is essential for maintaining healthy skin. Learn how to keep your skin moisturized and glowing." />
        <ArticleBlog img={img3} title="Skincare Routine" subtitle="Routine" isi="Establishing a consistent skincare routine can help improve your skin's health and appearance. Discover the steps to create an effective routine" />
      </>
    )
  },
  {
    label: "Acne",
    content: (
      <>
        <ArticleBlog img={img} title="Understanding Acne" subtitle="Acne" isi="Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. Lorem ipsum dolor sit amet." />
      </>
    )
  },
  {
    label: "Hydration",
    content: (
      <>
        <ArticleBlog img={img2} title="Hydration Tips" subtitle="Hydration" isi="Proper hydration is essential for maintaining healthy skin. Learn how to keep your skin moisturized and glowing." />
      </>
    )
  },
  {
    label: "Routine",
    content: (
      <>
        <ArticleBlog img={img3} title="Skincare Routine" subtitle="Routine" isi="Establishing a consistent skincare routine can help improve your skin's health and appearance. Discover the steps to create an effective routine" />
      </>
    )
  }
];

export default function Page() {
  return <TabsSwitch tabs={ArticlesTabsData} />;
}