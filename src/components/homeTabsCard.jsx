import TabsSwitch from "./tabsSwitch";
import TabsCard from "./tabsCard";

const tabsData = [
  {
    label: "All Products",
    content: (
      <>
        <TabsCard product="PRODUCT 1" />
        <TabsCard product="PRODUCT 2" />
        <TabsCard product="PRODUCT 3" />
      </>
    )
  },
  {
    label: "Serum",
    content: (
      <>
        <TabsCard product="SERUM A" />
        <TabsCard product="SERUM B" />
      </>
    )
  },
  {
    label: "Facial Wash & Toner",
    content: (
      <>
        <TabsCard product="FACIAL WASH A" />
      </>
    )
  },
  {
    label: "Face Cream",
    content: (
      <>
        <TabsCard product="FACE CREAM A" />
      </>
    )
  }
];

export default function Page() {
  return <TabsSwitch tabs={tabsData} />;
}